const formularioCriarConta = document.getElementById('formCriarConta');
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const confirmarSenha = document.getElementById('confirmaSenha');
const usuarios = []


formularioCriarConta.addEventListener('submit', (e) => {
    e.preventDefault();

    caracteres()
    igual()
    salvarFormulario()

    if (senha.value !== confirmarSenha.value) {
        alert('Sua senha e diferente da confirmação!')
        window.location.href = "criarConta.html"
    };
});

function salvarFormulario() {
    const dados = {
        nome: nome.value,
        email: email.value,
        senha: senha.value,
        confirmarSenhaValue: confirmarSenha.value
    };

    usuarios.push(dados)
    console.log(usuarios)
};

function igual() {
    for (let usuarios of formularioCriarConta) {

        if (usuarios.email === email.value)
            alert('Esse email já existe')
        window.location.href = "criarConta.html"
    };

    if (usuarios.senha === senha.value) {
        alert('Essa senha já existe')
        window.location.href = "criarConta.html"
    };
};

function caracteres() {
    if (email.value.length < 5) {
        alert("preencha o campo com um e-mail válido.");

    } else if (senha.value.length < 8) {
        alert("Preencha a senha com no mínimo 8 digitos.");
    } else {
        window.location.href = "criarConta.html"
    };
};

