const express = require('express');
const router = express.Router();
const institutionService = require('../../business/institution/institutionService');

//Método Post
router.post('/', async function(req, res) {
    const institution = await institutionService.saveInstitution(req.body.name);
    res.status(201);
    res.json(institution);
  });

module.exports = router;