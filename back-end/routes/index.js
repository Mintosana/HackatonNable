const express = require("express");
const router = express.Router();

const userRouter = require("./user");
const reviewRouter = require("./review");

router.use(express.json());
router.use("/user", userRouter);
router.use("/review",reviewRouter);

module.exports = router;