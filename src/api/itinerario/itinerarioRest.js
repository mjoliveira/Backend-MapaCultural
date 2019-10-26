const express = require('express');
const router = express.Router();
const itinerarioService = require('../../business/itinerario/itinerarioService');

/**
 * @swagger
 *
 * definitions:
 *  Itinerario:
 *   type: object
 *   properties:
 *    tempoCaminhada:
 *     type: number
 *     format: float
 *    tempoCarro:
 *     type: number
 *     format: float
 *    tempoBicicleta:
 *     type: number
 *     format: float
 *    nome:
 *     type: string
 *    instituicoes:
 *     type: array
 *     items:
 *      $ref: '#/definitions/Instituicao'
 *
 *  Instituicao:
 *   type: object
 *   properties:
 *    id:
 *     type: number
 *
 *  ItinerarioAtualizacao:
 *   type: object
 *   properties:
 *    tempoCaminhada:
 *     type: number
 *     format: float
 *    tempoCarro:
 *     type: number
 *     format: float
 *    tempoBicicleta:
 *     type: number
 *     format: float
 *    nome:
 *     type: string
 *    instituicoes:
 *     type: array
 *     items:
 *      $ref: '#/definitions/Instituicao'
 *
 */

/**
 * @swagger
 * tags:
 *   - name: itinerario
 *     description: Tudo sobre Itinerario
 */

/**
 * @swagger
 *
 * /api/v1/itinerario:
 *   post:
 *    tags: [itinerario]
 *    description: Add itinerario
 *    requestBody:
 *      content:
 *       application/json:
 *        schema:
 *          $ref: '#/definitions/Itinerario'
 *    responses:
 *     201:
 *       description: Created
 *       content:
 *        application/json:
 *          schema:
 *           $ref: '#/definitions/Itinerario'
 *
 */
router.post('/', async function (req, res) {
    itinerarioService.salvarItinerario(req.body)
        .then(itinerario => {
            res.status(201);
            console.log("Retorno intinerário", itinerario);
            res.json(itinerario);
        }).catch(err => {
        res.status(err.statusCode).send(err);
    });
});

/**
 * @swagger
 *
 * /api/v1/itinerario:
 *   get:
 *     tags: [itinerario]
 *     description: Get Itinerarios
 *     responses:
 *       200:
 *         description: Application Itinerario
 *         content:
 *          application/json:
 *            schema:
 *              $ref: '#/definitions/Itinerario'
 *
 */
router.get('/', async (req, res) => {
    await itinerarioService.buscarItinerarios()
        .then(itinerario => res.json(itinerario))
        .catch(e => res.status(e.statusCode).send(e));
});
module.exports = router;

/**
 * @swagger
 *
 * /api/v1/itinerario/{id}:
 *   put:
 *    tags: [itinerario]
 *    description: Atualiza itinerario
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
 *          $ref: '#/definitions/ItinerarioAtualizacao'
 *    responses:
 *     200:
 *       description: Ok
 */
router.put('/:id', async (req, res) => {
    itinerarioService.atualizarItinerario(req.params.id, req.body)
        .then((resultado) => {
            res.status(200).send();
            res.json(resultado);
        }).catch(err => {
        console.error(err);
        res.status(err.statusCode).send(err);
    });
});