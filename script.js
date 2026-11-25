const carro1 = document.getElementById("carro1");
const carro2 = document.getElementById("carro2");

const botao1 = document.getElementById("botao1");
const botao2 = document.getElementById("botao2");
const reiniciar = document.getElementById("reiniciar");

const turbo1 = document.getElementById("turbo1");
const turbo2 = document.getElementById("turbo2");

const mensagem = document.getElementById("mensagem");
const chegada = document.querySelector(".chegada");

let position1 = 0;
let position2 = 0;
let terminou = false;
let turbo1Utilizado = false;
let turbo2Utilizado = false;

function acelerar(jogador) {
    if (terminou) return;

    const limite = Math.max(0, chegada.offsetLeft - carro1.offsetWidth);

    if (jogador === 1) {
        position1 = Math.min(position1 + 15, limite);
        carro1.style.left = `${position1}px`;

        if (position1 >= limite) {
            mensagem.textContent = "🏆 Jogador 1 venceu!";
            terminou = true;
        }
    }

    if (jogador === 2) {
        position2 = Math.min(position2 + 15, limite);
        carro2.style.left = `${position2}px`;

        if (position2 >= limite) {
            mensagem.textContent = "🏆 Jogador 2 venceu!";
            terminou = true;
        }
    }
}

botao1.addEventListener("click", function() {acelerar(1)});
botao2.addEventListener("click", function() {acelerar(2)});

document.addEventListener("keydown", function(evento){
    if(evento.repeat) return;

    const tecla = evento.key.toLowerCase();

    if(tecla === "a"){
        acelerar(1);
    }

    if(tecla ==="l"){
        acelerar(2);
    }
});

function acionarTurbo1(jogador) {
    if (terminou) return;

    const limite = Math.max(0, chegada.offsetLeft - carro1.offsetWidth);

    if (jogador === 1 && turbo1Utilizado == false) {
        position1 = Math.min(position1 + 70, limite);
        carro1.style.left = `${position1}px`;
        turbo1Utilizado = true;
    }

    if (position1 >= limite) {
            mensagem.textContent = "🏆 Jogador 1 venceu!";
            terminou = true;
    }
}

function acionarTurbo2(jogador) {
    if (terminou) return;

    const limite = Math.max(0, chegada.offsetLeft - carro2.offsetWidth);

    if (jogador === 2 && turbo2Utilizado == false) {
        position2 = Math.min(position2 + 70, limite);
        carro2.style.left = `${position1}px`;
        turbo2Utilizado = true;
    }

    if (position2 >= limite) {
            mensagem.textContent = "🏆 Jogador 2 venceu!";
            terminou = true;
    }
}

turbo1.addEventListener("click", function() {acionarTurbo1(1)});
turbo2.addEventListener("click", function() {acionarTurbo2(2)});

document.addEventListener("keydown", function(evento){
    if(evento.repeat) return;

    const tecla = evento.key.toLowerCase();

    if(tecla === "s"){
        acionarTurbo1(1);
    }

    if(tecla ==="k"){
        acionarTurbo2(2);
    }
});


reiniciar.addEventListener("click", function(){
    position1 = 0;
    position2 = 0;
    terminou = false;
    turbo1Utilizado = false;
    turbo2Utilizado = false;

    carro1.style.left = "0px"
    carro2.style.left = "0px"

    mensagem.textContent = "Preparar, apontar, já!"
});