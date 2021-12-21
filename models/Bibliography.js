module.exports = (sequelize, DataTypes) => {
    const Bibliography = sequelize.define('bibliography', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        title: {
            allowNull: false,
            type: DataTypes.STRING
        },
        year: {
            allowNull: false,
            type: DataTypes.STRING
        }
    }, {
        timestamps: true,
        freezeTableName: true,
        classMethods: {}
    });
    Bibliography.associate = function(models) {
        // associations can be defined here
        Bibliography.hasMany(models.author, {
            foreignKey: 'bibliographyId'
        });
        Bibliography.hasOne(models.editorial, {
            foreignKey: 'bibliographyId'
        });
    };
    return Bibliography;
};