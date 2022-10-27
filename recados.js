const formularioRecados = document.getElementById('formRecados');
const descricao = document.getElementById('descricao');
const detalhamento = document.getElementById('detalhamento');
const salvar = document.getElementById('salvar')

let addRecados = JSON.parse(localStorage.getItem('recadoStorage') ?? '[]')

formularioRecados.addEventListener('submit', (e) => {
    e.preventDefault()


    salvarRecados()
});

function salvarRecados() {
    const recados = {
        id: addRecados.length + 1,
        descricao: descricao.value,
        detalhamento: detalhamento.value
    };
    addRecados.push(recados);
    salvarLocalStorage()
    console.log(addRecados)
    montarRecados(addRecados)

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

        let boatoEditar = document.createElement('button')
        boatoEditar.setAttribute('id', 'editar');
        //botaoApagar.setAttribute('onclick' 'eventoque eu vou criar')
        boatoEditar.innerText = 'Editar'

        linha.appendChild(idTabela)
        linha.appendChild(descricaoTabela)
        linha.appendChild(detalhamentoTabela)
        acaoTabela.appendChild(botaoApagar)
        acaoTabela.appendChild(boatoEditar)
        linha.appendChild(acaoTabela)
        tbody.appendChild(linha)
    });
}
function apagarRecados(id) {
    document.getElementById(`${id}`).remove()
    addRecados = addRecados.filter(recado => recado.id == id)
}
function salvarLocalStorage() {
    window.localStorage.setItem("recadoStorage", JSON.stringify(addRecados));
}
