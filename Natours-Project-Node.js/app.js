const fs = require('fs');
const express = require('express');
const morgan = require('morgan');

const app = express();

// Third Party middleware :
//morgan is a middleware that logs the details of the request and response in the console.
app.use(morgan('dev'));

// Built-in Express middleware :
//when doing a post request, we need this middleware to be able to read the body of the request and parse it into a JavaScript object
// JSON body parser middleware:
app.use(express.json());

//My custom middleware :
// If our middlware comes before the route handler funtions it will be applied to all but If our middlware comes after the route handler function, it will not be executed.
app.use((req, res, next) => {
  console.log('Hello from Middleware....');
  console.log(`Request Method: ${req.method}`);
  console.log(`Request Time: ${new Date().toISOString()}`);
  //this next function is used to pass the control to the next middleware function in the stack, if we don't call next() the request will be stuck and will not be able to reach the route handler function.
  next();
});

//get,post,patch,delete are http methods, '/api/v1/tours' is called route, (req, res) => {} is the route handler function that will be executed when a request is made to this route.

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`),
);

//Route Handlers:

const getAllTours = (req, res) => {
  res
    .status(200)
    .json({ status: 'success', result: tours.length, data: { tours } });
};

const getTour = (req, res) => {
  //req.params.id is a string, we need to convert it to a number usin * 1

  const tour = tours.find((el) => el.id === req.params.id * 1);
  if (!tour) {
    return res.status(404).json({ status: 'fail', message: 'Invalid ID' });
  }
  res.status(200).json({ status: 'success', data: { tour } });
};

const createTour = (req, res) => {
  newId = tours[tours.length - 1].id + 1;
  //Object.assign() is a method that combines two or more objects into one.
  const newTour = Object.assign({ id: newId }, req.body);
  tours.push(newTour);
  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    //JSON.stringify() is a method that converts a JavaScript object into a JSON string.
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({ status: 'success', data: { tour: newTour } });
    },
  );
};

const updateTour = (req, res) => {
  console.log(req.params.id);
  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({ status: 'fail', message: 'Invalid ID' });
  }
  res
    .status(200)
    .json({ status: 'success', data: { tour: 'Updated tour here...' } });
};

const deleteTour = (req, res) => {
  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({ status: 'fail', message: 'Invalid ID' });
  }

  res.status(204).json({ status: 'success', data: null });
};

//Routes
app.route('/api/v1/tours').get(getAllTours).post(createTour);
app
  .route('/api/v1/tours/:id')
  .get(getTour)
  .patch(updateTour)
  .delete(deleteTour);

const port = 3000;
app.listen(port, () => {
  console.log(`app listens on port ${port}`);
});
