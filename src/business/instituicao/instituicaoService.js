const instituicaoRepository = require("../../infrastructure/instituicao/instituicaoRepository");
module.exports = {
    getInstituicao: function () {
        return instituicaoRepository.getInstituicao();
    }

};