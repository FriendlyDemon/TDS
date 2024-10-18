var Academia = /** @class */ (function () {
    function Academia() {
        this.alunos = [];
    }
    Academia.prototype.addTreino = function (aluno, treino) {
        aluno.treinos.push(treino);
    };
    return Academia;
}());
var Aluno = /** @class */ (function () {
    function Aluno() {
    }
    return Aluno;
}());
var Treino = /** @class */ (function () {
    function Treino(des, ser, rep) {
        this.descricao = des;
        this.series = ser;
        this.repeticoes = rep;
    }
    return Treino;
}());
