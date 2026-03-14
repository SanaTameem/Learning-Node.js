const express = require('express');
const tourController = require('../controllers/tourController');

const router = express.Router();

//This middleware checks if the id is valid or not.
router.param('id', tourController.checkID);

router
  .route('/')
  .get(tourController.getAllTours)
  //calling the checkBody middleware before creating a tour to check if the name and price is there or not.
  .post(tourController.checkBody, tourController.createTour);
router
  .route('/:id')
  .get(tourController.getTour)
  //calling the checkBody middleware before updating a tour to check if the name and price is there or not.
  .patch(tourController.checkBody, tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = router;
