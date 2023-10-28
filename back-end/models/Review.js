module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "reviews",
    {
      userId:{
        type: DataTypes.INTEGER,
        allowNull: false
      },
    
      parkId:{
        type: DataTypes.INTEGER,
        allowNull: false
      },
    
      description:{
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