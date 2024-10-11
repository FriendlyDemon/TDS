class Paciente{
    nome:string
    idade:Date
    hitoricoMedico:Array<object>
    internado:boolean
}
class Medico{
    nome:string
    idade:Date
    especializacao:string
    cargaHoraria:Date
    agendamentos:Agendamento
}
class Internacao{
    paciente:Paciente
    medico:Medico
    infermidade:string
    dataEntrada:Date
    dataSaida:Date
    evolucao:object
    concluido:boolean
}
class Estoque{
    tipo:string
    quantidade:number

}
//
class Agendamento{
    data:Date
    paciente:Paciente
    medico:Medico
    causa:string
}
class Remedio{
    nome:string
    validade:Date
}
