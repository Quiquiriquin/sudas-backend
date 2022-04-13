'use strict';

module.exports = function (sequelize, DataTypes) {
  var Strategy = sequelize.define('strategy', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    label: {
      allowNull: false,
      type: DataTypes.STRING
    },
    description: {
      allowNull: false,
      type: DataTypes.STRING(1000)
    }
  }, {
    timestamps: true,
    freezeTableName: true,
    classMethods: {}
  });
  Strategy.associate = function (models) {};
  return Strategy;
};