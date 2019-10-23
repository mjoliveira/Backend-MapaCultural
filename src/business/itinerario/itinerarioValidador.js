const {ValidacaoException} = require("../../utils/Exceptions");

const validarInstitiucoes = (itinerario) => {
    if(itinerario.instituicoes == null){
        throw new ValidacaoException('Não é possivel criar um itinerário sem instituições!');
    }
};

module.exports = {validarInstitiucoes};