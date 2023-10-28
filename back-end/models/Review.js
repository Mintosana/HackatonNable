module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "reviews",
    {
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
    },
    {
      freezeTableName: true,
    }
  )
}