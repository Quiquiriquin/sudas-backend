import models from '../models/index';

const SubjectController = {
    create: async (req, res) => {
        try {
            const { body } = req;
            const subject = await models.subject.create({
                ...body,
                purpose: 'Evalúa conceptos y ténicas básicas de la microbiología en general con base en los lineamientos de las buenas prácticas de laboratorio'
            });
            return res.status(201).send(subject);
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
            if (query && query.academicPlanId) {
                const filteredSubjects = await models.subject.findAll({
                    where: {
                        academicPlanId: query.academicPlanId
                    },
                    include: {
                        all: true,
                    },
                });
                return res.status(200).send(
                    filteredSubjects,
                );
            }
            const subjects = await models.subject.findAll({
                include: {
                    all: true,
                }
            });
            return res.status(200).send(
                subjects
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
            const subject = await models.subject.findOne({
                where: {
                    id,
                },
                include: {
                    all: true,
                }
            });
            return res.status(200).send(subject);
        } catch (e) {
            console.log(e);
            return res.status(400).send(e);
        }
    },
    getBiblio: async (req, res) => {
        try {
            const { subjectId } = req.params;
            const biblographies = await models.bibliography.findAll({
                where: {
                    subjectId,
                },
                include: {
                    all: true,
                }
            });
            return res.status(200).send(biblographies);
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

export default SubjectController;