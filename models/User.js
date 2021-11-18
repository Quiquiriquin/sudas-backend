module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    firstSurname: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    secondSurname: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    academicGrade: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    department: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    status: {
      allowNull: true,
      defaultValue: 'ACTIVE',
      type: DataTypes.ENUM({
        values: ['ACTIVE', 'INACTIVE', 'BLOCKED', 'PENDING']
      }),
    },
    password: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    role: {
      type: DataTypes.ENUM,
      defaultValue: 'ADMIN',
      values: ['ADMIN', 'USER', 'STUDENT'],
      allowNull: false,
    }
  }, {
    timestamps: false,
    freezeTableName: true,
    classMethods: {}
  });
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};