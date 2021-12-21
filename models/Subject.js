module.exports = (sequelize, DataTypes) => {
    const Subject = sequelize.define('subject', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        semester: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        modality: {
            type: DataTypes.ENUM({
                values: ['FACE2FACE', 'ONLINE']
            }),
            allowNull: true,
        },
        trainingArea: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        tepic: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        satca: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        totalHours: {
            type: DataTypes.FLOAT,
            allowNull: true,
        },
        theoryWeek: {
            type: DataTypes.FLOAT,
            allowNull: true,
        },
        practiceWeek: {
            type: DataTypes.FLOAT,
            allowNull: true,
        },
        theorySemester: {
            type: DataTypes.FLOAT,
            allowNull: true,
        },
        practiceSemester: {
            type: DataTypes.FLOAT,
            allowNull: true,
        },
        autonomousLearning: {
            type: DataTypes.FLOAT,
            allowNull: true,
            defaultValue: 0
        },
        educationalIntention: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        purpose: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    }, {
        timestamps: true,
        freezeTableName: true,
        classMethods: {}
    });
    Subject.associate = function(models) {
        // associations can be defined here
        Subject.belongsTo(models.academicPlan, {
            foreignKey: 'academicPlanId',
        });

        Subject.hasOne(models.objective, {
            foreignKey: 'subjectId',
        });

        Subject.hasMany(models.bibliography, {
            foreignKey: 'subjectId',
        });

        Subject.hasMany(models.content, {
            foreignKey: 'subjectId',
        });

/*        Subject.hasOne(models.user, {
            as: 'Coordinator',
        });

        Subject.hasMany(models.user, {
            as: 'Collaborator'
        });*/
    };
    return Subject;
};