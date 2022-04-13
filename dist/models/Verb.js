'use strict';

module.exports = function (sequelize, DataTypes) {
  var Verb = sequelize.define('verb', {
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
  Verb.associate = function (models) {
    // associations can be defined here
  };
  return Verb;
};