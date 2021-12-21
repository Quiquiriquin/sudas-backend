module.exports = (sequelize, DataTypes) => {
    const Content = sequelize.define('content', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        position: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
        },
        topics: {
            type: DataTypes.JSON,
            allowNull: true,
        },
    }, {
        timestamps: true,
        freezeTableName: true,
        classMethods: {}
    });
    Content.associate = function(models) {
        // associations can be defined here
        Content.hasOne(models.unitCompetence, {
            foreignKey: 'contentId',
        });


        Content.belongsTo(models.subject, {
            foreignKey: 'subjectId',
        })
    };
    return Content;
};