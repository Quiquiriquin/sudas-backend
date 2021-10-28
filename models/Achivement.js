module.exports = (sequelize, DataTypes) => {
  const Achivement = sequelize.define('achivement', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    description: {
      type: DataTypes.STRING
    }
  }, {
    timestamps: false,
    freezeTableName: true,
    classMethods: {}
  });
  Achivement.associate = function(models) {
    // associations can be defined here
  };
  return Achivement;
};