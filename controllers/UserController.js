import sequelize from 'sequelize';
import models from '../models/index';
import bcrypt from 'bcrypt';

const UserController = {
  createAdmin: async (req, res) => {
    try {
      const { users } = req.body;
      console.log(users, req.body);
      if (users.length > 0) {
        const auxUsers = users.map(({email, academicGrade, department}) => {
          return models.user.findOrCreate({
            where: {
              email,
            },
            defaults: {
              email,
              academicGrade,
              department,
              status: 'PENDING'
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
      const { email, password, name, firstSurname, secondSurname } = req.body;
      const user = await models.user.findOne({
        where: {
          email,
        },
      });
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
      });
      await user.save();
      delete user.password;
      return res.status(201).send(user);
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
          delete user.password;
          return res.status(200).send(user);
        }
      }
      return res.status(400).send({
        message: 'Invalud email or password',
      });
    } catch (e){
      return res.status(400).send({
        message: 'Something happened',
        errors: e.errors,
      });
    }
  },
  list: async (req, res) => {
    try {
      const users = await models.user.findAll({
        // where: {
        //   status: 'ACTIVE',
        // },
      });
      res.status(200).send(
        users,
      );
    } catch (e) {
      res.status(400).send({
        message: 'Something happened',
        errors: e.errors,
      });
    }
  },
};

export default UserController;