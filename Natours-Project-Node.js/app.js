const express = require('express');
const fs = require('fs');

//when doing a post request, we need this middleware to be able to read the body of the request and parse it into a JavaScript object

const app = express();
app.use(express.json());

//Get all Tour:
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`),
);

app.get('/api/v1/tours', (req, res) => {
  res
    .status(200)
    .json({ status: 'success', result: tours.length, data: { tours } });
});

//Get a specific Tour:
//:id is a placeholder for the actual id of the tour that we want to get. We can access this id using req.params.id
app.get('/api/v1/tours/:id', (req, res) => {
  //req.params.id is a string, we need to convert it to a number usin * 1

  const tour = tours.find((el) => el.id === req.params.id * 1);
  if (!tour) {
    return res.status(404).json({ status: 'fail', message: 'Invalid ID' });
  }
  res.status(200).json({ status: 'success', data: { tour } });
});

//Post a new Tour:
app.post('/api/v1/tours', (req, res) => {
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
});

//PUT updates the whole resource but patch only updates the fields that we want to update.
app.patch('/api/v1/tours/:id', (req, res) => {
  console.log(req.params.id);
  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({ status: 'fail', message: 'Invalid ID' });
  }

  res
    .status(200)
    .json({ status: 'success', data: { tour: 'Updated tour here...' } });
});

//Delete a Tour:
app.delete('/api/v1/tours/:id', (req, res) => {
  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({ status: 'fail', message: 'Invalid ID' });
  }

  res.status(204).json({ status: 'success', data: null });
});

const port = 3000;

app.listen(port, () => {
  console.log(`app listens on port ${port}`);
});
