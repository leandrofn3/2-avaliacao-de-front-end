const formularioRecados = document.getElementById('formRecados');
const descricao = document.getElementById('descricao');
const detalhamento = document.getElementById('detalhamento');


let addRecados = JSON.parse(localStorage.getItem('recadoStorage') ?? '[]')

formularioRecados.addEventListener('submit', (e) => {
    e.preventDefault()


    salvarRecados()
});

document.addEventListener('DOMContentLoaded', () => {
    montarRecados(addRecados)
})

function salvarRecados() {
    const recados = {
        id: addRecados.length + 1,
        descricao: descricao.value,
        detalhamento: detalhamento.value
    };
    addRecados.push(recados);
    salvarLocalStorage();
    formularioRecados.reset();
    console.log(addRecados);
    montarRecados(addRecados);

    //location.reload()
};

function montarRecados(addRecados) {

    let tbody = document.getElementById('tbody');
    tbody.innerHTML = ""

    addRecados.forEach((recado) => {

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
            editarDados(recado)
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
    if (confirm('tem certeza que deseja excluir?')) {
        document.getElementById(`${id}`).remove()
        addRecados = addRecados.filter(recado => recado.id !== id)
        window.localStorage.setItem('recadoStorage', JSON.stringify(addRecados));
    }
}
function salvarLocalStorage() {
    window.localStorage.setItem('recadoStorage', JSON.stringify(addRecados));
}

function editarDados(recado) {
    descricao.value = recado.descricao
    detalhamento.value = recado.detalhamento

    const salvar = document.getElementById('salvar')
    salvar.setAttribute('style', 'display: none');

    const botaoAtualizar = document.getElementById('btn-atualizar')
    botaoAtualizar.setAttribute('style', 'display: inline-block');
    botaoAtualizar.addEventListener('click', () => {
        const dadoAtualizados = {
            descricao: descricao.value,
            detalhamento: detalhamento.value
        }
    })

    const botaoCancelar = document.getElementById('cancelar')
    botaoCancelar.setAttribute('style', 'display: inline-block')
    botaoCancelar.addEventListener('click', () => {

        salvar.setAttribute('style', 'display: inline-block');
        botaoAtualizar.setAttribute('style', 'display: none');
        botaoCancelar.setAttribute('style', 'display: none');
    });
}
