import models from '../models/index';
import {Op} from 'sequelize';

const BibliographyController = {
  create: async (req, res) => {
    try {
      const { title, year, author, type = 'BASIC', library, editorial, subjectId } = req.body;
      const newBibliography = await models.bibliography.create({
        title,
        year,
        type,
        library,
        subjectId,
      });
      if (newBibliography) {
        if (author) {
          console.log(author);
          const findAuthor = await models.author.findOne({
            where: {
              [Op.or]: [{ name: author }, { id: author }]
            },
          });
          console.log(findAuthor);
          if (findAuthor) {
            await newBibliography.setAuthor(findAuthor.id);
          } else {
            await newBibliography.createAuthor({
              name: author,
            });
          }
        }
        if (editorial) {
          const findEditorial = await models.editorial.findOne({
            where: {
              [Op.or]: [{ name: editorial }, { id: editorial }],
            },
          });
          console.log(findEditorial);
          if (findEditorial) {
            await newBibliography.setEditorial(findEditorial.id);
          } else {
            await newBibliography.createEditorial({
              name: editorial,
            });
          }
        }
      }
      await newBibliography.save();
      const reqBiblio = await models.bibliography.findByPk(newBibliography.id, {
        include: [
          {
            model: models.author,
            as: 'author',
          },
          {
            model: models.editorial,
            as: 'editorial',
          },
        ],
      });
      return res.status(201).send(reqBiblio);
    } catch (e) {
      console.log(e);
      return res.status(400).send({
        message: 'Error occurred',
        errors: e.errors,
      });
    }
  },
  getBySubject: async (req, res) => {
    try {
      const { subjectId } = req.params;
      const tempBibliographies = await models.bibliography.findAll({
        where: {
          subjectId,
        },
        include: [
          {
            model: models.author,
            as: 'author',
            attributes: ['name'],
          },
          {
            model: models.editorial,
            as: 'editorial',
            attributes: ['name'],
          },
        ]
      });
      const finalBibliographies = {
        basic: [],
        digital: [],
        complementary: [],
        cyber: [],
      };
      tempBibliographies.forEach(({ dataValues: { type } }, index) => {
        finalBibliographies[type.toLowerCase()] = [...finalBibliographies[type.toLowerCase()], tempBibliographies[index].dataValues];
      });
      return res.status(200).send(
        finalBibliographies,
      );
    } catch (e) {
      return res.status(400).send({
        message: 'Something happened',
        errors: e.errors,
      });
    }
  },
  list: async (req, res) => {
    try {
      const tempBibliographies = await models.bibliography.findAll();
      return res.status(200).send(
        tempBibliographies,
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
      await models.bibliography.destroy({
        where: {
          id,
        },
      });
      return res.status(200).send({ message: 'Bibliography deleted' });
    } catch (e) {
      console.log(e);
      return res.status(400).send({
        message: 'Error occurred',
        errors: e.errors,
      });
    }
  },
};

export default BibliographyController;
