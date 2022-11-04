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



    for (let usuarios of listaUsuarios) {
        if (usuarios.email !== emailHTML.value && usuarios.senha !== senhaHTML.value) {
            alert("usuário ou senha incoreto!")
            return
        }

       console.log(usuarios)

        if (usuarios.email === emailHTML.value && usuarios.senha === senhaHTML.value) {
            /*location.href = "./recados.html"*/
        };
    }

});


