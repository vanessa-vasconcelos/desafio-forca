const salvar = document.querySelector("#adicionar");
const adicionar = document.querySelector(".adicionando");

salvar.addEventListener("click", () => {
    var caixa = document.querySelector(".caixa");
    var texto = caixa.adiciona.value;
    if(texto.length <= 8){
        adicionar.textContent = texto.toUpperCase();
        sessionStorage.test1 = adicionar.textContent;
        alert("Palavra Adicionada") 
    } else {
        alert("Maximo 8 palavras")
    }

    caixa.reset();
    window.location.href = "jogo.html";
})