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
                values: ['FACE2FACE', 'ONLINE', 'MIX']
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
            type: DataTypes.STRING(1000),
            allowNull: true,
        },
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

        Subject.hasMany(models.unitCompetence, {
          as: 'competences',
        });

        Subject.hasMany(models.bibliography, {
            foreignKey: 'subjectId',
        });

        Subject.hasMany(models.content, {
            foreignKey: 'subjectId',
        });

        Subject.hasOne(models.purpose, {
            foreignKey: 'subjectId',
        });

        Subject.belongsToMany(models.user, {
            through: 'CoordinatorSubject',
            as: 'Coordinator',
        });

        // Subject.belongsTo(models.user, {
        //     foreignKey: 'coordinatorId',
        //     as: 'Coordinator',
        // });
        // Subject.belongsToMany(models.user, {
        //     foreignKey: 'collaboratorId',
        //     as: 'Collaborator',
        //     through: 'SubjectCollaborator'
        // });
        // Subject.belongsTo(models.user);
        Subject.belongsToMany(models.user, {
            through: 'CollaboratorSubject',
            as: 'Collaborator',
        });
    };
    return Subject;
};
