const json = '{"nome": "Nome:Corvo" , "classe": "Classe:Assasino" , "raridade": "Raridade:Lendário"}'
const json2 = '{"nome": "Nome:Otis" , "classe": "Classe:Destruidor " , "raridade": "Raridade:Cromatico"}'
const json3 = '{"nome": "Nome:Bea" , "classe": "Classe:Sniper" , "raridade": "Raridade:Epíco"}'
const json4 = '{"nome": "Nome:Gus" , "classe": "Classe:Suporte" , "raridade": "Raridade:Super-Raro"}'
const json5= '{"nome": "Nome:Eugênio" , "classe": "Classe:Suporte" , "raridade": "Raridade:Mítico"}'
const json6 = '{"nome": "Nome:Grom" , "classe": "Classe:Destruidor" , "raridade": "Raridade:Epíco"}'

 const api = JSON.parse(json);
 const api2 = JSON.parse(json2);
 const api3 = JSON.parse(json3);
 const api4 = JSON.parse(json4);
 const api5 = JSON.parse(json5);
 const api6 = JSON.parse(json6);



document.getElementById("mybutton1").addEventListener("click" , function () {
document.getElementById("exibir").innerHTML = api.nome + "<br>" + api.classe + "<br>"+ api.raridade ;
document.getElementById("imagens").src = "imagens/corvo.png"

});

document.getElementById("mybutton2").addEventListener("click" , function () {
document.getElementById("exibir").innerHTML = api2.nome + "<br>" + api2.classe + "<br>"+ api2.raridade;
document.getElementById("imagens").src = "imagens/otis.png"
});

document.getElementById("mybutton3").addEventListener("click" , function () {
document.getElementById("exibir").innerHTML = api3.nome + "<br>" + api3.classe + "<br>"+ api3.raridade;
document.getElementById("imagens").src = "imagens/bea.png"
});

document.getElementById("mybutton4").addEventListener("click" , function () {
document.getElementById("exibir").innerHTML = api4.nome + "<br>" + api4.classe + "<br>"+ api4.raridade;
document.getElementById("imagens").src = "imagens/gus.png"
});

document.getElementById("mybutton6").addEventListener("click" , function () {
document.getElementById("exibir").innerHTML = api6.nome + "<br>" + api6.classe + "<br>"+ api6.raridade;
document.getElementById("imagens").src = "imagens/grom.png"
});

document.getElementById("mybutton5").addEventListener("click" , function () {
document.getElementById("exibir").innerHTML = api5.nome + "<br>" + api5.classe + "<br>"+ api5.raridade;
document.getElementById("imagens").src = "imagens/Eugenio.png"
});




console.log(api)
console.log(api2)
console.log(api3)
console.log(api4)
console.log(api5)
console.log(api6)

