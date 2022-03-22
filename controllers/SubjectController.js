import models from '../models/index';

const SubjectController = {
    create: async (req, res) => {
        try {
            const { body } = req;
            const subject = await models.subject.create({
                ...body,
            });
            await subject.createCompetence({
                description: '',
            });
            await subject.createCompetence({
                description: '',
            });
            await subject.createCompetence({
                description: '',
            });
            await subject.createCompetence({
                description: '',
            });
            await subject.createCompetence({
                description: '',
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
            const { semester } = req.params;
            const base = parseInt(semester);
            const [befPrev, prev] = base >= 3 ? [base - 2, base - 1] : [1, 1];
            const [next, afNext] = [base + 1, base + 2];
            let same = await models.subject.findAll({
                where: {
                    semester,
                },
            });
            let beforePrevSem = await models.subject.findAll({
                where: {
                    semester: befPrev,
                },
            });
            let prevSem = await models.subject.findAll({
                where: {
                    semester: prev,
                },
            });
            let nextSem = await models.subject.findAll({
                where: {
                    semester: next,
                },
            });
            let afNextSem = await models.subject.findAll({
                where: {
                    semester: afNext,
                },
            });
            return res.status(200).send({
                same,
                prev: [...beforePrevSem, ...prevSem],
                next: [...nextSem, ...afNextSem],
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
            const { id, coordinator, collaborators, ...fields } = req.body;
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
            const subject = await models.subject.findByPk(id);
            return res.status(200).send(subject);
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
