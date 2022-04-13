'use strict';

module.exports = function (sequelize, DataTypes) {
  var Role = sequelize.define('role', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    type: {
      type: DataTypes.ENUM,
      defaultValue: 'ADMIN',
      values: ['ADMIN', 'USER', 'STUDENT']
    }
  }, {
    timestamps: true,
    freezeTableName: true,
    classMethods: {}
  });
  Role.associate = function (models) {
    // associations can be defined here
  };
  return Role;
};