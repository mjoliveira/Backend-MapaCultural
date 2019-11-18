const getDiaAtual = () => {
    var dataAtual = new Date();

    switch (dataAtual.getDay()) {
        case 0:
            return "dom";
        case 1:
            return "seg";
        case 2:
            return "ter";
        case 3:
            return "qua";
        case 4:
            return "qui";
        case 5:
            return "sex";
        case 6:
            return "sab";
    }
};

const temHorarioCorrespondente = (horario) => {
    var horarioInicial = horario.horaAbertura;
    var horarioFinal = horario.horaFechamento;

    var dataAtual = new Date();

    var dataInicial = new Date(dataAtual.getTime());
    dataInicial.setHours(horarioInicial.split(":")[0]);
    dataInicial.setMinutes(horarioInicial.split(":")[1]);
    dataInicial.setSeconds(horarioInicial.split(":")[2]);

    var dataFinal = new Date(dataAtual.getTime());
    dataFinal.setHours(horarioFinal.split(":")[0]);
    dataFinal.setMinutes(horarioFinal.split(":")[1]);
    dataFinal.setSeconds(horarioFinal.split(":")[2]);

    return dataInicial < dataAtual && dataFinal > dataAtual;
};

module.exports = {
    getDiaAtual,
    temHorarioCorrespondente
};