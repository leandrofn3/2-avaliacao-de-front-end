const formularioCriarConta = document.getElementById('formCriarConta');
const nome = document.getElementById('nome');
const emailHTML = document.getElementById('email');
const senha = document.getElementById('senha');
const confirmarSenha = document.getElementById('confirmaSenha');
const usuarios = []


formularioCriarConta.addEventListener('submit', (e) => {
    e.preventDefault();

    caracteres()
    salvarFormulario()

    if (senha.value !== confirmarSenha.value) {
        alert('Sua senha e diferente da confirmação!')
        location.reload()
    };
});

function salvarFormulario() {
    const dados = {
        nome: nome.value,
        email: emailHTML.value,
        senha: senha.value,
        confirmarSenhaValue: confirmarSenha.value
    };

    const existe = usuarios.some((dados) => {
        return dados.email === emailHTML.value
    });

    if (existe) {
        alert('Esse E-mail já existe!');
        return
    }

    usuarios.push(dados)
    console.log(usuarios)

    salvarLocalStorage()
};

function caracteres() {
    if (email.value.length < 5) {
        alert("preencha o campo com um e-mail válido.");

    } else if (senha.value.length < 8) {
        alert("Preencha a senha com no mínimo 8 digitos.");
    } else {
        alert('Criada com sucesso!')
        location.href = "./index.html"
    };
};

function salvarLocalStorage() {
    window.localStorage.setItem("usuarioStorage", JSON.stringify(usuarios));
}
