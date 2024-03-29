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
            allowNull: true,
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
        country: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        kind: {
            type: DataTypes.ENUM,
            allowNull: false,
            values: ['BOOK', 'ANTOLOGY', 'OTHER', 'TEXT', 'OTHERS', 'DICTIONARIES', 'KEYNOTES', 'VIDEOS', 'TURORIALS', 'IMAGES', 'SIMUL', 'MEMORY'],
            defaultValue: 'BOOK',
        },
        found: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        url: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        idType: {
            type: DataTypes.ENUM,
            allowNull: false,
            values: ['ISBN', 'ID', 'ISSN', 'DOI'],
            defaultValue: 'ISBN',
        }
    }, {
        timestamps: true,
        freezeTableName: true,
        classMethods: {}
    });
    Bibliography.associate = function(models) {
        // associations can be defined here
        Bibliography.belongsTo(models.editorial, {
            foreignKey: 'editorialId',
            as: 'editorial',
        });

        Bibliography.belongsTo(models.author, {
            foreignKey: 'authorId',
            as: 'author',
        });
    };
    return Bibliography;
};
