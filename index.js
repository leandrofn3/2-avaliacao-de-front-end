let listaUsuarios = localStorage.getItem('usuarioStorage');
if (listaUsuarios === null) {
    listaUsuarios = []
} else {
    listaUsuarios = [JSON.parse(listaUsuarios)]
};


const formulario = document.getElementById('formLogin');
formulario.addEventListener('submit', (evento) => {
    evento.preventDefault()

    const emailHTML = document.getElementById('email').value
    const senhaHTML = document.getElementById('senha').value

    const verificar = getAccount(email);

    for (let usuarios of listaUsuarios) {
        if (usuarios.email === emailHTML.value && usuarios.senha === senhaHTML.value) {
            window.location.href = "./recados.html"
        }
    }
    if (!verificar) {
        alert("opps! Verifique o usuário ou a senha.");
        return
    }

    if (verificar) {
        if (verificar.senha !== senha) {
            alert("opps! Verifique o usuário ou a senha.")
            return
        }
    }
});
