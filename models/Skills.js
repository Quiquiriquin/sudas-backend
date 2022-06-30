module.exports = (sequelize, DataTypes) => {
  const Skills = sequelize.define('skill', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING,
    },
  }, {
    timestamps: true,
    freezeTableName: true,
    classMethods: {}
  });
  Skills.associate = function(models) {
    // associations can be defined here
  };
  return Skills;
};