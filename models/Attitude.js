module.exports = (sequelize, DataTypes) => {
  const Attitude = sequelize.define('attitude', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING,
    },
  }, {
    timestamps: true,
    freezeTableName: true,
    classMethods: {}
  });
  Attitude.associate = function(models) {
    // associations can be defined here
  };
  return Attitude;
};