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
        },
        type: {
            type: DataTypes.ENUM,
            values: ['BASIC', 'COMPLEMENTARY', 'CYBER', 'DIGITAL'],
            defaultValue: 'BASIC',
        },
        library: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    }, {
        timestamps: true,
        freezeTableName: true,
        classMethods: {}
    });
    Bibliography.associate = function(models) {
        // associations can be defined here
        Bibliography.hasOne(models.editorial, {
            foreignKey: 'bibliographyId',
            as: 'editorial',
        });

        Bibliography.hasOne(models.author, {
            foreignKey: 'bibliographyId',
            as: 'author',
        });
    };
    return Bibliography;
};
