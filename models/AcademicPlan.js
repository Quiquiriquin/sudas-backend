module.exports = (sequelize, DataTypes) => {
    const AcademicPlan = sequelize.define('academicPlan', {
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
        shortName: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        semesters: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        modality: {
            type: DataTypes.ENUM({
                values: ['FACE2FACE', 'ONLINE']
            }),
            allowNull: true,
        },
        period: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        status: {
            allowNull: true,
            defaultValue: 'ACTIVE',
            type: DataTypes.ENUM({
                values: ['ACTIVE', 'INACTIVE', 'DELETED']
            }),
        },
    }, {
        timestamps: true,
        freezeTableName: true,
        classMethods: {}
    });
    AcademicPlan.associate = function(models) {
        // associations can be defined here
        AcademicPlan.belongsTo(models.school, {
            foreignKey: 'schoolId',
        })
    };
    return AcademicPlan;
};