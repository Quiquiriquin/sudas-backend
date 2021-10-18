'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

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
  create: function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
      var _req$body, email, password, name, firstSurname, secondSurname, cipherPassword, newUser;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _req$body = req.body, email = _req$body.email, password = _req$body.password, name = _req$body.name, firstSurname = _req$body.firstSurname, secondSurname = _req$body.secondSurname;
              _context.next = 4;
              return _bcrypt2.default.hash(password, 12);

            case 4:
              cipherPassword = _context.sent;
              _context.next = 7;
              return _index2.default.user.create({
                email: email,
                password: cipherPassword,
                name: name,
                firstSurname: firstSurname,
                secondSurname: secondSurname
              });

            case 7:
              newUser = _context.sent;

              res.status(201).send(newUser);
              _context.next = 15;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context['catch'](0);

              console.log(_context.t0);
              res.status(400).send({
                message: 'Error occurred',
                errors: _context.t0.errors
              });

            case 15:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined, [[0, 11]]);
    }));

    return function create(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }(),
  login: function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {
      var _req$body2, email, passwordBeforeHash, user, validPassword;

      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _req$body2 = req.body, email = _req$body2.email, passwordBeforeHash = _req$body2.password;
              _context2.next = 4;
              return _index2.default.user.findOne({
                where: {
                  email: email
                }
              });

            case 4:
              user = _context2.sent;

              if (!user) {
                _context2.next = 10;
                break;
              }

              _context2.next = 8;
              return _bcrypt2.default.compare(passwordBeforeHash, user.password);

            case 8:
              validPassword = _context2.sent;

              if (validPassword) {
                res.status(200).send(user);
              }

            case 10:
              res.status(400).send({
                message: 'Invalud email or password'
              });
              _context2.next = 16;
              break;

            case 13:
              _context2.prev = 13;
              _context2.t0 = _context2['catch'](0);

              res.status(400).send({
                message: 'Something happened',
                errors: _context2.t0.errors
              });

            case 16:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined, [[0, 13]]);
    }));

    return function login(_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }(),
  list: function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(req, res) {
      var users;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return _index2.default.user.findAll({
                where: {
                  status: 'ACTIVE'
                }
              });

            case 3:
              users = _context3.sent;

              res.status(200).send(users);
              _context3.next = 10;
              break;

            case 7:
              _context3.prev = 7;
              _context3.t0 = _context3['catch'](0);

              res.status(400).send({
                message: 'Something happened',
                errors: _context3.t0.errors
              });

            case 10:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, undefined, [[0, 7]]);
    }));

    return function list(_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }()
};

exports.default = UserController;