const db = require("../config/db")
const Sequelize = require("sequelize")

const Park = require("./park")
const Review = require("./review")
const User = require("./user")

const user = UserModel(db, Sequelize)
const park = ParcModel(db, Sequelize)
const review = ReviewModel(db, Sequelize)

module.exports = {
    park,
    review,
    user,
    db,
}
