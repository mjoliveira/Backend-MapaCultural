const {Instituicao, Horario, Rede, Imagem} = require('../../models');

module.exports = {
    salvarInstituicao: function (instituicao) {
        console.log(JSON.stringify(instituicao));
        return Instituicao.create({
            nome: instituicao.nome,
            endereco: instituicao.endereco,
            tempoVisita: instituicao.tempoVisita,
            descricao: instituicao.descricao,
            latitude: instituicao.latitude,
            longitude: instituicao.longitude,
            telefone: instituicao.telefone,
            observacoes: instituicao.observacoes,
            horarios: instituicao.horarios,
            redes: instituicao.redes,
            imagens: instituicao.imagens
        }, {
            include: [{
                model: Horario,
                as: "horarios"
            }, {
                model: Rede,
                as: "redes"
            }, {
                model: Imagem,
                as: "imagens"
            }]
        });
    },

    buscarInstituicoes: function () {
        return new Promise((resolve, reject) => {
            Instituicao.findAll().then(instituicao => {
                resolve(instituicao);
            }).catch(err => {
                console.log(err);
                reject(err);
            });
        });
    },

    atualizarInstituicao: function (id, instituicao) {
        return Instituicao.update({
            nome: instituicao.nome,
            endereco: instituicao.endereco,
            tempoVisita: instituicao.tempoVisita,
            descricao: instituicao.descricao,
            latitude: instituicao.latitude,
            longitude: instituicao.longitude,
            telefone: instituicao.telefone,
            observacoes: instituicao.observacoes
        }, {
            where: {id: id}
        });
    },

    atualizarInstituicaoHorarios: function (id, horarios) {
        return Horario.destroy({where: {InstituicaoID: id}})
            .then(() => {
                horarios.map(horario => Horario.build({
                    dia: horario.dia,
                    horaAbertura: horario.horaAbertura,
                    horaFechamento: horario.horaFechamento,
                    InstituicaoID: id
                })).forEach(instance => instance.save());
            }).catch(err => {
                console.log(err);
                throw err;
            });
    }
};
