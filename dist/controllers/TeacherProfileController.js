'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _index = require('../models/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TeacherProfileController = {
  create: function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
      var subjectId, body, teacherProfile, reqTeacherProfile;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              subjectId = req.params.subjectId;
              body = req.body;
              _context.next = 5;
              return _index2.default.teacherProfile.create(body);

            case 5:
              teacherProfile = _context.sent;
              _context.next = 8;
              return teacherProfile.setSubject(subjectId);

            case 8:
              _context.next = 10;
              return _index2.default.teacherProfile.findByPk(teacherProfile.id);

            case 10:
              reqTeacherProfile = _context.sent;
              return _context.abrupt('return', res.status(201).send(reqTeacherProfile));

            case 14:
              _context.prev = 14;
              _context.t0 = _context['catch'](0);
              return _context.abrupt('return', res.status(400).send(_context.t0));

            case 17:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined, [[0, 14]]);
    }));

    return function create(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }(),
  getBySubjectId: function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {
      var subjectId, reqTeacherProfile;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              subjectId = req.params.subjectId;
              _context2.next = 4;
              return _index2.default.teacherProfile.findOne({
                where: {
                  subjectId: subjectId
                }
              });

            case 4:
              reqTeacherProfile = _context2.sent;

              if (!reqTeacherProfile) {
                _context2.next = 9;
                break;
              }

              return _context2.abrupt('return', res.status(201).send(reqTeacherProfile));

            case 9:
              return _context2.abrupt('return', res.status(204).send(reqTeacherProfile));

            case 10:
              _context2.next = 15;
              break;

            case 12:
              _context2.prev = 12;
              _context2.t0 = _context2['catch'](0);
              return _context2.abrupt('return', res.status(400).send(_context2.t0));

            case 15:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined, [[0, 12]]);
    }));

    return function getBySubjectId(_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }(),
  update: function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(req, res) {
      var id, body, teacherProfile, reqTeacherProfile;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              id = req.params.id;
              body = req.body;
              _context3.next = 5;
              return _index2.default.teacherProfile.findByPk(id);

            case 5:
              teacherProfile = _context3.sent;

              (0, _keys2.default)(body).forEach(function (key) {
                teacherProfile[key] = body[key];
              });
              _context3.next = 9;
              return teacherProfile.save();

            case 9:
              _context3.next = 11;
              return _index2.default.teacherProfile.findByPk(id);

            case 11:
              reqTeacherProfile = _context3.sent;
              return _context3.abrupt('return', res.status(200).send(reqTeacherProfile));

            case 15:
              _context3.prev = 15;
              _context3.t0 = _context3['catch'](0);

              console.log(_context3.t0);
              return _context3.abrupt('return', res.status(400).send(_context3.t0));

            case 19:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, undefined, [[0, 15]]);
    }));

    return function update(_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }()
};

exports.default = TeacherProfileController;