module.exports = (sequelize, DataTypes) => {
  const Method = sequelize.define('method', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    label: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    description: {
      allowNull: false,
      type: DataTypes.STRING(1000),
    }
  }, {
    timestamps: true,
    freezeTableName: true,
    classMethods: {}
  });
  Method.associate = function(models) {
  };
  return Method;
};
