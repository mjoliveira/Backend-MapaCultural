const express = require('express');
const router = express.Router();
const institutionService = require('../../business/institution/institutionService');

/**
 * @swagger
 *
 * /api/v1/institutions:
 *   post:
 *    tags: [institutions]
 *    description: Add Application Institution
 *    requestBody:
 *      content:
 *       application/json:
 *        schema:
 *          $ref: '#/definitions/Institution-Post'
 *
 *    responses:
 *     201:
 *       description: Created
 *       content:
 *        application/json:
 *          schema:
 *           $ref: '#/definitions/Institution'
 *
 */
router.post('/', async function(req, res) {
    const institution = await institutionService.saveInstitution(req.body);
    res.status(201);
    res.json(institution);
  });


/**
 * @swagger
 *
 * /api/v1/institutions:
 *   get:
 *     tags: [institutions]
 *     description: Get Application Institutions
 *     responses:
 *       200:
 *         description: Application Institutions
 *         content:
 *          application/json:
 *            schema:
 *              $ref: '#/definitions/Institutions'
 * 
 */
router.get('/', async (req, res) => {
    const instituicao = await institutionService.getInstitution();
    res.json(instituicao);
});

module.exports = router;