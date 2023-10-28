const db = require("../config/db")
const { Sequelize } = require("sequelize")

const ParkModel = require("./Park")
const ReviewModel = require("./Review")
const UserModel = require("./User")

const user = UserModel(db, Sequelize)
const park = ParkModel(db, Sequelize)
const review = ReviewModel(db, Sequelize)

park.hasOne(user);
user.hasOne(park, {
    foreignKey: {
        name: "ownerId",
    }
});

review.hasOne(user);
user.hasMany(review, {
    foreignKey: {
        name: "userId",
    }
});

review.hasOne(park);
park.hasMany(review, {
    foreignKey: {
        name: "parkId",
    }
});

module.exports = {
    park,
    review,
    user,
    db,
}