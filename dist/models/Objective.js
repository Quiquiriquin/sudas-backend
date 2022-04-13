'use strict';

module.exports = function (sequelize, DataTypes) {
    var Objective = sequelize.define('objective', {
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
    Objective.associate = function (models) {
        // associations can be defined here
    };
    return Objective;
};