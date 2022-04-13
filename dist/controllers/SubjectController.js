'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _index = require('../models/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SubjectController = {
    create: function () {
        var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
            var body, subject, getSubject;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.prev = 0;
                            body = req.body;
                            _context.next = 4;
                            return _index2.default.subject.create((0, _extends3.default)({}, body));

                        case 4:
                            subject = _context.sent;
                            _context.next = 7;
                            return _index2.default.subject.findByPk(subject.id, {
                                include: {
                                    all: true
                                }
                            });

                        case 7:
                            getSubject = _context.sent;
                            return _context.abrupt('return', res.status(201).send(getSubject));

                        case 11:
                            _context.prev = 11;
                            _context.t0 = _context['catch'](0);

                            console.log(_context.t0);
                            return _context.abrupt('return', res.status(400).send({
                                message: 'Error occurred',
                                errors: _context.t0.errors
                            }));

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
    list: function () {
        var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {
            var query, filteredSubjects, subjects;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.prev = 0;
                            query = req.query;

                            if (!(query && query.academicPlanId)) {
                                _context2.next = 7;
                                break;
                            }

                            _context2.next = 5;
                            return _index2.default.subject.findAll({
                                where: {
                                    academicPlanId: query.academicPlanId
                                },
                                include: {
                                    all: true
                                }
                            });

                        case 5:
                            filteredSubjects = _context2.sent;
                            return _context2.abrupt('return', res.status(200).send(filteredSubjects));

                        case 7:
                            _context2.next = 9;
                            return _index2.default.subject.findAll({
                                include: {
                                    all: true
                                }
                            });

                        case 9:
                            subjects = _context2.sent;
                            return _context2.abrupt('return', res.status(200).send(subjects));

                        case 13:
                            _context2.prev = 13;
                            _context2.t0 = _context2['catch'](0);

                            console.log(_context2.t0);
                            return _context2.abrupt('return', res.status(400).send({
                                message: 'Something happened',
                                errors: _context2.t0.errors
                            }));

                        case 17:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, undefined, [[0, 13]]);
        }));

        return function list(_x3, _x4) {
            return _ref2.apply(this, arguments);
        };
    }(),
    get: function () {
        var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(req, res) {
            var id, subject;
            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            _context3.prev = 0;
                            id = req.params.id;
                            _context3.next = 4;
                            return _index2.default.subject.findOne({
                                where: {
                                    id: id
                                },
                                include: {
                                    all: true
                                }
                            });

                        case 4:
                            subject = _context3.sent;
                            return _context3.abrupt('return', res.status(200).send(subject));

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
    getRelatedSubjects: function () {
        var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(req, res) {
            var semester, base, _ref5, _ref6, befPrev, prev, next, afNext, same, beforePrevSem, prevSem, nextSem, afNextSem;

            return _regenerator2.default.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            _context4.prev = 0;
                            semester = req.params.semester;
                            base = parseInt(semester);
                            _ref5 = base >= 3 ? [base - 2, base - 1] : [1, 1], _ref6 = (0, _slicedToArray3.default)(_ref5, 2), befPrev = _ref6[0], prev = _ref6[1];
                            next = base + 1, afNext = base + 2;
                            _context4.next = 7;
                            return _index2.default.subject.findAll({
                                where: {
                                    semester: semester
                                }
                            });

                        case 7:
                            same = _context4.sent;
                            _context4.next = 10;
                            return _index2.default.subject.findAll({
                                where: {
                                    semester: befPrev
                                }
                            });

                        case 10:
                            beforePrevSem = _context4.sent;
                            _context4.next = 13;
                            return _index2.default.subject.findAll({
                                where: {
                                    semester: prev
                                }
                            });

                        case 13:
                            prevSem = _context4.sent;
                            _context4.next = 16;
                            return _index2.default.subject.findAll({
                                where: {
                                    semester: next
                                }
                            });

                        case 16:
                            nextSem = _context4.sent;
                            _context4.next = 19;
                            return _index2.default.subject.findAll({
                                where: {
                                    semester: afNext
                                }
                            });

                        case 19:
                            afNextSem = _context4.sent;
                            return _context4.abrupt('return', res.status(200).send({
                                same: same,
                                prev: [].concat((0, _toConsumableArray3.default)(beforePrevSem), (0, _toConsumableArray3.default)(prevSem)),
                                next: [].concat((0, _toConsumableArray3.default)(nextSem), (0, _toConsumableArray3.default)(afNextSem))
                            }));

                        case 23:
                            _context4.prev = 23;
                            _context4.t0 = _context4['catch'](0);
                            return _context4.abrupt('return', res.status(400).send(_context4.t0));

                        case 26:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, _callee4, undefined, [[0, 23]]);
        }));

        return function getRelatedSubjects(_x7, _x8) {
            return _ref4.apply(this, arguments);
        };
    }(),
    getBiblio: function () {
        var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(req, res) {
            var subjectId, biblographies;
            return _regenerator2.default.wrap(function _callee5$(_context5) {
                while (1) {
                    switch (_context5.prev = _context5.next) {
                        case 0:
                            _context5.prev = 0;
                            subjectId = req.params.subjectId;
                            _context5.next = 4;
                            return _index2.default.bibliography.findAll({
                                where: {
                                    subjectId: subjectId
                                },
                                include: {
                                    all: true
                                }
                            });

                        case 4:
                            biblographies = _context5.sent;
                            return _context5.abrupt('return', res.status(200).send(biblographies));

                        case 8:
                            _context5.prev = 8;
                            _context5.t0 = _context5['catch'](0);

                            console.log(_context5.t0);
                            return _context5.abrupt('return', res.status(400).send(_context5.t0));

                        case 12:
                        case 'end':
                            return _context5.stop();
                    }
                }
            }, _callee5, undefined, [[0, 8]]);
        }));

        return function getBiblio(_x9, _x10) {
            return _ref7.apply(this, arguments);
        };
    }(),
    update: function () {
        var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(req, res) {
            var paramsId, _req$body, bodyId, coordinator, collaborators, strategyId, fields, id, subjectCoordinator, subjectStrategy, subject;

            return _regenerator2.default.wrap(function _callee6$(_context6) {
                while (1) {
                    switch (_context6.prev = _context6.next) {
                        case 0:
                            _context6.prev = 0;
                            paramsId = req.params.id;
                            _req$body = req.body, bodyId = _req$body.id, coordinator = _req$body.coordinator, collaborators = _req$body.collaborators, strategyId = _req$body.strategyId, fields = (0, _objectWithoutProperties3.default)(_req$body, ['id', 'coordinator', 'collaborators', 'strategyId']);
                            id = paramsId || bodyId;
                            _context6.next = 6;
                            return _index2.default.subject.update((0, _extends3.default)({}, fields), {
                                where: {
                                    id: id
                                }
                            });

                        case 6:
                            if (!(coordinator || collaborators)) {
                                _context6.next = 19;
                                break;
                            }

                            _context6.next = 9;
                            return _index2.default.subject.findByPk(id);

                        case 9:
                            subjectCoordinator = _context6.sent;

                            console.log(id);

                            if (!coordinator) {
                                _context6.next = 14;
                                break;
                            }

                            _context6.next = 14;
                            return subjectCoordinator.addCoordinator(coordinator);

                        case 14:
                            if (!collaborators) {
                                _context6.next = 17;
                                break;
                            }

                            _context6.next = 17;
                            return subjectCoordinator.addCollaborator(collaborators);

                        case 17:
                            _context6.next = 19;
                            return subjectCoordinator.save();

                        case 19:
                            if (!strategyId) {
                                _context6.next = 26;
                                break;
                            }

                            _context6.next = 22;
                            return _index2.default.subject.findByPk(id);

                        case 22:
                            subjectStrategy = _context6.sent;

                            console.log(subjectStrategy);
                            _context6.next = 26;
                            return subjectStrategy.setStrategy(strategyId);

                        case 26:
                            _context6.next = 28;
                            return _index2.default.subject.findByPk(id, {
                                include: [{
                                    model: _index2.default.strategy,
                                    as: 'strategy'
                                }]
                            });

                        case 28:
                            subject = _context6.sent;
                            return _context6.abrupt('return', res.status(200).send(subject));

                        case 32:
                            _context6.prev = 32;
                            _context6.t0 = _context6['catch'](0);

                            console.log(_context6.t0);
                            return _context6.abrupt('return', res.status(400).send({
                                message: 'Error occurred',
                                errors: _context6.t0.errors
                            }));

                        case 36:
                        case 'end':
                            return _context6.stop();
                    }
                }
            }, _callee6, undefined, [[0, 32]]);
        }));

        return function update(_x11, _x12) {
            return _ref8.apply(this, arguments);
        };
    }(),
    collaboratorSubjects: function () {
        var _ref9 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(req, res) {
            var collaborator, user, coordinatorSubjects, collaboratorSubjects, aux;
            return _regenerator2.default.wrap(function _callee7$(_context7) {
                while (1) {
                    switch (_context7.prev = _context7.next) {
                        case 0:
                            _context7.prev = 0;
                            collaborator = req.params.collaborator;
                            _context7.next = 4;
                            return _index2.default.user.findByPk(collaborator);

                        case 4:
                            user = _context7.sent;

                            if (!user) {
                                _context7.next = 16;
                                break;
                            }

                            _context7.next = 8;
                            return user.getCoordinator();

                        case 8:
                            coordinatorSubjects = _context7.sent;
                            _context7.next = 11;
                            return user.getCollaborator();

                        case 11:
                            collaboratorSubjects = _context7.sent;
                            aux = coordinatorSubjects.concat(collaboratorSubjects);
                            return _context7.abrupt('return', res.status(200).send(aux));

                        case 16:
                            return _context7.abrupt('return', res.status(200).send([]));

                        case 17:
                            _context7.next = 22;
                            break;

                        case 19:
                            _context7.prev = 19;
                            _context7.t0 = _context7['catch'](0);

                            console.log(_context7.t0);

                        case 22:
                        case 'end':
                            return _context7.stop();
                    }
                }
            }, _callee7, undefined, [[0, 19]]);
        }));

        return function collaboratorSubjects(_x13, _x14) {
            return _ref9.apply(this, arguments);
        };
    }(),
    delete: function () {
        var _ref10 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee8(req, res) {
            var id;
            return _regenerator2.default.wrap(function _callee8$(_context8) {
                while (1) {
                    switch (_context8.prev = _context8.next) {
                        case 0:
                            _context8.prev = 0;
                            id = req.params.id;
                            _context8.next = 4;
                            return _index2.default.verb.destroy({
                                where: {
                                    id: id
                                }
                            });

                        case 4:
                            return _context8.abrupt('return', res.status(200).send({ message: 'Verb deleted' }));

                        case 7:
                            _context8.prev = 7;
                            _context8.t0 = _context8['catch'](0);

                            console.log(_context8.t0);
                            return _context8.abrupt('return', res.status(400).send({
                                message: 'Error occurred',
                                errors: _context8.t0.errors
                            }));

                        case 11:
                        case 'end':
                            return _context8.stop();
                    }
                }
            }, _callee8, undefined, [[0, 7]]);
        }));

        return function _delete(_x15, _x16) {
            return _ref10.apply(this, arguments);
        };
    }()
};

exports.default = SubjectController;