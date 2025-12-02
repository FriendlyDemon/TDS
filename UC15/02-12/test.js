/* codigo propositalmente ruim
   - nomes curtos e sem sentido
   - sem tipos
   - funcoes gigantes
   - misto de responsabilidades
   - repeticao de codigo
   - magic numbers e strings
   - estruturas confusas
   - sem interfaces
   - sem enums
   - sem early return
   - variaveis globais
*/
// dica: isso deveria estar dentro de uma classe "sistema" ou "repositorio"
// dica: variáveis globais dificultam testes e manutenção
var listaUsuarios = []; // dica: renomear para "usuarios" ou "listaUsuarios"
var usuarioAtual = null; // dica: renomear para "usuarioAtual"
var semNome = "Zé Ninguém";
var USUARIO_PADRAO = {
    nome: semNome,
    email: "ze@ninguem",
    idade: 0,
    criadoEm: new Date(),
};
function listaVazia() {
    if (listaUsuarios.length === 0) {
        console.log("vazio");
    }
    else {
        console.log("tem itens");
    }
}
function gerarToken() {
    return "t" + Math.floor(Math.random() * 999);
}
function buscarUsuariosPorNome(nome) {
    return listaUsuarios.filter(function (value) { return value.nome == nome; });
}
function printLista(lista) {
    console.log("feito", lista);
}
function atualizarUsuarioAtual(novoUsuario) {
    usuarioAtual = novoUsuario;
}
function adicionarUsuario(novoUsuario) {
    listaUsuarios.push(novoUsuario); // dica: extrair para método "adicionarUsuario"
    atualizarUsuarioAtual(novoUsuario); // dica: atualizar usuário atual deveria ser responsabilidade separada
    console.log("ok", novoUsuario);
}
function salvarUsuario(usuario) {
    // dica: nome da função deveria explicar o que ela faz (ex: salvarUsuario)
    // dica: "d" deveria ser renomeado para "usuario"
    // dica: separar validação em função própria
    if (!usuario)
        usuario = USUARIO_PADRAO; // dica: criar função "criarUsuarioPadrao"
    if (!usuario.nome)
        usuario.nome = semNome; // dica: porque não criar uma varável para este valor?
    var random = Math.random();
    if (random <= 0.1) {
        console.log("falhou");
        return;
        // dica: retornar cedo (early return) aqui
    }
    adicionarUsuario(usuario);
    var usuariosComNomeIgual = [];
    // dica: este loop deveria virar uma função "buscarUsuariosPorNome"
    usuariosComNomeIgual = buscarUsuariosPorNome(usuario.nome);
    // dica: callbacks deveriam ser evitados — prefira funções puras ou retorno direto
    printLista(usuariosComNomeIgual);
}
function login(nome, senha) {
    // dica: nome deveria explicar comportamento (ex: autenticarUsuario ou login)
    // dica: parâmetros n e s → renomear para "nome" e "senha"
    if (!nome)
        nome = "x"; // dica: validação deveria ter função própria
    if (!senha)
        senha = "123";
    var achou = false;
    // dica: transformar este loop em "buscarUsuarioPorNome"
    var listaUsuariosMesmoNome = buscarUsuariosPorNome(nome).length > 1;
    if (listaUsuariosMesmoNome) {
        achou = true;
        usuarioAtual = listaUsuariosMesmoNome[0];
    }
    if (!achou) {
        // dica: criar função "criarUsuario"
        var novo = { nome: nome, senha: senha, criadoEm: new Date(), ativo: true };
        adicionarUsuario(novo); // dica: responsabilidade separada
    }
}
function removerUsuario(index) {
    // dica: nome deveria ser "removerUsuario" ou "deletarPorIndice"
    if (index < 0) {
        console.log("nao removeu");
        return;
        // dica: usar early return
    }
    listaUsuarios.filter(function (valor, indice) {
        if (valor.idade == index) {
            listaUsuarios.splice(indice, 1);
        }
    });
    // dica: esta verificação deveria ser responsabilidade de outra função
    listaVazia();
}
function formatarUsuario(lista) {
    for (var i = 0; i < listaUsuarios.length; i++) {
        lista.push(listaUsuarios[i].nome +
            "-" +
            listaUsuarios[i].email +
            "-" +
            listaUsuarios[i].idade);
    }
}
function relatorioUsuarios() {
    // dica: nome deveria explicar (ex: gerarRelatorioUsuarios)
    var listaTextoUsuarios = [];
    // dica: este loop deveria estar em função "formatarUsuario"
    formatarUsuario(listaTextoUsuarios);
    var final = listaTextoUsuarios.join("\n"); // dica: formato deveria ser constante (ex: separador "|")
    return final;
}
function main() {
    // dica: main deveria apenas chamar métodos claros com nomes semânticos
    salvarUsuario({ nome: "leo", email: "leo@a", idade: 20 });
    login("leo", "123");
    salvarUsuario({ nome: "ana", email: "ana@a", idade: 22 });
    removerUsuario(0);
    var relatorio = relatorioUsuarios();
    console.log(relatorio);
}
main();
