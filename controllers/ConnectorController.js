import models from '../models/index';

const ConnectorController = {
  create: async (req, res) => {
    try {
      const { description } = req.body;
      const newConnector = await models.connector.create({
        description
      });
      return res.status(201).send(newConnector);
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
      const connectors = await models.connector.findAll();
      return res.status(200).send(
        connectors,
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
      const connector = await models.connector.findOne({
        where: {
          id,
        },
      });
      return res.status(200).send(connector);
    } catch (e) {
      console.log(e);
      return res.status(400).send(e);
    }
  },
  update: async (req, res) => {
    try {
      const { id, description } = req.body;
      await models.connector.update(
        {
          description,
        },
        {
          where: {
            id,
          },
        }
      );
      return res.status(200).send({message: 'Verb updated'});
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
      await models.connector.destroy({
        where: {
          id,
        },
      });
      return res.status(200).send({ message: 'Connector deleted' });
    } catch (e) {
      console.log(e);
      return res.status(400).send({
        message: 'Error occurred',
        errors: e.errors,
      });
    }
  },
};

export default ConnectorController;