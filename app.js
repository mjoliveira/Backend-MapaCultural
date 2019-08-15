var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
const options = require('./swagger-options');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

//Configurações Swagger
const swaggerSpec = swaggerJSDoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


//Configurações da Aplicação Express
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Adicionando rotas na aplicação
app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
