const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');

const logger = require('./logger');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 统一响应头;
app.all('*', (req, res, next) => {
  const { headers: { origin } } = req;
  const sites = ['http://bi.sky.yh:3000', 'http://bi.sky.yh:4000'];

  if (sites.indexOf(origin) > -1) {
    res.header('Access-Control-Allow-Origin', origin);
  }

  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS'); // 设置允许接收的请求类型
  res.header('Access-Control-Allow-Headers', 'Content-Type,request-origin'); // 设置请求头中允许携带的参数
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-control-max-age', 1000);
  next();
});

// 路由
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  logger.error(`${req.method} ${req.originalUrl} no path 404`);
  res.send({ code: 404 });
  next();
});

module.exports = app;
