module.exports = (sequelize, DataTypes) =>
{
  return sequelize.define(
    "parks",
    {
      parkName: {
        type: DataTypes.STRING,
        allowNull: false
      },

      idOwner: {
        type: DataTypes.INTEGER,
        allowNull: false
      },

      rating: {
        type: DataTypes.FLOAT,
        defaltValue: 5,
        allowNull: false
      },
    },
    {
      freezeTableName: true,
    }
  )
}
