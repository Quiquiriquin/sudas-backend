import models from '../models/index';

const AcademicPlanController = {
    create: async (req, res) => {
        try {
            const { body } = req;
            const newAcademicPlan = await models.academicPlan.create(body);
            return res.status(201).send(newAcademicPlan);
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
            const plans = await models.academicPlan.findAll();
            return res.status(200).send(
                plans,
            );
        } catch (e) {
            return res.status(400).send({
                message: 'Something happened',
                errors: e.errors,
            });
        }
    },
    get: async (req, res) => {
        try {
            const { id } = req.params;
            const verb = await models.verb.findOne({
                where: {
                    id,
                },
            });
            return res.status(200).send(verb);
        } catch (e) {
            console.log(e);
            return res.status(400).send(e);
        }
    },
    update: async (req, res) => {
        try {
            const { id, description } = req.body;
            const updatedVerb = await models.verb.update(
                {
                    description,
                },
                {
                    where: {
                        id,
                    },
                }
            );
            return res.status(200).send({ message: 'Verb updated' });
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
            await models.verb.destroy({
                where: {
                    id,
                },
            });
            return res.status(200).send({ message: 'Verb deleted' });
        } catch (e) {
            console.log(e);
            return res.status(400).send({
                message: 'Error occurred',
                errors: e.errors,
            });
        }
    },
};

export default AcademicPlanController;