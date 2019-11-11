const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
const options = require('../swagger-options');

//Import das rotas
const autenticacaoRouter = require ('./api/autenticacao/autenticacaoRest');
const institutionRouter = require ('./api/instituicao/instituicaoRest');
const itinerarioRouter = require ('./api/itinerario/itinerarioRest');

const app = express();

//Configurações Swagger
const swaggerSpec = swaggerJSDoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

//Configurando Morgan
logger.token('req-body', function getReqBody (req) {
    return JSON.stringify(req.body);
});
// CORS
app.use(cors());

//Configurações da Aplicação Express
app.use(logger(':remote-addr :remote-user [:date[clf]] :method :url HTTP/:http-version :status :req-body :res[content-length] - :response-time ms'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Adicionando rotas na aplicação
app.use('/api/v1/autenticacao', autenticacaoRouter);
app.use('/api/v1/instituicao', institutionRouter);
app.use('/api/v1/itinerario', itinerarioRouter);

module.exports = app;