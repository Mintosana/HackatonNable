const {Sequelize, DataTypes} = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const Review = sequelize.define('Review',{
  idUser:{
    type: DataTypes.INTEGER,
    allowNull: false
  },

  idParc:{
    type: DataTypes.INTEGER,
    allowNull: false
  },

  descriere:{
    type: DataTypes.STRING,
  },

  rating:{
    type:DataTypes.FLOAT,
    defaltValue: 5,
    allowNull: false
  },
})

module.exports = Review