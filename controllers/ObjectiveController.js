import models from '../models/index';

const ObjectiveController = {
    create: async (req, res) => {
        try {
            const { body } = req;
            const objective = await models.objective.create({
                ...body,
            });
            return res.status(201).send(objective);
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
            const { query } = req;
            const filteredObjectives = await models.objective.findAll({
                where: {
                    subjectId: query.subjectId
                },
            });
            return res.status(200).send(
                filteredObjectives
            );
        } catch (e) {
            console.log(e);
            return res.status(400).send({
                message: 'Something happened',
                errors: e.errors,
            });
        }
    },
    get: async (req, res) => {
        try {
            const { id } = req.params;
            const content = await models.objective.findOne({
                where: {
                    id,
                },
            });
            return res.status(200).send(content);
        } catch (e) {
            console.log(e);
            return res.status(400).send(e);
        }
    },
    update: async (req, res) => {
        try {
            const { id, ...body } = req.body;
            const updatedContent = await models.objective.update(
                {
                    ...body,
                },
                {
                    where: {
                        id,
                    },
                }
            );
            return res.status(200).send({ message: 'Objective updated' });
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
            await models.objective.destroy({
                where: {
                    id,
                },
            });
            return res.status(200).send({ message: 'Objective deleted' });
        } catch (e) {
            console.log(e);
            return res.status(400).send({
                message: 'Error occurred',
                errors: e.errors,
            });
        }
    },
};

export default ObjectiveController;