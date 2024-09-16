const professor = {
    nome: 'lucas',
    idade: '32',
    altura: 1.75,
    tarefas: ['dar aula', 'responder duvidas'],
    contarPiadas: function () { console.log('é pave ou pacome?') },
    'e mail':'lucas@gmail'
}
professor.nome='leo'
console.log(professor['e mail'])
console.log(professor.nome)