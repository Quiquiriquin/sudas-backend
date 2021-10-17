module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('role', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    type: {
      type: DataTypes.ENUM,
      defaultValue: 'ADMIN',
      values: ['ADMIN', 'USER', 'STUDENT'],
    }
  }, {
    timestamps: false,
    freezeTableName: true,
    classMethods: {}
  });
  Role.associate = function(models) {
    // associations can be defined here
  };
  return Role;
};