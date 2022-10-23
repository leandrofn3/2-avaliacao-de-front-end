const formularioRecados = document.getElementById('formRecados');
const descricao = document.getElementById('descricao');
const detalhamento = document.getElementById('detalhamento');
const salvar = document.getElementsByClassName('salvar')
let apagar = document.getElementById('Apagar')
let editar = document.getElementById('editar')
let addRecados = []

formularioRecados.addEventListener('submit', (e) => {
    e.preventDefault()


    salvarRecados()
});

function construtor() {
    this.id = 1;

}

function salvarRecados() {
    const recados = {
        id: 1,
        descricao: descricao.value,
        detalhamento: detalhamento.value
    };
    addRecados.push(recados);
    console.log(addRecados)
    montarRecados(addRecados)


};

function montarRecados(addRecados) {

    let tbody = document.getElementById('tbody');


    addRecados.forEach((addRecados) => {

        const linha = document.createElement('tr')
        linha.setAttribute('style', 'border: 1.5px solid black')

        const idTabela = document.createElement('td');
        idTabela.innerText = addRecados.id;

        const descricaoTabela = document.createElement('td');
        descricaoTabela.innerText = addRecados.descricao;

        const detalhamentoTabela = document.createElement('td');
        detalhamentoTabela.innerText = addRecados.detalhamento;

        const acaoTabela = document.createElement('td');

        let botaoApagar = document.createElement('button');
        botaoApagar.setAttribute('style', ' margin-right: 5px;')
        botaoApagar.setAttribute('id', 'apagar');
        botaoApagar.setAttribute('onclick', 'deletar')
        botaoApagar.innerText = 'Apagar'

        let boatoEditar = document.createElement('button')
        boatoEditar.setAttribute('id', 'editar');
        //botaoApagar.setAttribute('onclick' 'eventoque eu vou criar')
        boatoEditar.innerText = 'Editar'



        tbody.appendChild(linha)
        tbody.appendChild(idTabela)
        tbody.appendChild(descricaoTabela)
        tbody.appendChild(detalhamentoTabela)
        tbody.appendChild(acaoTabela)
        acaoTabela.appendChild(botaoApagar)
        acaoTabela.appendChild(boatoEditar)
        tbody.appendChild(linha)
    });

}



