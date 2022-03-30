module.exports = (sequelize, DataTypes) => {
  const TeacherProfile = sequelize.define('teacherProfile', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    experience: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    profile: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    knowledge: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    skills: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    attitudes: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }, {
    timestamps: true,
    freezeTableName: true,
    classMethods: {}
  });
  TeacherProfile.associate = function(models) {
    // associations can be defined here
    TeacherProfile.belongsTo(models.subject);
  };
  return TeacherProfile;
};
