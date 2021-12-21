import models from '../models/index';

const ContentController = {
    create: async (req, res) => {
        try {
            const { body } = req;
            const content = await models.content.create({
                ...body,
            });
            return res.status(201).send(content);
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
            const filteredContents = await models.content.findAll({
                where: {
                    subjectId: query.subjectId
                },
                include: [
                    {
                        model: models.unitCompetence,
                        attributes: ['id', 'description']
                    }
                ],
            });
            return res.status(200).send(
                filteredContents,
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
            const content = await models.content.findOne({
                where: {
                    id,
                },
                include: {
                    all: true,
                }
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
            const updatedContent = await models.content.update(
                {
                    ...body,
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
            await models.content.destroy({
                where: {
                    id,
                },
            });
            return res.status(200).send({ message: 'Content deleted' });
        } catch (e) {
            console.log(e);
            return res.status(400).send({
                message: 'Error occurred',
                errors: e.errors,
            });
        }
    },
};

export default ContentController;