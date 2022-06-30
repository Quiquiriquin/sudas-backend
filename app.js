import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import db from './models/index';
import http from 'http';
import verbsRoutes from './routes/verbs';
import connectorsRoutes from './routes/connectors';
import achivementsRoutes from './routes/achivements';
const debug = require('debug', 'sudas-backend:server')
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');



const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const dashboardRouter = require('./routes/dashboard');
const academicRouter = require('./routes/academicPlans');
const subjectRouter = require('./routes/subjects');
const contentRouter = require('./routes/contents');
const unitRouter = require('./routes/unitsCompetence');
const objectives = require('./routes/objectives');
const purposes = require('./routes/purposes');
const strategies = require('./routes/strategies');
const methods = require('./routes/methods');
const bibliographies = require('./routes/bibliographies');
const authors = require('./routes/authors');
const editorials = require('./routes/editorials');
const teachersProfiles = require('./routes/teacherProfiles');
const activities = require('./routes/activities');
const skills = require('./routes/skills');
const attitudes = require('./routes/attitudes');
const app = express();

db.sequelize.sync();
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/dashboard', dashboardRouter);
app.use('/api/v1/verb', verbsRoutes);
app.use('/api/v1/connector', connectorsRoutes);
app.use('/api/v1/achivement', achivementsRoutes);
app.use('/api/v1/academic-plan', academicRouter);
app.use('/api/v1/subject', subjectRouter);
app.use('/api/v1/objective', objectives);
app.use('/api/v1/content', contentRouter);
app.use('/api/v1/unit-competence', unitRouter);
app.use('/api/v1/purpose', purposes);
app.use('/api/v1/teacher-profile', teachersProfiles);
app.use('/api/v1/strategies', strategies);
app.use('/api/v1/methods',  methods);
app.use('/api/v1/bibliography',  bibliographies);
app.use('/api/v1/editorial',  editorials);
app.use('/api/v1/author',  authors);
app.use('/api/v1/activities',  activities);
app.use('/api/v1/skills', skills);
app.use('/api/v1/attitudes',  attitudes);

const port = normalizePort(process.env.PORT || '4040');
app.set('port', port);

const server = http.createServer(app);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  const port = parseInt(val, 10);

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

const onError = (error) => {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

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
}

/**
 * Event listener for HTTP server "listening" event.
 */

const onListening = () => {
  const addr = server.address();
  const bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}

/**
 * Listen on provided port, on all network interfaces.
 */

console.log(process.env.NODE_ENV);
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
