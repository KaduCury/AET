// receber dados do campo "nome" do formulário
//let nome = document.getElementsByName("nome");
//console.log(nome);
// enviar os dados para o index.html utilizando o atributo id
//document.getElementById("valorNome").innerHTML = nome[0].defaultValue;

// receber dados do campo "telefone" do formulário
//let telefone = document.getElementsByName("telefone");
//console.log(telefone);
// enviar os dados para o index.html utilizando o atributo id
//document.getElementById("valorTelefone").innerHTML = nome[0].defaultValue;


// receber dados do campo "mensagem" do formulário
//let mensagem = document.getElementsByName("mensagem");
//console.log(mensagem);
// enviar os dados para o index.html utilizando o atributo id
//document.getElementById("valorMensagem").innerHTML = nome[0].defaultValue;

// chamar função quando o usuario digitar algum valor no campo "nome"
function receberNome() {
    // receber dados do campo "nome" do formulário quando o usuário digitar valor no campo
    var nomeUsuario = document.getElementById("campoNome").value;
    console.log(nomeUsuario);
    //document.getElementById("valorNome").innerHTML = nomeUsuario;
}

// chamar função quando o usuario digitar algum valor no campo "telefone"
function receberTelefone() {
    // receber dados do campo "telefone" do formulário quando o usuário digitar valor no campo
    var telefoneUsuario = document.getElementById("campoTelefone").value;
    console.log(telefoneUsuario);
    //document.getElementById("valorTelefone").innerHTML = telefoneUsuario;
}

// chamar função quando o usuario digitar algum valor no campo "mensagem"
function receberMensagem() {
    // receber dados do campo "mensagem" do formulário quando o usuário digitar valor no campo
    var mensagemUsuario = document.getElementById("campoMensagem").value;
    console.log(mensagemUsuario);
    //document.getElementById("valorMensagem").innerHTML = mensagemUsuario;
}
