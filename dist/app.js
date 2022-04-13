'use strict';

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _index = require('./models/index');

var _index2 = _interopRequireDefault(_index);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _verbs = require('./routes/verbs');

var _verbs2 = _interopRequireDefault(_verbs);

var _connectors = require('./routes/connectors');

var _connectors2 = _interopRequireDefault(_connectors);

var _achivements = require('./routes/achivements');

var _achivements2 = _interopRequireDefault(_achivements);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config();

var debug = require('debug', 'sudas-backend:server');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var dashboardRouter = require('./routes/dashboard');
var academicRouter = require('./routes/academicPlans');
var subjectRouter = require('./routes/subjects');
var contentRouter = require('./routes/contents');
var unitRouter = require('./routes/unitsCompetence');
var objectives = require('./routes/objectives');
var purposes = require('./routes/purposes');
var strategies = require('./routes/strategies');
var methods = require('./routes/methods');
var bibliographies = require('./routes/bibliographies');
var authors = require('./routes/authors');
var editorials = require('./routes/editorials');
var teachersProfiles = require('./routes/teacherProfiles');
var app = express();

_index2.default.sequelize.sync({ alter: true });
app.use((0, _cors2.default)());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/dashboard', dashboardRouter);
app.use('/api/v1/verb', _verbs2.default);
app.use('/api/v1/connector', _connectors2.default);
app.use('/api/v1/achivement', _achivements2.default);
app.use('/api/v1/academic-plan', academicRouter);
app.use('/api/v1/subject', subjectRouter);
app.use('/api/v1/objective', objectives);
app.use('/api/v1/content', contentRouter);
app.use('/api/v1/unit-competence', unitRouter);
app.use('/api/v1/purpose', purposes);
app.use('/api/v1/teacher-profile', teachersProfiles);
app.use('/api/v1/strategies', strategies);
app.use('/api/v1/methods', methods);
app.use('/api/v1/bibliography', bibliographies);
app.use('/api/v1/editorial', editorials);
app.use('/api/v1/author', authors);

var port = normalizePort(process.env.PORT || '4040');
app.set('port', port);

var server = _http2.default.createServer(app);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

var onError = function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
};

/**
 * Event listener for HTTP server "listening" event.
 */

var onListening = function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
  debug('Listening on ' + bind);
};

/**
 * Listen on provided port, on all network interfaces.
 */

console.log(process.env.NODE_ENV);
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);