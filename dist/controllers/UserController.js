'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

var _index = require('../models/index');

var _index2 = _interopRequireDefault(_index);

var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireDefault(_bcrypt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserController = {
  createAdmin: function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
      var users, auxUsers, answers;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              users = req.body.users;

              console.log(users, req.body);

              if (!(users.length > 0)) {
                _context.next = 9;
                break;
              }

              auxUsers = users.map(function (_ref2) {
                var email = _ref2.email,
                    academicGrade = _ref2.academicGrade,
                    department = _ref2.department,
                    role = _ref2.role;

                return _index2.default.user.findOrCreate({
                  where: {
                    email: email
                  },
                  defaults: {
                    email: email,
                    academicGrade: academicGrade,
                    department: department,
                    status: 'PENDING',
                    role: role
                  }
                });
              });
              _context.next = 7;
              return _promise2.default.all(auxUsers);

            case 7:
              answers = _context.sent;
              return _context.abrupt('return', res.status(201).send(answers));

            case 9:
              return _context.abrupt('return', res.status(200).send('No users'));

            case 12:
              _context.prev = 12;
              _context.t0 = _context['catch'](0);

              console.log(_context.t0);
              res.status(400).send({
                message: 'Error occurred',
                errors: _context.t0.errors
              });

            case 16:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined, [[0, 12]]);
    }));

    return function createAdmin(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }(),
  create: function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {
      var _req$body, email, password, name, firstSurname, secondSurname, role, user, cipherPassword, _cipherPassword;

      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _req$body = req.body, email = _req$body.email, password = _req$body.password, name = _req$body.name, firstSurname = _req$body.firstSurname, secondSurname = _req$body.secondSurname, role = _req$body.role;
              user = void 0;

              if (role) {
                _context2.next = 21;
                break;
              }

              _context2.next = 6;
              return _index2.default.user.findOne({
                where: {
                  email: email
                }
              });

            case 6:
              user = _context2.sent;

              console.log('Entré al if', user);

              if (user) {
                _context2.next = 10;
                break;
              }

              return _context2.abrupt('return', res.status(400).send({
                message: 'Unauthorized user'
              }));

            case 10:
              _context2.next = 12;
              return _bcrypt2.default.hash(password, 12);

            case 12:
              cipherPassword = _context2.sent;
              _context2.next = 15;
              return user.update({
                password: cipherPassword,
                name: name,
                firstSurname: firstSurname,
                secondSurname: secondSurname
              });

            case 15:
              _context2.next = 17;
              return user.save();

            case 17:
              delete user.password;
              return _context2.abrupt('return', res.status(201).send(user));

            case 21:
              console.log('Entré al else');
              _context2.next = 24;
              return _bcrypt2.default.hash(password, 12);

            case 24:
              _cipherPassword = _context2.sent;
              _context2.next = 27;
              return _index2.default.user.create({
                password: _cipherPassword,
                name: name,
                firstSurname: firstSurname,
                secondSurname: secondSurname,
                email: email
              });

            case 27:
              user = _context2.sent;

              delete user.password;
              return _context2.abrupt('return', res.status(201).send(user));

            case 30:
              _context2.next = 36;
              break;

            case 32:
              _context2.prev = 32;
              _context2.t0 = _context2['catch'](0);

              console.log(_context2.t0);
              res.status(400).send({
                message: 'Error occurred',
                errors: _context2.t0.errors
              });

            case 36:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined, [[0, 32]]);
    }));

    return function create(_x3, _x4) {
      return _ref3.apply(this, arguments);
    };
  }(),
  login: function () {
    var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(req, res) {
      var _req$body2, email, passwordBeforeHash, user, validPassword;

      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _req$body2 = req.body, email = _req$body2.email, passwordBeforeHash = _req$body2.password;
              _context3.next = 4;
              return _index2.default.user.findOne({
                where: {
                  email: email
                }
              });

            case 4:
              user = _context3.sent;

              if (!user) {
                _context3.next = 12;
                break;
              }

              _context3.next = 8;
              return _bcrypt2.default.compare(passwordBeforeHash, user.password);

            case 8:
              validPassword = _context3.sent;

              if (!validPassword) {
                _context3.next = 12;
                break;
              }

              delete user.password;
              return _context3.abrupt('return', res.status(200).send(user));

            case 12:
              return _context3.abrupt('return', res.status(400).send({
                message: 'Invalud email or password'
              }));

            case 15:
              _context3.prev = 15;
              _context3.t0 = _context3['catch'](0);
              return _context3.abrupt('return', res.status(400).send({
                message: 'Something happened',
                errors: _context3.t0.errors
              }));

            case 18:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, undefined, [[0, 15]]);
    }));

    return function login(_x5, _x6) {
      return _ref4.apply(this, arguments);
    };
  }(),
  list: function () {
    var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(req, res) {
      var statusArray, users;
      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              statusArray = req.query && req.query.filter ? req.query.filter.split(',') : null;
              _context4.next = 4;
              return _index2.default.user.findAll((0, _extends3.default)({}, statusArray ? {
                where: (0, _defineProperty3.default)({}, _sequelize.Op.or, statusArray.map(function (elem) {
                  return { status: elem };
                }))
              } : {}));

            case 4:
              users = _context4.sent;
              return _context4.abrupt('return', res.status(200).send(users));

            case 8:
              _context4.prev = 8;
              _context4.t0 = _context4['catch'](0);
              return _context4.abrupt('return', res.status(400).send({
                message: 'Something happened',
                errors: _context4.t0.errors
              }));

            case 11:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, undefined, [[0, 8]]);
    }));

    return function list(_x7, _x8) {
      return _ref5.apply(this, arguments);
    };
  }(),
  update: function () {
    var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(req, res) {
      var id, body, user;
      return _regenerator2.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              id = req.params.id;
              body = req.body;
              _context5.next = 5;
              return _index2.default.user.update(body, {
                where: {
                  id: id
                }
              });

            case 5:
              user = _context5.sent;

              if (!user) {
                _context5.next = 9;
                break;
              }

              console.log(user);
              return _context5.abrupt('return', res.status(200).send((0, _extends3.default)({}, body)));

            case 9:
              ;
              return _context5.abrupt('return', res.status(204).send({
                message: 'Not user found with that primary key'
              }));

            case 13:
              _context5.prev = 13;
              _context5.t0 = _context5['catch'](0);

              console.log(_context5.t0);
              return _context5.abrupt('return', res.status(400).send(_context5.t0));

            case 17:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, undefined, [[0, 13]]);
    }));

    return function update(_x9, _x10) {
      return _ref6.apply(this, arguments);
    };
  }(),
  get: function () {
    var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(req, res) {
      var id, user;
      return _regenerator2.default.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              id = req.params.id;
              _context6.next = 4;
              return _index2.default.user.findByPk(id);

            case 4:
              user = _context6.sent;
              return _context6.abrupt('return', res.status(200).send(user));

            case 8:
              _context6.prev = 8;
              _context6.t0 = _context6['catch'](0);
              return _context6.abrupt('return', res.status(400).send(_context6.t0));

            case 11:
            case 'end':
              return _context6.stop();
          }
        }
      }, _callee6, undefined, [[0, 8]]);
    }));

    return function get(_x11, _x12) {
      return _ref7.apply(this, arguments);
    };
  }(),
  listActiveTeachers: function () {
    var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(req, res) {
      var users;
      return _regenerator2.default.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.prev = 0;
              _context7.next = 3;
              return _index2.default.user.findAll();

            case 3:
              users = _context7.sent;

              console.log(users);
              return _context7.abrupt('return', res.status(200).send(users));

            case 8:
              _context7.prev = 8;
              _context7.t0 = _context7['catch'](0);

              console.log(_context7.t0);
              return _context7.abrupt('return', res.status(400).send(_context7.t0));

            case 12:
            case 'end':
              return _context7.stop();
          }
        }
      }, _callee7, undefined, [[0, 8]]);
    }));

    return function listActiveTeachers(_x13, _x14) {
      return _ref8.apply(this, arguments);
    };
  }()
};

exports.default = UserController;