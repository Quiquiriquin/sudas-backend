'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _set = require('babel-runtime/core-js/set');

var _set2 = _interopRequireDefault(_set);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _index = require('../models/index');

var _index2 = _interopRequireDefault(_index);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AcademicPlanController = {
    create: function () {
        var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
            var body, newAcademicPlan;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.prev = 0;
                            body = req.body;
                            _context.next = 4;
                            return _index2.default.academicPlan.create(body);

                        case 4:
                            newAcademicPlan = _context.sent;
                            return _context.abrupt('return', res.status(201).send(newAcademicPlan));

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
        var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(req, res) {
            var today, plans, resultPlans, _loop, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _ref3;

            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            _context3.prev = 0;
                            today = (0, _moment2.default)(new Date());
                            _context3.next = 4;
                            return _index2.default.academicPlan.findAll({
                                include: {
                                    all: true
                                }
                            });

                        case 4:
                            plans = _context3.sent;
                            resultPlans = [];
                            _loop = /*#__PURE__*/_regenerator2.default.mark(function _callee2(_ref3) {
                                var _ref3$dataValues, subjects, elem, active, noAssigned, stopped, total, auxTeachers, i, subject, collaborators, coordinator, updatedAt, lastUpdate, diff;

                                return _regenerator2.default.wrap(function _callee2$(_context2) {
                                    while (1) {
                                        switch (_context2.prev = _context2.next) {
                                            case 0:
                                                _ref3$dataValues = _ref3.dataValues, subjects = _ref3$dataValues.subjects, elem = (0, _objectWithoutProperties3.default)(_ref3$dataValues, ['subjects']);
                                                active = 0;
                                                noAssigned = 0;
                                                stopped = 0;
                                                total = 0;
                                                auxTeachers = new _set2.default([]);
                                                i = 0;

                                            case 7:
                                                if (!(i < subjects.length)) {
                                                    _context2.next = 28;
                                                    break;
                                                }

                                                _context2.next = 10;
                                                return _index2.default.subject.findByPk(subjects[i].id);

                                            case 10:
                                                subject = _context2.sent;
                                                _context2.next = 13;
                                                return subject.getCollaborator();

                                            case 13:
                                                collaborators = _context2.sent;
                                                _context2.next = 16;
                                                return subject.getCoordinator();

                                            case 16:
                                                coordinator = _context2.sent;

                                                collaborators.forEach(function (_ref4) {
                                                    var id = _ref4.id;
                                                    return auxTeachers.add(id);
                                                });
                                                coordinator.forEach(function (_ref5) {
                                                    var id = _ref5.id;
                                                    return auxTeachers.add(id);
                                                });
                                                updatedAt = subjects[i].updatedAt;
                                                lastUpdate = (0, _moment2.default)(new Date(updatedAt));
                                                diff = today.diff(lastUpdate, 'days');

                                                if (diff >= 3) {
                                                    stopped += 1;
                                                } else {
                                                    active += 1;
                                                }
                                                if (collaborators.length === 0 && coordinator.length === 0) {
                                                    noAssigned += 1;
                                                }
                                                total += 1;

                                            case 25:
                                                i++;
                                                _context2.next = 7;
                                                break;

                                            case 28:

                                                resultPlans.push((0, _extends3.default)({}, elem, {
                                                    teachers: auxTeachers.size,
                                                    subjects: {
                                                        active: active,
                                                        noAssigned: noAssigned,
                                                        stopped: stopped,
                                                        total: total
                                                    }
                                                }));

                                            case 29:
                                            case 'end':
                                                return _context2.stop();
                                        }
                                    }
                                }, _callee2, undefined);
                            });
                            _iteratorNormalCompletion = true;
                            _didIteratorError = false;
                            _iteratorError = undefined;
                            _context3.prev = 10;
                            _iterator = (0, _getIterator3.default)(plans);

                        case 12:
                            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                                _context3.next = 18;
                                break;
                            }

                            _ref3 = _step.value;
                            return _context3.delegateYield(_loop(_ref3), 't0', 15);

                        case 15:
                            _iteratorNormalCompletion = true;
                            _context3.next = 12;
                            break;

                        case 18:
                            _context3.next = 24;
                            break;

                        case 20:
                            _context3.prev = 20;
                            _context3.t1 = _context3['catch'](10);
                            _didIteratorError = true;
                            _iteratorError = _context3.t1;

                        case 24:
                            _context3.prev = 24;
                            _context3.prev = 25;

                            if (!_iteratorNormalCompletion && _iterator.return) {
                                _iterator.return();
                            }

                        case 27:
                            _context3.prev = 27;

                            if (!_didIteratorError) {
                                _context3.next = 30;
                                break;
                            }

                            throw _iteratorError;

                        case 30:
                            return _context3.finish(27);

                        case 31:
                            return _context3.finish(24);

                        case 32:
                            return _context3.abrupt('return', res.status(200).send(resultPlans));

                        case 35:
                            _context3.prev = 35;
                            _context3.t2 = _context3['catch'](0);

                            console.log(_context3.t2);
                            return _context3.abrupt('return', res.status(400).send({
                                message: 'Something happened',
                                errors: _context3.t2.errors
                            }));

                        case 39:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, undefined, [[0, 35], [10, 20, 24, 32], [25,, 27, 31]]);
        }));

        return function list(_x3, _x4) {
            return _ref2.apply(this, arguments);
        };
    }(),
    get: function () {
        var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(req, res) {
            var id, academicPlan;
            return _regenerator2.default.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            _context4.prev = 0;
                            id = req.params.id;
                            _context4.next = 4;
                            return _index2.default.academicPlan.findOne({
                                where: {
                                    id: id
                                },
                                include: {
                                    all: true
                                }
                            });

                        case 4:
                            academicPlan = _context4.sent;

                            console.log(academicPlan);
                            return _context4.abrupt('return', res.status(200).send(academicPlan));

                        case 9:
                            _context4.prev = 9;
                            _context4.t0 = _context4['catch'](0);

                            console.log(_context4.t0);
                            return _context4.abrupt('return', res.status(400).send(_context4.t0));

                        case 13:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, _callee4, undefined, [[0, 9]]);
        }));

        return function get(_x5, _x6) {
            return _ref6.apply(this, arguments);
        };
    }(),
    update: function () {
        var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(req, res) {
            var _req$body, id, description, updatedVerb;

            return _regenerator2.default.wrap(function _callee5$(_context5) {
                while (1) {
                    switch (_context5.prev = _context5.next) {
                        case 0:
                            _context5.prev = 0;
                            _req$body = req.body, id = _req$body.id, description = _req$body.description;
                            _context5.next = 4;
                            return _index2.default.verb.update({
                                description: description
                            }, {
                                where: {
                                    id: id
                                }
                            });

                        case 4:
                            updatedVerb = _context5.sent;
                            return _context5.abrupt('return', res.status(200).send({ message: 'Verb updated' }));

                        case 8:
                            _context5.prev = 8;
                            _context5.t0 = _context5['catch'](0);

                            console.log(_context5.t0);
                            return _context5.abrupt('return', res.status(400).send({
                                message: 'Error occurred',
                                errors: _context5.t0.errors
                            }));

                        case 12:
                        case 'end':
                            return _context5.stop();
                    }
                }
            }, _callee5, undefined, [[0, 8]]);
        }));

        return function update(_x7, _x8) {
            return _ref7.apply(this, arguments);
        };
    }(),
    delete: function () {
        var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(req, res) {
            var id;
            return _regenerator2.default.wrap(function _callee6$(_context6) {
                while (1) {
                    switch (_context6.prev = _context6.next) {
                        case 0:
                            _context6.prev = 0;
                            id = req.params.id;
                            _context6.next = 4;
                            return _index2.default.verb.destroy({
                                where: {
                                    id: id
                                }
                            });

                        case 4:
                            return _context6.abrupt('return', res.status(200).send({ message: 'Verb deleted' }));

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

        return function _delete(_x9, _x10) {
            return _ref8.apply(this, arguments);
        };
    }()
};

exports.default = AcademicPlanController;