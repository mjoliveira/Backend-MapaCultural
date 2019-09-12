const express = require('express');
const router = express.Router();
// const itinerarioService = require('../../business/itinerario/itinerarioService');

/**
 * @swagger
 *
 * definitions:
 *  Institution:
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
 */

/**
 * @swagger
 * tags:
 *   - name: itinerario
 *     description: Tudo sobre Itinerario
 */
router.get('/itinerios', async (req, res) => {
    try {
        const itinerario = await itinerarioService.buscarItinerarios();
        res.json(itinerario);
    } catch (e) {
        res.status(e.statusCode).send(e);
    }
});
module.exports = router;