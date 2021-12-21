import models from '../models/index';

const ContentController = {
    create: async (req, res) => {
        try {
            const { body } = req;
            const unit = await models.unitCompetence.create(body);
            return res.status(201).send(unit);
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
                include: {
                    all: true,
                },
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
            const content = await models.unitCompetence.findOne({
                where: {
                    contentId: id,
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
            const updatedContent = await models.unitCompetence.update(
                {
                    ...body,
                },
                {
                    where: {
                        id,
                    },
                }
            );
            return res.status(200).send({ message: 'Unit Competence updated' });
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
            await models.unitCompetence.destroy({
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