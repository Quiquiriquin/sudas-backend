import models from '../models/index';

const AchivementController = {
  create: async (req, res) => {
    try {
      const { description } = req.body;
      const newAchivement = await models.achivement.create({
        description
      });
      return res.status(201).send(newAchivement);
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
      const achivements = await models.achivement.findAll();
      return res.status(200).send(
        achivements,
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
      const achivement = await models.achivement.findOne({
        where: {
          id,
        },
      });
      return res.status(200).send(achivement);
    } catch (e) {
      console.log(e);
      return res.status(400).send(e);
    }
  },
  update: async (req, res) => {
    try {
      const { id, description } = req.body;
      const updatedAchivement = await models.achivement.update(
        {
          description,
        },
        {
          where: {
            id,
          },
        }
      );
      return res.status(200).send({ message: 'Achivement updated' });
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
      await models.achivement.destroy({
        where: {
          id,
        },
      });
      return res.status(200).send({ message: 'Achivement deleted' });
    } catch (e) {
      console.log(e);
      return res.status(400).send({
        message: 'Error occurred',
        errors: e.errors,
      });
    }
  },
};

export default AchivementController;