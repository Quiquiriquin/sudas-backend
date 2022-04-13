'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _index = require('../models/index');

var _index2 = _interopRequireDefault(_index);

var _sequelize = require('sequelize');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BibliographyController = {
  create: function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
      var _req$body, title, year, author, _req$body$type, type, library, editorial, subjectId, newBibliography, findAuthor, findEditorial, reqBiblio;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _req$body = req.body, title = _req$body.title, year = _req$body.year, author = _req$body.author, _req$body$type = _req$body.type, type = _req$body$type === undefined ? 'BASIC' : _req$body$type, library = _req$body.library, editorial = _req$body.editorial, subjectId = _req$body.subjectId;
              _context.next = 4;
              return _index2.default.bibliography.create({
                title: title,
                year: year,
                type: type,
                library: library,
                subjectId: subjectId
              });

            case 4:
              newBibliography = _context.sent;

              if (!newBibliography) {
                _context.next = 31;
                break;
              }

              if (!author) {
                _context.next = 19;
                break;
              }

              console.log(author);
              _context.next = 10;
              return _index2.default.author.findOne({
                where: (0, _defineProperty3.default)({}, _sequelize.Op.or, [{ name: author }, { id: author }])
              });

            case 10:
              findAuthor = _context.sent;

              console.log(findAuthor);

              if (!findAuthor) {
                _context.next = 17;
                break;
              }

              _context.next = 15;
              return newBibliography.setAuthor(findAuthor.id);

            case 15:
              _context.next = 19;
              break;

            case 17:
              _context.next = 19;
              return newBibliography.createAuthor({
                name: author
              });

            case 19:
              if (!editorial) {
                _context.next = 31;
                break;
              }

              _context.next = 22;
              return _index2.default.editorial.findOne({
                where: (0, _defineProperty3.default)({}, _sequelize.Op.or, [{ name: editorial }, { id: editorial }])
              });

            case 22:
              findEditorial = _context.sent;

              console.log(findEditorial);

              if (!findEditorial) {
                _context.next = 29;
                break;
              }

              _context.next = 27;
              return newBibliography.setEditorial(findEditorial.id);

            case 27:
              _context.next = 31;
              break;

            case 29:
              _context.next = 31;
              return newBibliography.createEditorial({
                name: author
              });

            case 31:
              _context.next = 33;
              return newBibliography.save();

            case 33:
              _context.next = 35;
              return _index2.default.bibliography.findByPk(newBibliography.id, {
                include: [{
                  model: _index2.default.author,
                  as: 'author'
                }, {
                  model: _index2.default.editorial,
                  as: 'editorial'
                }]
              });

            case 35:
              reqBiblio = _context.sent;
              return _context.abrupt('return', res.status(201).send(reqBiblio));

            case 39:
              _context.prev = 39;
              _context.t0 = _context['catch'](0);

              console.log(_context.t0);
              return _context.abrupt('return', res.status(400).send({
                message: 'Error occurred',
                errors: _context.t0.errors
              }));

            case 43:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined, [[0, 39]]);
    }));

    return function create(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }(),
  getBySubject: function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {
      var subjectId, tempBibliographies, finalBibliographies;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              subjectId = req.params.subjectId;
              _context2.next = 4;
              return _index2.default.bibliography.findAll({
                where: {
                  subjectId: subjectId
                },
                include: [{
                  model: _index2.default.author,
                  as: 'author',
                  attributes: ['name']
                }, {
                  model: _index2.default.editorial,
                  as: 'editorial',
                  attributes: ['name']
                }]
              });

            case 4:
              tempBibliographies = _context2.sent;
              finalBibliographies = {
                basic: [],
                digital: [],
                complementary: [],
                cyber: []
              };

              tempBibliographies.forEach(function (_ref3, index) {
                var type = _ref3.dataValues.type;

                finalBibliographies[type.toLowerCase()] = [].concat((0, _toConsumableArray3.default)(finalBibliographies[type.toLowerCase()]), [tempBibliographies[index].dataValues]);
              });
              return _context2.abrupt('return', res.status(200).send(finalBibliographies));

            case 10:
              _context2.prev = 10;
              _context2.t0 = _context2['catch'](0);
              return _context2.abrupt('return', res.status(400).send({
                message: 'Something happened',
                errors: _context2.t0.errors
              }));

            case 13:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined, [[0, 10]]);
    }));

    return function getBySubject(_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }(),
  list: function () {
    var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(req, res) {
      var tempBibliographies;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return _index2.default.bibliography.findAll();

            case 3:
              tempBibliographies = _context3.sent;
              return _context3.abrupt('return', res.status(200).send(tempBibliographies));

            case 7:
              _context3.prev = 7;
              _context3.t0 = _context3['catch'](0);
              return _context3.abrupt('return', res.status(400).send({
                message: 'Something happened',
                errors: _context3.t0.errors
              }));

            case 10:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, undefined, [[0, 7]]);
    }));

    return function list(_x5, _x6) {
      return _ref4.apply(this, arguments);
    };
  }(),
  get: function () {
    var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(req, res) {
      var id, connector;
      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              id = req.params.id;
              _context4.next = 4;
              return _index2.default.connector.findOne({
                where: {
                  id: id
                }
              });

            case 4:
              connector = _context4.sent;
              return _context4.abrupt('return', res.status(200).send(connector));

            case 8:
              _context4.prev = 8;
              _context4.t0 = _context4['catch'](0);

              console.log(_context4.t0);
              return _context4.abrupt('return', res.status(400).send(_context4.t0));

            case 12:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, undefined, [[0, 8]]);
    }));

    return function get(_x7, _x8) {
      return _ref5.apply(this, arguments);
    };
  }(),
  update: function () {
    var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(req, res) {
      var _req$body2, id, description;

      return _regenerator2.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _req$body2 = req.body, id = _req$body2.id, description = _req$body2.description;
              _context5.next = 4;
              return _index2.default.connector.update({
                description: description
              }, {
                where: {
                  id: id
                }
              });

            case 4:
              return _context5.abrupt('return', res.status(200).send({ message: 'Verb updated' }));

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

    return function update(_x9, _x10) {
      return _ref6.apply(this, arguments);
    };
  }(),
  delete: function () {
    var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(req, res) {
      var id;
      return _regenerator2.default.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              id = req.params.id;
              _context6.next = 4;
              return _index2.default.bibliography.destroy({
                where: {
                  id: id
                }
              });

            case 4:
              return _context6.abrupt('return', res.status(200).send({ message: 'Bibliography deleted' }));

            case 7:
              _context6.prev = 7;
              _context6.t0 = _context6['catch'](0);

              console.log(_context6.t0);
              return _context6.abrupt('return', res.status(400).send({
                message: 'Error occurred',
                errors: _context6.t0.errors
              }));

            case 11:
            case 'end':
              return _context6.stop();
          }
        }
      }, _callee6, undefined, [[0, 7]]);
    }));

    return function _delete(_x11, _x12) {
      return _ref7.apply(this, arguments);
    };
  }()
};

exports.default = BibliographyController;