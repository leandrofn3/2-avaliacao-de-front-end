const formularioCriarConta = document.getElementById('formCriarConta');
const nome = document.getElementById('nome');
const emailHTML = document.getElementById('email');
const senha = document.getElementById('senha');
const confirmarSenha = document.getElementById('confirmaSenha');
const usuarios = JSON.parse(localStorage.getItem('listaUsuarios') ?? '[]');


formularioCriarConta.addEventListener('submit', (e) => {
    e.preventDefault();

    const formularioValido = verificarCredenciais();

    if (formularioValido) {
        salvarFormulario()
    }

});

function salvarFormulario() {
    const novoUsuario = {
        nome: nome.value,
        email: emailHTML.value,
        senha: senha.value,
        recados: []
    };

    const existe = usuarios.some((usuario) => {
        return usuario.email === novoUsuario.email
    });

    if (existe) {
        alert('Esse usuário já existe!');
        return
    }

    usuarios.push(novoUsuario)
    console.log(usuarios)

    salvarLocalStorage('listaUsuarios', usuarios)
    formularioCriarConta.reset()
    alert('Conta criada com sucesso!')
    window.location.href = 'index.html'
};

function verificarCredenciais() {
    let valido = true;

    if (nome.value.length < 3) {
        alert("preencha o campo com seu nome completo");
        valido = false;
        return valido
    }

    if (email.value.length < 5) {
        alert("preencha o campo com um e-mail válido.");
        valido = false;
        return valido
    }

    if (senha.value.length < 8) {
        alert("Preencha a senha com no mínimo 8 digitos.");
        valido = false;
        return valido
    }

    if (senha.value !== confirmarSenha.value) {
        alert('Sua senha e diferente da confirmação!')
        valido = false;
    }

    return valido
};

function salvarLocalStorage(chave, dados) {
    window.localStorage.setItem(chave, JSON.stringify(dados));
}