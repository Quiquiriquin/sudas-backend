module.exports = (sequelize, DataTypes) => {
  const Purpose = sequelize.define('purpose', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
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

  };
  return Purpose;
};
