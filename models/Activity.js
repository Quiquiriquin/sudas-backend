module.exports = (sequelize, DataTypes) => {
    const Activity = sequelize.define('activity', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        title: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.STRING
        }
    }, {
        timestamps: true,
        freezeTableName: true,
        classMethods: {}
    });
    Activity.associate = function(models) {
        // associations can be defined here
        Activity.belongsTo(models.unitCompetence);
    };
    return Activity;
};