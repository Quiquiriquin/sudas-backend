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

        UnitCompetence.hasOne(models.purpose, {
            foreignKey: 'unitCompentenceId',
        });
    };
    return UnitCompetence;
};
