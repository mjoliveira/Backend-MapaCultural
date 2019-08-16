var express = require('express');
var router = express.Router();
var userService = require('../services/userService');

/**
 * @swagger
 *
 * definitions:
 *   User:
 *     type: object
 *     properties:
 *       id:
 *         type: integer
 *       nome:
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
router.get('/', function(req, res, next) {
  res.send(userService.getUsers());
});

module.exports = router;
