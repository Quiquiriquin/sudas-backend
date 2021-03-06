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
        topics: {
            type: DataTypes.JSON,
            allowNull: true,
        },
        practices: {
            type: DataTypes.JSON,
            allowNull: true,
        },
        writing: {
            allowNull: false,
            defaultValue: false,
            type: DataTypes.BOOLEAN,
        }
    }, {
        timestamps: true,
        freezeTableName: true,
        classMethods: {}
    });
    UnitCompetence.associate = function(models) {
        // associations can be defined here

        UnitCompetence.belongsTo(models.subject);

        UnitCompetence.hasOne(models.purpose, {
            foreignKey: 'unitCompetenceId',
        });

        UnitCompetence.hasOne(models.method, {
            foreignKey: 'unitCompetenceId',
            as: 'method'
        });
        UnitCompetence.hasMany(models.activity, {
            foreignKey: 'unitCompetenceId',
        });
    };
    return UnitCompetence;
};
