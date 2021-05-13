
function exibeResultado(endereco){
    document.getElementById("lograd").innerHTML = endereco.logradouro;
    document.getElementById("bairro").innerHTML = endereco.bairro;
    document.getElementById("cidade").innerHTML = endereco.localidade + ' - ' + endereco.uf;
}

async function buscaEnd(event) {
    if(event) event.preventDefault();
    const cep = document.querySelector('#cep').value;
    const url = `http://viacep.com.br/ws/${cep}/json/`;
    const dados = await fetch(url);
    const endereco = await dados.json();
    if (endereco.hasOwnProperty('erro')){
        document.getElementById("lograd").innerHTML = 'CEP inválido!';
        document.getElementById("bairro").innerHTML = '*';
        document.getElementById("cidade").innerHTML = '*';
    } else exibeResultado(endereco);
}