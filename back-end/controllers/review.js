const ReviewDb = require("../models").review;

const controller = {
  addReview: async function (req,res){
    try{
      let review = {
        description : req.body.description,
        rating : req.body.rating,
        userId : req.body.userId,
        parkId : req.body.parkId,
      }
      console.log(review);

      const newReview = await ReviewDb.create(review);
      if(newReview){
        res.status(200).send(newReview);
      } 
    }catch(err){
      console.log(err.message);
      res.status(500).send("Server error");
    }
  }
}

module.exports = controller;