const db = require("../config/db")
const { Sequelize } = require("sequelize")

const ParkModel = require("./Park")
const ReviewModel = require("./Review")
const UserModel = require("./User")

const user = UserModel(db, Sequelize)
const park = ParkModel(db, Sequelize)
const review = ReviewModel(db, Sequelize)

module.exports = {
    park,
    review,
    user,
    db,
}