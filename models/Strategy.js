module.exports = (sequelize, DataTypes) => {
  const Strategy = sequelize.define('strategy', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    label: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    description: {
      allowNull: false,
      type: DataTypes.TEXT('medium'),
    }
  }, {
    timestamps: true,
    freezeTableName: true,
    classMethods: {}
  });
  Strategy.associate = function(models) {
  };
  return Strategy;
};
