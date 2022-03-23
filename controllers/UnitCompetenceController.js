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
            const { subjectId } = req.params;
            const units = await models.unitCompetence.findAll({
                where: {
                    subjectId,
                },
                include: {
                    all: true,
                },
            });
            const fixed = units.map(({ ...unit }) => {
                console.log(unit);

                return {
                    ...unit.dataValues,
                    topics: unit.dataValues.topics ? unit.dataValues.topics.topics : null,
                };
            });
            console.log(fixed);
            return res.status(200).send(fixed);
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
            const { id } = req.params;
            const { topics, ...body } = req.body;
            const updatedContent = await models.unitCompetence.update(
                {
                    ...body,
                    topics: {
                        topics,
                    },
                },
                {
                    where: {
                        id,
                    },
                }
            );
            const unit = await models.unitCompetence.findByPk(id);
            return res.status(200).send(unit);
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
