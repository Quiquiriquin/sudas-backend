import models from '../models/index';

const StrategyController = {
  create: async (req, res) => {
    try {
      const { description, label, arr } = req.body;
      if (!arr) {
        const newStrategy = await models.strategy.create({
          description,
          label
        });

        return res.status(201).send(newStrategy);
      } else {
        const inserts = await models.strategy.bulkCreate(arr);
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
      const strategies = await models.strategy.findAll();
      return res.status(200).send(
        strategies,
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
      const strategy = await models.strategy.findOne({
        where: {
          id,
        },
      });
      return res.status(200).send(strategy);
    } catch (e) {
      console.log(e);
      return res.status(400).send(e);
    }
  },
  update: async (req, res) => {
    try {
      const { id, description, label } = req.body;
       await models.strategy.update(
        {
          ...(description ? { description } : {}),
          ...(label ? { label } : {}),
        },
        {
          where: {
            id,
          },
        }
      );
      return res.status(200).send({ message: 'Updated strategy' });
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
      await models.strategy.destroy({
        where: {
          id,
        },
      });
      return res.status(200).send({ message: 'Strategy deleted' });
    } catch (e) {
      console.log(e);
      return res.status(400).send({
        message: 'Error occurred',
        errors: e.errors,
      });
    }
  },
};

export default StrategyController;
