const express = require("express");
const router = express.Router();
const reviewController = require("../controllers/index").ReviewController;

router.post("/addReview",reviewController.addReview);

module.exports = router;