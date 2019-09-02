const institutionRepository = require("../../infrastructure/institution/institutionRepostory");

module.exports = {
    saveInstitution: function (name) {
        return institutionRepository.saveInstitution(name);
    }
};
