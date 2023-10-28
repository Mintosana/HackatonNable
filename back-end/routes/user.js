const express = require("express");
const router = express.Router();
const userController = require("../controllers/index").UserController;


router.post("/register",userController.registerUser);


module.exports = router;