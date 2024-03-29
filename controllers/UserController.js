import sequelize, {Op} from 'sequelize';
import jwt from 'jsonwebtoken';
import models from '../models/index';
import bcrypt from 'bcrypt';

const UserController = {
  createAdmin: async (req, res) => {
    try {
      const { users } = req.body;
      console.log(users, req.body);
      if (users.length > 0) {
        const auxUsers = users.map(({email, academicGrade, department, role}) => {
          return models.user.findOrCreate({
            where: {
              email,
            },
            defaults: {
              email,
              academicGrade,
              department,
              status: 'PENDING',
              role,
            },
          });
        });
        const answers = await Promise.all(auxUsers);
        return res.status(201).send(answers);
      }
      return res.status(200).send('No users');
    } catch (e) {
      console.log(e);
      res.status(400).send({
        message: 'Error occurred',
        errors: e.errors,
      });
    }
  },
  create: async (req, res) => {
    try {
      const { email, password, name, firstSurname, secondSurname, role } = req.body;
      let user;
      if (!role) {
        user = await models.user.findOne({
          where: {
            email,
          },
        });
        console.log('Entré al if', user);
        if (!user) {
          return res.status(400).send({
            message: 'Unauthorized user',
          });
        }
        const cipherPassword = await bcrypt.hash(password, 12);
        await user.update({
          password: cipherPassword,
          name,
          firstSurname,
          secondSurname,
          status: 'ACTIVE',
        });
        await user.save();
        delete user.password;
        return res.status(201).send(user);
      } else {
        console.log('Entré al else');
        const cipherPassword = await bcrypt.hash(password, 12);
        user = await models.user.create({
          password: cipherPassword,
          name,
          firstSurname,
          secondSurname,
          email,
        })
        delete user.password;
        return res.status(201).send(user);
      }
    } catch (e) {
      console.log(e);
      res.status(400).send({
        message: 'Error occurred',
        errors: e.errors,
      });
    }
  },
  login: async (req, res) => {
    try {
      const { email, password: passwordBeforeHash } = req.body;
      const user = await models.user.findOne({
        where: {
          email,
        },
      });

      if (user) {
        const validPassword = await bcrypt.compare(passwordBeforeHash, user.password);
        if(validPassword) {
          delete user.dataValues.password;
          const a_t = await jwt.sign(user.dataValues, 'xTL5i)Vd2cch2~Itu!rW/13YQY@erA', {
            expiresIn: '168h',
          });
          console.log({...user, a_t})
          return res.status(200).send({...user.dataValues, a_t});
        }
      }
      return res.status(400).send({
        message: 'Invalud email or password',
      });
    } catch (e){
      console.log(e);
      return res.status(400).send({
        message: 'Something happened',
        errors: e.errors,
      });
    }
  },
  list: async (req, res) => {
    try {

      const statusArray = req.query && req.query.filter
          ? req.query.filter.split(',')
          : null;
      const users = await models.user.findAll({
        ...(statusArray) ? {
          where: {
            [Op.or]: statusArray.map((elem) => ({ status: elem }))
          },
        } : {},
      });
      return res.status(200).send(
        users,
      );
    } catch (e) {
      return res.status(400).send({
        message: 'Something happened',
        errors: e.errors,
      });
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { body } = req;
      let user = await models.user.update(body, {
        where: {
          id,
        },
      });
      if (user) {
        console.log(user);
        return res.status(200).send({
          ...body,
        });
      };
      return res.status(204).send({
        message: 'Not user found with that primary key',
      });
    } catch (e) {
      console.log(e);
      return res.status(400).send(e);
    }
  },
  get: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await models.user.findByPk(id);
      return res.status(200).send(user);
    } catch (e) {
      return res.status(400).send(e);
    }
  },
  listActiveTeachers: async (req, res) => {
    try {
      const users = await models.user.findAll();
      console.log(users);
      return res.status(200).send(users);
    } catch (e) {
      console.log(e);
      return res.status(400).send(e);
    }
  },
};

export default UserController;
