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
 *  Instituicao:
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
 *          $ref: '#/definitions/Instituicao'
 *    responses:
 *     201:
 *       description: Created
 *       content:
 *        application/json:
 *          schema:
 *           $ref: '#/definitions/Instituicao'
 *
 */
router.post('/', async function (req, res) {
    instituicaoService.salvarInstituicao(req.body)
        .then(instituicao => {
            res.status(201);
            res.json(instituicao);
        }).catch(err => {
        res.status(err.statusCode).send(err);
    });
});

/**
 * @swagger
 *
 * /api/v1/instituicao:
 *   get:
 *     tags: [instituicao]
 *     description: Get Application Instituicao
 *     responses:
 *       200:
 *         description: Application Instituicao
 *         content:
 *          application/json:
 *            schema:
 *              $ref: '#/definitions/Instituicao'
 *
 */
router.get('/', async (req, res) => {
    instituicaoService.buscarInstituicoes()
        .then((result) => {
            res.status(200);
            res.json(result);
        })
        .catch((err) => {
            res.status(400);
            res.json(err);
        });
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

/**
 * @swagger
 *
 * /api/v1/instituicao/{id}:
 *   get:
 *     tags: [instituicao]
 *     description: Get Application Institutions
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *         type: integer
 *        required: true
 *     responses:
 *       200:
 *         description: Application Instituicao
 *         content:
 *          application/json:
 *            schema:
 *              $ref: '#/definitions/Instituicao'
 *
 */
router.get('/:id', async (req, res) => {
    var id = req.params.id;
    await instituicaoService.buscarInstituicaoPorID(id)
        .then(instituicao => res.json(instituicao))
        .catch(e => {
            res.status(e.statusCode).send(e);
        });
});


module.exports = router;