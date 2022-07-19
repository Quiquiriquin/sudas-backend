import models from '../models/index';

const MethodController = {
  create: async (req, res) => {
    try {
      const { description, label, arr } = req.body;
      if (!arr) {
        const newMethod = await models.method.create({
          description,
          label
        });

        return res.status(201).send(newMethod);
      } else {
        const inserts = await models.method.bulkCreate(arr);
        return res.status(201).send(inserts);
      }
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
      const methods = await models.method.findAll();
      return res.status(200).send(
        methods,
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
      const method = await models.method.findOne({
        where: {
          id,
        },
      });
      return res.status(200).send(method);
    } catch (e) {
      console.log(e);
      return res.status(400).send(e);
    }
  },
  update: async (req, res) => {
    try {
      const { id, description, label, writing } = req.body;
      await models.method.update(
        {
          ...(description ? { description } : {}),
          ...(label ? { label } : {}),
          ...(writing ? { writing } :  {}),
        },
        {
          where: {
            id,
          },
        }
      );
      return res.status(200).send({ message: 'Updated method' });
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
      await models.method.destroy({
        where: {
          id,
        },
      });
      return res.status(200).send({ message: 'method deleted' });
    } catch (e) {
      console.log(e);
      return res.status(400).send({
        message: 'Error occurred',
        errors: e.errors,
      });
    }
  },
};

export default MethodController;
