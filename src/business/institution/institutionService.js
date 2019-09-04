const institutionRepository = require("../../infrastructure/institution/institutionRepository");

module.exports = {
    saveInstitution: function (institution) {
        return institutionRepository.saveInstitution(institution);
    }
};
