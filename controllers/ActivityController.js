import models from '../models/index';

const ActivityController = {
    assign: async (req, res) => {
        try {
            const { unitId } = req.params;
            const { selectedActivities } = req.body;
            if (unitId) {
                const unit = await models.unitCompetence.findByPk(unitId);
                if (unit) {
                    await unit.addActivities(selectedActivities);
                }
                const requestedUnit = await models.unitCompetence.findByPk(unitId, {
                    include: {
                        all: true,
                    },
                });
                return res.status(200).send(requestedUnit.activities);
            }

            return res.status(400).send({
                message: 'Missing parameters',
            });
        } catch (e) {
            console.log(e);
            return res.status(400).send({
                message: 'Error occurred',
                errors: e.errors,
            });
        }
    },
    remove: async (req, res) => {
        try {
            const { unitId } = req.params;
            const { remove } = req.body;
            if (unitId) {
                const unit = await models.unitCompetence.findByPk(unitId);
                if (unit) {
                    await unit.removeActivities(remove);
                }
                const requestedUnit = await models.unitCompetence.findByPk(unitId, {
                    include: {
                        all: true,
                    },
                });
                return res.status(200).send(requestedUnit.activities);
            }

            return res.status(400).send({
                message: 'Missing parameters',
            });
        } catch (e) {
            console.log(e);
            return res.status(400).send({
                message: 'Error occurred',
                errors: e.errors,
            });
        }
    },
    create: async (req, res) => {
        try {
            const { description, title } = req.body;
            const newActivity = await models.activity.create({
                description,
                title,
            });
            return res.status(201).send(newActivity);
        } catch (e) {
            console.log(e);
            return res.status(400).send({
                message: 'Error occurred',
                errors: e.errors,
            });
        }
    },
    list: async (req, res) => {
        try {
            const activities = await models.activity.findAll();
            return res.status(200).send(
                activities,
            );
        } catch (e) {
            console.log(e);
            return res.status(400).send({
                message: 'Something happened',
                errors: e.errors,
            });
        }
    },
    update: async (req, res) => {
        try {
            const { id, description, title } = req.body;
            await models.activity.update(
                {
                    description,
                    title,
                },
                {
                    where: {
                        id,
                    },
                }
            );
            return res.status(200).send({ message: 'Achivement updated' });
        } catch (e) {
            console.log(e);
            return res.status(400).send({
                message: 'Error occurred',
                errors: e.errors,
            });
        }
    },
    delete: async (req, res) => {
        try {
            const { id } = req.params;
            await models.activity.destroy({
                where: {
                    id,
                },
            });
            return res.status(200).send({ message: 'Achivement deleted' });
        } catch (e) {
            console.log(e);
            return res.status(400).send({
                message: 'Error occurred',
                errors: e.errors,
            });
        }
    },
};

export default ActivityController;