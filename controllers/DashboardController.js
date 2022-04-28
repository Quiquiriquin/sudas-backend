import sequelize from 'sequelize';
import models from '../models/index';
import bcrypt from 'bcrypt';

const DashboardController = {
    sections: async (req, res) => {
        try {
            const users = await models.user.count({
                where: {
                    status: 'ACTIVE',
                },
            });
            const subjects = await models.subject.count();
            const verbs = await models.verb.count();
            return res.status(201).send({
                users,
                subjects,
                verbs,
            });
        } catch (e) {
            console.log(e);
            res.status(400).send({
                message: 'Error occurred',
                errors: e.errors,
            });
        }
    },
};

export default DashboardController;
