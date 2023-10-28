module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "users",
    {
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
    }, 
    {
      freezeTableName: true,
    },
  );
};