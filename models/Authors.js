module.exports = (sequelize, DataTypes) => {
    const Author = sequelize.define('author', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        name: {
            allowNull: false,
            type: DataTypes.STRING
        }
    }, {
        timestamps: true,
        freezeTableName: true,
        classMethods: {}
    });
    Author.associate = function(models) {
        // associations can be defined here
        Author.hasMany(models.bibliography, {
            foreignKey: 'authorId',
            as: 'author'
        });
    };
    return Author;
};
