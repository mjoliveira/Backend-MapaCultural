const express = require('express');
const router = express.Router();
const institutionService = require('../../business/instituicao/instituicaoService');


/**
 * @swagger
 *
 * definitions:
 *  Horario:
 *   type: object
 *   properties:
 *    dia:
 *     type: string
 *    horaAbertura:
 *     type: string
 *     pattern: '^\d{2}:\d{2}$'
 *    horaFechamento:
 *     type: string
 *     pattern: '^\d{2}:\d{2}$'
 *
 *  Rede:
 *   type: object
 *   properties:
 *    redeSocial:
 *     type: string
 *
 *  Institution:
 *   type: object
 *   properties:
 *    descricao:
 *     type: string
 *    endereco:
 *     type: string
 *    latitude:
 *     type: number
 *     format: float
 *    longitude:
 *     type: number
 *     format: float
 *    nome:
 *     type: string
 *    observacoes:
 *     type: string
 *    telefone:
 *     type: string
 *    tempoVisita:
 *     type: integer
 *    horarios:
 *     type: array
 *     items:
 *      $ref: '#/definitions/Horario'
 *    redes:
 *     type: array
 *     items:
 *      $ref: '#/definitions/Rede'
 */

/**
 * @swagger
 * tags:
 *   - name: instituicao
 *     description: Tudo sobre Instituicoes
 */

/**
 * @swagger
 *
 * /api/v1/instituicao:
 *   post:
 *    tags: [instituicao]
 *    description: Add Application Institution
 *    requestBody:
 *      content:
 *       application/json:
 *        schema:
 *          $ref: '#/definitions/Institution'
 *    responses:
 *     201:
 *       description: Created
 *       content:
 *        application/json:
 *          schema:
 *           $ref: '#/definitions/Institution'
 *
 */
router.post('/', async function (req, res) {
    institutionService.salvarInstituicao(req.body)
        .then(instituicao => {
            res.status(201);
            res.json(instituicao);
        }).catch(err => {
        console.error(err);
        res.status(err.statusCode).send(err);
    });
});

/**
 * @swagger
 *
 * /api/v1/instituicao:
 *   get:
 *     tags: [instituicao]
 *     description: Get Application Institutions
 *     responses:
 *       200:
 *         description: Application Institutions
 *         content:
 *          application/json:
 *            schema:
 *              $ref: '#/definitions/Institution'
 *
 */
router.get('/', async (req, res) => {
    try {
        const instituicao = await institutionService.buscarInstituicoes();
        res.json(instituicao);
    } catch (e) {
        res.status(e.statusCode).send(e);
    }
});

module.exports = router;