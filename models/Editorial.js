module.exports = (sequelize, DataTypes) => {
    const Editorial = sequelize.define('editorial', {
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
    Editorial.associate = function(models) {
        // associations can be defined here
        Editorial.hasMany(models.bibliography, {
            foreignKey: 'editorialId',
        })
    };
    return Editorial;
};
