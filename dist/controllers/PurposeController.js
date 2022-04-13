'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _index = require('../models/index');

var _index2 = _interopRequireDefault(_index);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PurposeController = {
  create: function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
      var body, subjectId, unitCompetenceId, newPurpose;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              body = req.body, subjectId = req.subjectId, unitCompetenceId = req.unitCompetenceId;
              _context.next = 4;
              return _index2.default.purpose.create(body);

            case 4:
              newPurpose = _context.sent;
              return _context.abrupt('return', res.status(201).send(newPurpose));

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
  get: function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {
      var id, purpose;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              id = req.params.id;
              _context2.next = 4;
              return _index2.default.purpose.findOne({
                where: {
                  id: id
                },
                include: {
                  all: true
                }
              });

            case 4:
              purpose = _context2.sent;

              console.log('Propósito', purpose);
              return _context2.abrupt('return', res.status(200).send(purpose));

            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2['catch'](0);

              console.log(_context2.t0);
              return _context2.abrupt('return', res.status(400).send(_context2.t0));

            case 13:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined, [[0, 9]]);
    }));

    return function get(_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }(),
  update: function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(req, res) {
      var id, _req$body, object, quality, verbId, connectorId, subjectId, unitCompetenceId, updatedPurpose, getPurpose;

      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              id = req.params.id;
              _req$body = req.body, object = _req$body.object, quality = _req$body.quality, verbId = _req$body.verbId, connectorId = _req$body.connectorId, subjectId = _req$body.subjectId, unitCompetenceId = _req$body.unitCompetenceId;
              _context3.next = 5;
              return _index2.default.purpose.update((0, _extends3.default)({}, object && { object: object }, quality && { quality: quality }, verbId && { verbId: verbId }, connectorId && { connectorId: connectorId }, subjectId && { subjectId: subjectId }, unitCompetenceId && { unitCompetenceId: unitCompetenceId }), {
                where: {
                  id: id
                }
              });

            case 5:
              updatedPurpose = _context3.sent;
              _context3.next = 8;
              return _index2.default.purpose.findByPk(id);

            case 8:
              getPurpose = _context3.sent;
              return _context3.abrupt('return', res.status(200).send(getPurpose));

            case 12:
              _context3.prev = 12;
              _context3.t0 = _context3['catch'](0);

              console.log(_context3.t0);
              return _context3.abrupt('return', res.status(400).send({
                message: 'Error occurred',
                errors: _context3.t0.errors
              }));

            case 16:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, undefined, [[0, 12]]);
    }));

    return function update(_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }(),
  delete: function () {
    var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(req, res) {
      var id;
      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              id = req.params.id;
              _context4.next = 4;
              return _index2.default.verb.destroy({
                where: {
                  id: id
                }
              });

            case 4:
              return _context4.abrupt('return', res.status(200).send({ message: 'Verb deleted' }));

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

    return function _delete(_x7, _x8) {
      return _ref4.apply(this, arguments);
    };
  }()
};

exports.default = PurposeController;