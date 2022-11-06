const formularioRecados = document.getElementById('formRecados');
const descricao = document.getElementById('descricao');
const detalhamento = document.getElementById('detalhamento');
const botaoSair = document.getElementById('btn-sair');
const botaoSalvar = document.getElementById('salvar');
const botaoAtualizar = document.getElementById('btn-atualizar');
const botaoCancelar = document.getElementById('cancelar');
const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado') ?? 'null');

document.addEventListener('DOMContentLoaded', () => {
    if (!usuarioLogado) {
        alert('Você precisa realizar login para acessar essa página!');
        window.location.href = 'index.html';
    }

    montarRecados(usuarioLogado.recados)
})

botaoSair.addEventListener('click', () => {
    const usuarios = JSON.parse(localStorage.getItem('listaUsuarios'));

    const indice = usuarios.findIndex((usuario) => usuario.email === usuarioLogado.email);

    console.log(usuarioLogado);

    usuarios[indice] = usuarioLogado;
    salvarLocalStorage('listaUsuarios', usuarios);

    localStorage.removeItem('usuarioLogado');
    window.location.href = 'index.html';
});


formularioRecados.addEventListener('submit', (e) => {
    e.preventDefault();

    salvarRecado()
});

function salvarRecado() {
    const novoRecado = {
        id: usuarioLogado.recados.length + 1,
        descricao: descricao.value,
        detalhamento: detalhamento.value
    };

    usuarioLogado.recados.push(novoRecado);
    salvarLocalStorage('usuarioLogado', usuarioLogado);

    formularioRecados.reset();
    montarRecados(usuarioLogado.recados);
};

function montarRecados(listaRecados) {

    let tbody = document.getElementById('tbody');
    tbody.innerHTML = ""

    listaRecados.forEach((recado, indice) => {

        const linha = document.createElement('tr')
        linha.setAttribute('style', 'border: 1.5px solid black')
        linha.setAttribute('id', recado.id)

        const idTabela = document.createElement('td');
        idTabela.innerText = recado.id;

        const descricaoTabela = document.createElement('td');
        descricaoTabela.innerText = recado.descricao;

        const detalhamentoTabela = document.createElement('td');
        detalhamentoTabela.innerText = recado.detalhamento;

        const acaoTabela = document.createElement('td');

        let botaoApagar = document.createElement('button');
        botaoApagar.setAttribute('style', ' margin-right: 5px;')
        botaoApagar.setAttribute('id', 'apagar');
        botaoApagar.innerText = 'Apagar'
        botaoApagar.addEventListener('click', () => {
            apagarRecados(recado.id)
        });

        let botaoEditar = document.createElement('button')
        botaoEditar.setAttribute('id', 'editar');
        botaoEditar.innerText = 'Editar'
        botaoEditar.addEventListener('click', () => {
            editarDados(recado, indice)
        })

        linha.appendChild(idTabela)
        linha.appendChild(descricaoTabela)
        linha.appendChild(detalhamentoTabela)
        acaoTabela.appendChild(botaoApagar)
        acaoTabela.appendChild(botaoEditar)
        linha.appendChild(acaoTabela)
        tbody.appendChild(linha)
    });
}

function apagarRecados(id) {
    const confirma = confirm(`Tem certeza que deseja excluir o recado ${id}?`)

    if (confirma) {
        document.getElementById(`${id}`).remove()
        usuarioLogado.recados = usuarioLogado.recados.filter(recado => recado.id !== id)
        salvarLocalStorage('usuarioLogado', usuarioLogado)
    }
}

function editarDados(recado, indice) {
    descricao.value = recado.descricao
    detalhamento.value = recado.detalhamento

    botaoSalvar.setAttribute('style', 'display: none');
    botaoAtualizar.setAttribute('style', 'display: inline-block');
    botaoCancelar.setAttribute('style', 'display: inline-block');


    botaoCancelar.addEventListener('click', () => {
        botaoSalvar.setAttribute('style', 'display: inline-block');
        botaoAtualizar.setAttribute('style', 'display: none');
        botaoCancelar.setAttribute('style', 'display: none');
        formularioRecados.reset();
    });


    botaoAtualizar.addEventListener('click', () => {
        const recadoAtualizado = {
            id: recado.id,
            descricao: descricao.value,
            detalhamento: detalhamento.value
        }

        usuarioLogado.recados[indice] = recadoAtualizado;
        salvarLocalStorage('usuarioLogado', usuarioLogado);

        window.location.reload();
    })
}

function salvarLocalStorage(chave, dados) {
    window.localStorage.setItem(chave, JSON.stringify(dados));
}