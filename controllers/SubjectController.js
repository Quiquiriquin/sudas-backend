import models from '../models/index';

const SubjectController = {
    create: async (req, res) => {
        try {
            const { body } = req;
            console.log(body);
            const subject = await models.subject.create({
                ...body,
            });
            const getSubject = await models.subject.findByPk(subject.id, {
                include: {
                    all: true,
                },
            });

            return res.status(201).send(getSubject);
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
    getRelatedSubjects: async (req, res) => {
        try {
            const { semester, academicPlanId } = req.params;
            const base = parseInt(semester);
            const [befPrev, prev] = base >= 3 ? [base - 2, base - 1] : base === 2 ? [0, 1] : [0,0];
            const [next, afNext] = [base + 1, base + 2];
            console.log(semester);
            let same = await models.academicPlanSubject.findAll({
                where: {
                    semester,
                    academicPlanId,
                },
            });
            let beforePrevSem = befPrev === 0 ? [] : await models.academicPlanSubject.findAll({
                where: {
                    semester: befPrev,
                    academicPlanId,
                },
            });
            let prevSem = prev === 0 ? [] : await models.academicPlanSubject.findAll({
                where: {
                    semester: prev,
                    academicPlanId,
                },
            });
            let nextSem = await models.academicPlanSubject.findAll({
                where: {
                    semester: next,
                    academicPlanId,
                },
            });
            let afNextSem = await models.academicPlanSubject.findAll({
                where: {
                    semester: afNext,
                    academicPlanId,
                },
            });

            const finalPrevIds = new Set([]);
            const finalPrev = [];
            beforePrevSem.forEach(({ id, dataValues }) => {
                if (!finalPrevIds.has(id)) {
                    finalPrev.push({
                        id,
                        ...dataValues,
                    });
                    finalPrevIds.add(id);
                }
            });
            prevSem.forEach(({ id, dataValues }) => {
                if (!finalPrevIds.has(id)) {
                    finalPrev.push({
                        id,
                        ...dataValues,
                    });
                    finalPrevIds.add(id);
                }
            });
            const finalNextIds = new Set([]);
            const finalNext = [];
            nextSem.forEach(({ id, dataValues }) => {
                if (!finalNextIds.has(id)) {
                    finalNext.push({
                        id,
                        ...dataValues,
                    });
                    finalNextIds.add(id);
                }
            });
            afNextSem.forEach(({ id, dataValues }) => {
                if (!finalNextIds.has(id)) {
                    finalNext.push({
                        id,
                        ...dataValues,
                    });
                    finalNextIds.add(id);
                }
            });

            return res.status(200).send({
                same,
                prev: finalPrev,
                next: finalNext,
              });
        } catch (e) {
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
            const { id: paramsId } = req.params;
            const { id: bodyId, coordinator, collaborators, strategyId, relatedUnits, ...fields } = req.body;
            let id = paramsId || bodyId;
            await models.subject.update(
              {
                  ...fields,
              },
              {
                  where: {
                      id,
                  },
              }
            );
            if (coordinator || collaborators) {
                const subjectCoordinator = await models.subject.findByPk(id);
                console.log(id);
                if (coordinator) {
                    await subjectCoordinator.addCoordinator(coordinator);
                }
                if (collaborators) {
                    await subjectCoordinator.addCollaborator(collaborators);
                }
                await subjectCoordinator.save();
            }
            if (strategyId) {
                const subjectStrategy = await models.subject.findByPk(id);
                console.log(subjectStrategy);
                await subjectStrategy.setStrategy(strategyId);
            }
            const subject = await models.subject.findByPk(id, {
                include: [
                    {
                        model: models.strategy,
                        as: 'strategy',
                    }
                ]
            });
            if (relatedUnits) {
                console.log(relatedUnits);
                if (relatedUnits.prev) {
                    await subject.setPrev(relatedUnits.prev);
                }
                if (relatedUnits.same) {
                    await subject.setSame(relatedUnits.same);
                }
                if (relatedUnits.next) {
                    await subject.setNext(relatedUnits.next);
                }
            }
            const reqSubject = await models.subject.findByPk(id, {
                include: [
                    {
                        model: models.strategy,
                        as: 'strategy',
                    },
                    {
                        model: models.academicPlanSubject,
                        as: 'prev',
                    },
                    {
                        model: models.academicPlanSubject,
                        as: 'same',
                    },
                    {
                        model: models.academicPlanSubject,
                        as: 'next',
                    },
                ],
            });
            return res.status(200).send(reqSubject);
        } catch (e) {
            console.log(e);
            return res.status(400).send({
                message: 'Error occurred',
                errors: e.errors,
            });
        }
    },
    collaboratorSubjects: async (req, res) => {
        try {
            const { collaborator } = req.params;
            const user = await models.user.findByPk(collaborator);
            if (user) {
                const coordinatorSubjects = await user.getCoordinator();
                const collaboratorSubjects = await user.getCollaborator();
                const aux = coordinatorSubjects.concat(collaboratorSubjects);
                return res.status(200).send(aux);
            } else {
                return res.status(200).send([]);
            }
        } catch (e) {
            console.log(e);
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
