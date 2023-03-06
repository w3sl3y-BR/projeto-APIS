// Metodo fetch() para buscar o arquivo de dados.json ou qualquer API,transformando o resultado em um objeto
//usando metodo response.json

fetch('javascript/dados.json')
    .then(response => response.json())
    .then(corpo => {

       
        document.getElementById('imagem').innerHTML =
        corpo.imagem;
        document.getElementById('nome').innerHTML =
        corpo.nome;
        document.getElementById('anime').innerHTML =
        corpo.anime;
        document.getElementById('preco').innerHTML =
        corpo.preco;

        document.getElementById('imagem2').innerHTML =
        corpo.imagem2;
        document.getElementById('nome2').innerHTML =
        corpo.nome2;
        document.getElementById('anime2').innerHTML =
        corpo.anime2;
        document.getElementById('preco2').innerHTML =
        corpo.preco2;

        document.getElementById('imagem3').innerHTML =
        corpo.imagem3;
        document.getElementById('nome3').innerHTML =
        corpo.nome3;
        document.getElementById('anime3').innerHTML =
        corpo.anime3;
        document.getElementById('preco3').innerHTML =
        corpo.preco3;
});