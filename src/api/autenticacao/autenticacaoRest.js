const express = require('express');
const router = express.Router()
const autenticacaoService = require('../../business/autenticacao/autenticacaoService');

/**
 * @swagger
 *
 * definitions:
 *  Autenticacao:
 *   type: object
 *   properties:
 *    login:
 *     type: string
 *    senha:
 *     type: string
 */

/**
 * @swagger
 * tags:
 *   - name: autenticacao
 *     description: Tudo sobre Autenticacao
 */

/**
 * @swagger
 *
 * /api/v1/autenticacao:
 *   post:
 *    tags: [autenticacao]
 *    description: Fazer login
 *    requestBody:
 *      content:
 *       application/json:
 *        schema:
 *          $ref: '#/definitions/Autenticacao'
 *    responses:
 *     201:
 *       description: Created
 *       content:
 *        application/json:
 *          schema:
 *           $ref: '#/definitions/Autenticacao'
 *
 */
router.post('/', async function (req, res) {
    autenticacaoService.login(req.body)
        .then((resultado) => {
            res.status(200);
            res.json(resultado);
        })
        .catch((err) => {
            res.status(400);
            res.json(err);
        });

});

module.exports = router;