import models from '../models/index';

const TeacherProfileController = {
  create: async (req, res) => {
    try {
      const { subjectId } = req.params;
      const body = req.body;
      const teacherProfile = await models.teacherProfile.create(body);
      await teacherProfile.setSubject(subjectId);
      const reqTeacherProfile = await models.teacherProfile.findByPk(teacherProfile.id);
      return res.status(201).send(reqTeacherProfile);
    } catch (e) {
      return res.status(400).send(e);
    }
  },
  getBySubjectId: async (req, res) => {
    try {
      const { subjectId } = req.params;
      const reqTeacherProfile = await models.teacherProfile.findOne({
        where: {
          subjectId,
        },
      });
      return res.status(201).send(reqTeacherProfile);
    } catch (e) {
      return res.status(400).send(e);
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const teacherProfile = await models.teacherProfile.findByPk(id);
      Object.keys(body).forEach((key) => {
        teacherProfile[key] = body[key];
      });
      await teacherProfile.save();
      const reqTeacherProfile = await models.teacherProfile.findByPk(id);
      return res.status(200).send(reqTeacherProfile);
    } catch (e) {
      return res.status(400).send(e);
    }
  },
};

export default TeacherProfileController;
