import models from '../models/index';
import moment from "moment";

const PurposeController = {
  create: async (req, res) => {
    try {
      const { body, subjectId, unitCompetenceId } = req;
      const newPurpose = await models.purpose.create(body);
      // if (subjectId) {
      //   newPurpose.setSubject(subjectId);
      // }
      // if (unitCompetenceId) {
      //   newPurpose.setUnitCompetence(unitCompetenceId);
      // }
      // const purpose = await models.purpose.findByPk(newPurpose.id);
      return res.status(201).send(newPurpose);
    } catch (e) {
      console.log(e);
      return res.status(400).send({
        message: 'Error occurred',
        errors: e.errors,
      });
    }
  },
  get: async (req, res) => {
    try {
      const { id } = req.params;
      const purpose = await models.purpose.findOne({
        where: {
          id,
        },
        include: {
          all: true,
        }
      });
      console.log('Propósito', purpose);
      return res.status(200).send(purpose);
    } catch (e) {
      console.log(e);
      return res.status(400).send(e);
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { object, quality, verbId, connectorId, subjectId, unitCompetenceId } = req.body;
      const hasPurpose = await models.purpose.findByPk(id);
      if (hasPurpose) {
        const updatedPurpose = await models.purpose.update(
            {
              ...(object && { object }),
              ...(quality && { quality }),
              ...(verbId && { verbId }),
              ...(connectorId && { connectorId }),
              ...(subjectId && { subjectId }),
              ...(unitCompetenceId && { unitCompetenceId }),
            },
            {
              where: {
                id,
              },
            }
        );
        const getPurpose = await models.purpose.findByPk(id);
        return res.status(200).send(getPurpose);
      } else {
        console.log('REQUE: ', req.body);
        PurposeController.create(req, res);
      }
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

export default PurposeController;
