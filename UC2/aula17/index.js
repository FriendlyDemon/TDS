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
curso.numeroEstudantes=50
curso['numeroProfessores']=10
// console.log(curso.linguagens[0])
const professores = [{ nome: 'lucas', modulo: 1 }, { nome: 'leo', modulo: 2 }, { nome: 'mika', modulo: 3 }]
// console.log(professores[0])
const usuario={nome:'prof',idade:27,email:'prof@senac.com.br'}
const novoUsuario={...usuario,nome:'lucas',idade:32}