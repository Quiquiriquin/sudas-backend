module.exports = (sequelize, DataTypes) => {
  const Purpose = sequelize.define('purpose', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    object: {
      type: DataTypes.STRING(1000),
      allowNull: true,
    },
    quality: {
      type: DataTypes.STRING(1000),
      allowNull: true,
    },
  }, {
    timestamps: true,
    freezeTableName: true,
    classMethods: {}
  });
  Purpose.associate = function(models) {
    // associations can be defined here
    Purpose.belongsTo(models.subject, {
      foreignKey: 'subjectId',
    });
    Purpose.belongsTo(models.verb, {
      foreignKey: 'verbId',
    });
    Purpose.belongsTo(models.connector, {
      foreignKey: 'connectorId',
    });
  };
  return Purpose;
};
