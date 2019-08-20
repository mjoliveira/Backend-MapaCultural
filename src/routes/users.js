const express = require('express');
const router = express.Router();
const userService = require('../services/userService');

/**
 * @swagger
 *
 * definitions:
 *   User:
 *     type: object
 *     properties:
 *       id:
 *         type: integer
 *       name:
 *         type: string
 */

/**
 * @swagger
 * tags:
 *   - name: user
 *     description: Tudo sobre Usuarios
 */



/**
 * @swagger
 *
 * /users:
 *   get:
 *     tags: [user]
 *     description: Get Application Users
 *     responses:
 *       200:
 *         description: Application Users
 *         content:
 *          application/json:
 *            schema:
 *              $ref: '#/definitions/User'
 * 
 */
router.get('/', async (req, res) => {
  const users = await userService.getUsers();
  res.json(users);
});

/**
 * @swagger
 *
 * /users:
 *   post:
 *    tags: [user]
 *    description: Add Application User
 *    requestBody:
 *      content:
 *       application/json:
 *        schema:
 *         $ref: '#/definitions/User'
 *
 *    responses:
 *     201:
 *       description: Created
 *       content:
 *        application/json:
 *          schema:
 *           $ref: '#/definitions/User'
 *
 */
router.post('/', function(req, res) {
  res.send(userService.saveUser(req.body.name));
});

module.exports = router;
