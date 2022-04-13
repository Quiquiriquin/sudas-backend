'use strict';

module.exports = function (sequelize, DataTypes) {
  var Connector = sequelize.define('connector', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    description: {
      type: DataTypes.STRING
    }
  }, {
    timestamps: true,
    freezeTableName: true,
    classMethods: {}
  });
  Connector.associate = function (models) {
    // associations can be defined here
  };
  return Connector;
};