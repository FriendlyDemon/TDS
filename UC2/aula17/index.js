const professor = {
    nome: 'lucas',
    idade: '32',
    altura: 1.75,
    tarefas: ['dar aula', 'responder duvidas'],
    contarPiadas: function () { console.log('é pave ou pacome?') },
    'e mail': 'lucas@gmail'
}
professor.nome = 'leo'
// console.log(professor['e mail'])
// console.log(professor.nome)

const curso = { nome: 'front end noturno', linguagens: ['js', 'css', 'html'] }
// console.log(curso.linguagens[0])
const professores = [{ nome: 'lucas', modulo: 1 }, { nome: 'leo', modulo: 2 }, { nome: 'mika', modulo: 3 }]
// console.log(professores[0])