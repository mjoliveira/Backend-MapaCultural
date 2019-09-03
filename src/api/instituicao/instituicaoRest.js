const express = require('express');
const router = express.Router();
const instituicaoService = require('../../business/instituicao/instituicaoService');

router.get('/', async (req, res) => {
    const instituicao = await instituicaoService.getInstituicao();
    res.json(instituicao);
});

module.exports = router;
