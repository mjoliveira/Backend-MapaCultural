const express = require('express');
const router = express.Router();
const instituicaoService = require('../../business/instituicao/instituicaoService');


/**
 * @swagger
 *
 * definitions:
 *  Horario:
 *   type: object
 *   properties:
 *    dia:
 *     type: string
 *     enum: [seg,ter,qua,qui,sex,sab,dom]
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
 *  Imagem:
 *   type: object
 *   properties:
 *    url:
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
 *     pattern: '^[(]\d{2}[)]\d{8,9}$'
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
 *    imagens:
 *     type: array
 *     items:
 *      $ref: '#/definitions/Imagem'
 *
 *  InstituicaoAtualizacao:
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
 *     pattern: '^[(]\d{2}[)]\d{8,9}$'
 *    tempoVisita:
 *     type: integer
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
    instituicaoService.salvarInstituicao(req.body)
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
        const instituicao = await instituicaoService.buscarInstituicoes();
        res.json(instituicao);
    } catch (e) {
        res.status(e.statusCode).send(e);
    }
});


/**
 * @swagger
 *
 * /api/v1/instituicao/{id}:
 *   put:
 *    tags: [instituicao]
 *    description: Atualiza Instituicao
 *    parameters:
 *     - in: path
 *       name: id
 *       schema:
 *        type: integer
 *       required: true
 *    requestBody:
 *      content:
 *       application/json:
 *        schema:
 *          $ref: '#/definitions/InstituicaoAtualizacao'
 *    responses:
 *     200:
 *       description: Ok
 */
router.put('/:id', async (req, res) => {
    instituicaoService.atualizarInstituicao(req.params.id, req.body)
        .then(() => {
            res.status(200).send();
        }).catch(err => {
        console.error(err);
        res.status(err.statusCode).send(err);
    });
});

/**
 * @swagger
 *
 * /api/v1/instituicao/{id}/horarios:
 *   put:
 *    tags: [instituicao]
 *    description: Atualiza Instituicao
 *    parameters:
 *     - in: path
 *       name: id
 *       schema:
 *        type: integer
 *       required: true
 *    requestBody:
 *      content:
 *       application/json:
 *        schema:
 *         type: array
 *         items:
 *          $ref: '#/definitions/Horario'
 *    responses:
 *     200:
 *       description: Ok
 */
router.put('/:id/horarios', async (req, res) => {
    instituicaoService.atualizarInstituicaoHorarios(req.params.id, req.body)
        .then(() => {
            res.status(200).send();
        }).catch(err => {
        console.error(err);
        res.status(err.statusCode).send(err);
    });
});

/**
 * @swagger
 *
 * /api/v1/instituicao/{id}/redes:
 *   put:
 *    tags: [instituicao]
 *    description: Atualiza Instituicao
 *    parameters:
 *     - in: path
 *       name: id
 *       schema:
 *        type: integer
 *       required: true
 *    requestBody:
 *      content:
 *       application/json:
 *        schema:
 *         type: array
 *         items:
 *          $ref: '#/definitions/Rede'
 *    responses:
 *     200:
 *       description: Ok
 */
router.put('/:id/redes', async (req, res) => {
    instituicaoService.atualizarInstituicaoRedes(req.params.id, req.body)
        .then(() => {
            res.status(200).send();
        }).catch(err => {
        console.error(err);
        res.status(err.statusCode).send(err);
    });
});

/**
 * @swagger
 *
 * /api/v1/instituicao/{id}/imagens:
 *   put:
 *    tags: [instituicao]
 *    description: Atualiza Instituicao
 *    parameters:
 *     - in: path
 *       name: id
 *       schema:
 *        type: integer
 *       required: true
 *    requestBody:
 *      content:
 *       application/json:
 *        schema:
 *         type: array
 *         items:
 *          $ref: '#/definitions/Imagem'
 *    responses:
 *     200:
 *       description: Ok
 */
router.put('/:id/imagens', async (req, res) => {
    instituicaoService.atualizarInstituicaoImagens(req.params.id, req.body)
        .then(() => {
            res.status(200).send();
        }).catch(err => {
        console.error(err);
        res.status(err.statusCode).send(err);
    });
});


module.exports = router;