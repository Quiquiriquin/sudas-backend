import models from '../models/index';
import moment from "moment";

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
            const today = moment(new Date());
            const plans = await models.academicPlan.findAll({
                include: {
                    all: true,
                }
            });
            const resultPlans = plans.map(({ dataValues: { subjects, ...elem } }) => {
                let active = 0
                let noAssigned = 0
                let stopped = 0
                let total = 0
                for(let i = 0; i < subjects.length; i++){
                    console.log(subjects[i]);
                    const { updatedAt } = subjects[i];
                    const lastUpdate = moment(new Date(updatedAt))
                    const diff = today.diff(lastUpdate, 'days');
                    if (diff >= 3) {
                        stopped += 1;
                    } else {
                        active += 1;
                    }
                    noAssigned += 1;
                    total += 1;
                }

                return {
                    ...elem,
                    subjects: {
                        active,
                        noAssigned,
                        stopped,
                        total
                    },
                };
            })
            return res.status(200).send(
                resultPlans,
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
            const academicPlan = await models.academicPlan.findOne({
                where: {
                    id,
                },
                include: {
                    all: true,
                }
            });
            console.log(academicPlan);
            return res.status(200).send(academicPlan);
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