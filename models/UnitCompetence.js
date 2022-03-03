module.exports = (sequelize, DataTypes) => {
    const UnitCompetence = sequelize.define('unitCompetence', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        show: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
    }, {
        timestamps: true,
        freezeTableName: true,
        classMethods: {}
    });
    UnitCompetence.associate = function(models) {
        // associations can be defined here
        UnitCompetence.belongsTo(models.content, {
            foreignKey: 'contentId',
        });

        UnitCompetence.belongsTo(models.subject);

        UnitCompetence.hasOne(models.purpose, {
            foreignKey: 'unitCompetenceId',
        });
    };
    return UnitCompetence;
};
