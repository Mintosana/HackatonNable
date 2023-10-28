const db = require("../config/db")
const {Sequelize} = require("sequelize")

const ParkModel = require("./Park")
const ReviewModel = require("./Review")
const UserModel = require("./User")

const user = new UserModel(db, Sequelize)
const park = new ParkModel(db, Sequelize)
const review = new ReviewModel(db, Sequelize)

module.exports = {
    park,
    review,
    user,
    db,
}