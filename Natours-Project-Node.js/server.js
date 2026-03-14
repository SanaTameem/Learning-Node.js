const dotenv = require('dotenv');

dotenv.config({ path: `${__dirname}/config.env` }); // load env variables

const app = require('./app');

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`app listens on port ${port}`);
});
