const {Sequelize, DataTypes} = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const Park = sequelize.define('Park',{
  parkName:{
    type:DataTypes.STRING,
    allowNull: false
  },

  idOwner:{
    type:DataTypes.INTEGER,
    allowNull: false
  },

  rating:{
    type:DataTypes.FLOAT,
    defaltValue: 5,
    allowNull: false
  },
})

module.exports = Park;
