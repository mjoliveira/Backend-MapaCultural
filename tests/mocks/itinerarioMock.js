const itinerarioCompleto = {
    id: 1,
    nome:  "Rota caminhos do campo",
    tempoCaminhada: 22,
    tempoCarro: 4,
    tempoBicicleta: 10,
    instituicoes: [
        {
            id: 1
        }]
};

const itinerarioSemInstituicoes = {
    id: 1,
    nome:  "Rota caminhos do campo",
    tempoCaminhada: 12,
    tempoCarro: 12,
    tempoBicicleta: 12,
};

module.exports = { itinerarioCompleto, itinerarioSemInstituicoes };