module.exports = (sequelize, DataTypes) => {
    const AcademicPlanSubject = sequelize.define('academicPlanSubject', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        semester: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
        },
    }, {
        timestamps: true,
        freezeTableName: true,
        classMethods: {}
    });
    AcademicPlanSubject.associate = function(models) {
        // associations can be defined here
        AcademicPlanSubject.belongsTo(models.academicPlan, {
            foreignKey: 'academicPlanId',
        });

        AcademicPlanSubject.belongsToMany(models.subject, {
            through: 'SameSubject',
            as: 'same'
        });
        AcademicPlanSubject.belongsToMany(models.subject, {
            through: 'NextSubject',
            as: 'next'
        });
        AcademicPlanSubject.belongsToMany(models.subject, {
            through: 'PrevSubject',
            as: 'prev'
        });
    };
    return AcademicPlanSubject;
};