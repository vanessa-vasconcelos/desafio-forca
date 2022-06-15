const tecnologias = ["java", "react", "node", "python", "php"];
const palavraSecreta = tecnologias[Math.floor(Math.random() * tecnologias.length)];
const letrasErradas = [];
const letrasCorretas = [];


document.addEventListener("keydown", (evento) => {
    const codigo = evento.keyCode; // 65 - 90 (intervalo)
    if (eLetra(codigo)) {
        const letra = evento.key;
        if (letrasErradas.includes(letra)) {
            mostrarAvisoLetraRepetida();
        } else {
            if (palavraSecreta.includes(letra)) {
                letrasCorretas.push(letra);
            } else {
                letrasErradas.push(letra);
            }
        }
        atualizarJogo();
    }
});

function atualizarJogo() {
    mostrarLetrasErradas();
    mostrarLetrasCertas();
    desenharForca();
    checarJogo();
}

function mostrarLetrasErradas() {
    const LErradas = document.querySelector(".letras-erradas");
    LErradas.innerHTML = " ";
    letrasErradas.forEach(letra => {
        LErradas.innerHTML += `<span>${letra}</span>`;
    });
}

function mostrarLetrasCertas() {
    const LCertas = document.querySelector(".palavra-secreta");
    LCertas.innerHTML = "";
    palavraSecreta.split("").forEach((letra) => {
        if (letrasCorretas.includes(letra)) {
            LCertas.innerHTML += `<span>${letra}</span>`;
        } else {
            LCertas.innerHTML += `<span>_</span>`;
        }
    });
}

function checarJogo() {
    let mensagem = "";
    const LCertas = document.querySelector(".palavra-secreta");
    const partesCorpo = document.querySelectorAll(".forca-parte");
    if (letrasErradas.length === partesCorpo.length) {
        mensagem = "Fim de jogo! Você perdeu.";
    }
    if (palavraSecreta === LCertas.innerText) {
        mensagem = "Parabéns! Você ganhou."
    }
    if (mensagem) {
        document.querySelector("#mensagem").innerHTML = mensagem;
        document.querySelector(".aviso-final").style.display = "flex";
    }
}

function desenharForca() {
    const partesCorpo = document.querySelectorAll(".forca-parte");
    for (let i = 0; i < letrasErradas.length; i++) {
        partesCorpo[i].style.display = "block";
    }
}

function mostrarAvisoLetraRepetida() {
    const aviso = document.querySelector(".aviso-palavra-repetida");
    aviso.classList.add("show");
    setTimeout(() => {
        aviso.classList.remove("show");
    }, 1500);
}

function eLetra(codigo) {
    return codigo >= 65 && codigo <= 90;
}

function reiniciarJogo() {
    window.location.reload();
}