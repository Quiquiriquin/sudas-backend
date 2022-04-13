'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _index = require('../models/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EditorialController = {
  create: function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
      var description, newConnector;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              description = req.body.description;
              _context.next = 4;
              return _index2.default.connector.create({
                description: description
              });

            case 4:
              newConnector = _context.sent;
              return _context.abrupt('return', res.status(201).send(newConnector));

            case 8:
              _context.prev = 8;
              _context.t0 = _context['catch'](0);

              console.log(_context.t0);
              return _context.abrupt('return', res.status(400).send({
                message: 'Error occurred',
                errors: _context.t0.errors
              }));

            case 12:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined, [[0, 8]]);
    }));

    return function create(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }(),
  list: function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {
      var editorials;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return _index2.default.editorial.findAll();

            case 3:
              editorials = _context2.sent;
              return _context2.abrupt('return', res.status(200).send(editorials));

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2['catch'](0);
              return _context2.abrupt('return', res.status(400).send({
                message: 'Something happened',
                errors: _context2.t0.errors
              }));

            case 10:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined, [[0, 7]]);
    }));

    return function list(_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }(),
  get: function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(req, res) {
      var id, connector;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              id = req.params.id;
              _context3.next = 4;
              return _index2.default.connector.findOne({
                where: {
                  id: id
                }
              });

            case 4:
              connector = _context3.sent;
              return _context3.abrupt('return', res.status(200).send(connector));

            case 8:
              _context3.prev = 8;
              _context3.t0 = _context3['catch'](0);

              console.log(_context3.t0);
              return _context3.abrupt('return', res.status(400).send(_context3.t0));

            case 12:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, undefined, [[0, 8]]);
    }));

    return function get(_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }(),
  update: function () {
    var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(req, res) {
      var _req$body, id, description;

      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _req$body = req.body, id = _req$body.id, description = _req$body.description;
              _context4.next = 4;
              return _index2.default.connector.update({
                description: description
              }, {
                where: {
                  id: id
                }
              });

            case 4:
              return _context4.abrupt('return', res.status(200).send({ message: 'Verb updated' }));

            case 7:
              _context4.prev = 7;
              _context4.t0 = _context4['catch'](0);

              console.log(_context4.t0);
              return _context4.abrupt('return', res.status(400).send({
                message: 'Error occurred',
                errors: _context4.t0.errors
              }));

            case 11:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, undefined, [[0, 7]]);
    }));

    return function update(_x7, _x8) {
      return _ref4.apply(this, arguments);
    };
  }(),
  delete: function () {
    var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(req, res) {
      var id;
      return _regenerator2.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              id = req.params.id;
              _context5.next = 4;
              return _index2.default.connector.destroy({
                where: {
                  id: id
                }
              });

            case 4:
              return _context5.abrupt('return', res.status(200).send({ message: 'Connector deleted' }));

            case 7:
              _context5.prev = 7;
              _context5.t0 = _context5['catch'](0);

              console.log(_context5.t0);
              return _context5.abrupt('return', res.status(400).send({
                message: 'Error occurred',
                errors: _context5.t0.errors
              }));

            case 11:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, undefined, [[0, 7]]);
    }));

    return function _delete(_x9, _x10) {
      return _ref5.apply(this, arguments);
    };
  }()
};

exports.default = EditorialController;