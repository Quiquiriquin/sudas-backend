module.exports = (sequelize, DataTypes) => {
    const School = sequelize.define('school', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        acronym:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        status: {
            allowNull: true,
            defaultValue: 'ACTIVE',
            type: DataTypes.ENUM({
                values: ['ACTIVE', 'INACTIVE', 'DELETED']
            }),
        },
    }, {
        timestamps: true,
        freezeTableName: true,
        classMethods: {}
    });
    School.associate = function(models) {
        // associations can be defined here
    };
    return School;
};