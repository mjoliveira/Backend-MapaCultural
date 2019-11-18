const { Instituicao, Horario, Rede, Imagem } = require('../../models');

module.exports = {
    salvarInstituicao: function (instituicao) {
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

    buscarInstituicaoPorID: function (id) {
        return Instituicao.findOne({
            where: {
                id: id
            },
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
            where: { id: id }
        });
    },

    atualizarInstituicaoHorarios: function (id, horarios) {
        return Horario.destroy({ where: { InstituicaoID: id } })
            .then(() => {
                horarios.map(horario => Horario.build({
                    dia: horario.dia,
                    horaAbertura: horario.horaAbertura,
                    horaFechamento: horario.horaFechamento,
                    InstituicaoId: id
                })).forEach(instance => instance.save());
            }).catch(err => {
                throw err;
            });
    },

    buscarInstituicoes: function () {
        return new Promise((resolve, reject) => {
            Instituicao.findAll({
                include: [
                    {
                        model: Horario,
                        as: "horarios"
                    }
                ]
            }).then(instituicao => {
                resolve(instituicao);
            }).catch(err => {
                reject(err);
            });
        });
    },

    atualizarInstituicaoRedes: function (id, redes) {
        return Rede.destroy({ where: { InstituicaoID: id } })
            .then(() => {
                redes.map(rede => Rede.build({
                    redeSocial: rede.redeSocial,
                    InstituicaoId: id
                })).forEach(instance => instance.save());
            }).catch(err => {
                throw err;
            });
    },

    atualizarInstituicaoImagens: function (id, imagens) {
        return Imagem.destroy({ where: { InstituicaoID: id } })
            .then(() => {
                imagens.map(imagem => Imagem.build({
                    url: imagem.url,
                    InstituicaoId: id
                })).forEach(instance => instance.save());
            }).catch(err => {
                throw err;
            });
    }
};
