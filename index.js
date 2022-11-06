const formularioLogin = document.getElementById('formLogin');

let listaUsuarios = JSON.parse(localStorage.getItem('listaUsuarios') ?? '[]');

formularioLogin.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const emailHTML = document.getElementById('email')
    const senhaHTML = document.getElementById('senha')

    const usuarioEncontrado = listaUsuarios.find((usuario) => usuario.email === emailHTML.value && usuario.senha === senhaHTML.value)

    if (!usuarioEncontrado) {
        alert('Conta nÃ£o encontrada! Verifique e-mail e senha informadas!');
        return
    }

    salvarLocalStorage('usuarioLogado', usuarioEncontrado);
    window.location.href = 'recados.html'
});

function salvarLocalStorage(chave, dados) {
    window.localStorage.setItem(chave, JSON.stringify(dados));
}

document.addEventListener('DOMContentLoaded', () => {
    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado') ?? 'null');

    if (usuarioLogado) {
        window.location.href = 'recados.html'
    }
})