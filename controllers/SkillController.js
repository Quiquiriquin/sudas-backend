import models from '../models/index';

const VerbController = {
  create: async (req, res) => {
    try {
      const { name } = req.body;
      const newSkill = await models.skill.create({
        name
      });
      return res.status(201).send(newSkill);
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
      const verbs = await models.skill.findAll();
      return res.status(200).send(
        verbs,
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
      const verb = await models.skill.findOne({
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
      const { id, name } = req.body;
      const updatedVerb = await models.skill.update(
        {
          name,
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
      await models.skill.destroy({
        where: {
          id,
        },
      });
      return res.status(200).send({ message: 'Skill deleted' });
    } catch (e) {
      console.log(e);
      return res.status(400).send({
        message: 'Error occurred',
        errors: e.errors,
      });
    }
  },
};

export default VerbController;