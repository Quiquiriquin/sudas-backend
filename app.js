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
const app = express();

db.sequelize.sync({ alter: true });
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

const port = normalizePort(process.env.PORT || '4000');
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
