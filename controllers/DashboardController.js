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
            console.log(users);
            return res.status(201).send({
                users,
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