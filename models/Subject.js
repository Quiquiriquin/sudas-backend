module.exports = (sequelize, DataTypes) => {
    const Subject = sequelize.define('subject', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        name: {
            type: DataTypes.STRING
        },
        semester: {
            type: DataTypes.STRING
        },
        modality: {
            type: DataTypes.ENUM({
                values: ['FACE2FACE', 'ONLINE']
            }),
            allowNull: true,
        },
        trainingArea: {
            type: DataTypes.STRING,
        },
        type: {
            type: DataTypes.STRING
        },
        credits: {
            type: DataTypes.FLOAT,
        },
        totalHours: {
            type: DataTypes.FLOAT,
        },
        theoryWeek: {
            type: DataTypes.FLOAT,
        },
        practiceWeek: {
            type: DataTypes.FLOAT,
        },
        theorySemester: {
            type: DataTypes.FLOAT,
        },
        practiceSemester: {
            type: DataTypes.FLOAT,
        },
        autonomousLearning: {
            type: DataTypes.FLOAT,
        },
    }, {
        timestamps: false,
        freezeTableName: true,
        classMethods: {}
    });
    Subject.associate = function(models) {
        // associations can be defined here
        Subject.belongsTo(models.academicPlan, {
            foreignKey: 'academicPlanId',
        });
    };
    return Subject;
};