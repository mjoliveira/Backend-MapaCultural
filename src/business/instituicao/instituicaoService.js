const institutionRepository = require("../../infrastructure/instituicao/instituicaoRepository");
const { ResultadoVazioException } = require("../../utils/Exceptions");

module.exports = {
    salvarInstituicao: function (institution) {
        return institutionRepository.salvarInstituicao(institution);
    },

    buscarInstituicoes: function () {
        return new Promise((resolve, reject) => {
            institutionRepository.buscarInstituicoes()
                .then(result => {
                    var listaInstituicoes = []

                    //Percorrendo lista retornado pelo banco
                    for (let i = 0; i < result.length; i++) {
                        //Verificação de horário para instituição da lista
                        var aberto = false

                        for (let j = 0; j < result[i].Horarios.length; j++) {
                            var objetoHorario = result[i].Horarios[j];

                            //Verifica se é o mesmo dia
                            if (this.getDiaAtual() == objetoHorario.dia) {
                                //Verifica se existe algum intervalo correspondente
                                if (this.temHorarioCorrespondente(objetoHorario)) {
                                    aberto = true
                                }
                            }
                        }

                        // Adiciona instuição formatada
                        listaInstituicoes.push({
                            id: result[i].id,
                            latitude: result[i].latitude,
                            longitude: result[i].longitude,
                            name: result[i].nome,
                            open: aberto
                        })
                    }

                    resolve(listaInstituicoes)
                })
                .catch(err => {
                    reject(err)
                });
        })
    },

    getDiaAtual: function () {
        var dataAtual = new Date()

        switch (dataAtual.getDay()) {
            case 0: return "domingo"
            case 1: return "segunda"
            case 2: return "terca"
            case 3: return "quarta"
            case 4: return "quinta"
            case 5: return "sexta"
            case 6: return "sabado"
        }
    },

    temHorarioCorrespondente: function (horario) {
        var horarioInicial = horario.horaAbertura;
        var horarioFinal = horario.horaFechamento;

        dataAtual = new Date()

        dataInicial = new Date(dataAtual.getTime());
        dataInicial.setHours(horarioInicial.split(":")[0]);
        dataInicial.setMinutes(horarioInicial.split(":")[1]);
        dataInicial.setSeconds(horarioInicial.split(":")[2]);

        dataFinal = new Date(dataAtual.getTime());
        dataFinal.setHours(horarioFinal.split(":")[0]);
        dataFinal.setMinutes(horarioFinal.split(":")[1]);
        dataFinal.setSeconds(horarioFinal.split(":")[2]);

        return dataInicial < dataAtual && dataFinal > dataAtual
    }
};
