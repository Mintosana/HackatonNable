const {Sequelize, DataTypes} = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const User = sequelize.define('User',{
  firstName:{
    type:DataTypes.STRING,
    allowNull: false
  },

  lastName:{
    type: DataTypes.STRING,
    allowNull: false
  },
  email:{
    type:DataTypes.STRING,
    allowNull: false
  },
  password:{
    type:DataTypes.STRING,
    allowNull: false
  },
  isOwner:{
    type:DataTypes.BOOLEAN,
    allowNull: false
  },
})

module.exports = User;