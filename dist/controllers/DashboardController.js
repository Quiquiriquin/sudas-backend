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

var DashboardController = {
    sections: function () {
        var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
            var users;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.prev = 0;
                            _context.next = 3;
                            return _index2.default.user.count({
                                where: {
                                    status: 'ACTIVE'
                                }
                            });

                        case 3:
                            users = _context.sent;

                            console.log(users);
                            return _context.abrupt('return', res.status(201).send({
                                users: users
                            }));

                        case 8:
                            _context.prev = 8;
                            _context.t0 = _context['catch'](0);

                            console.log(_context.t0);
                            res.status(400).send({
                                message: 'Error occurred',
                                errors: _context.t0.errors
                            });

                        case 12:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, undefined, [[0, 8]]);
        }));

        return function sections(_x, _x2) {
            return _ref.apply(this, arguments);
        };
    }()
};

exports.default = DashboardController;