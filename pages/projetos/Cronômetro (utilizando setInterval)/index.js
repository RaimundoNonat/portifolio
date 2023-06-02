
// Função para criar o relógio em segundos.
function criaHoraDosSegundos(segundos) {
 const data = new Date(segundos * 1000);
 return data.toLocaleTimeString('pt-BR', {
  hour12: false,
  timeZone: 'UTC'
 });
}

// Declarando variáveis para salvar os eventos das classes que estão no HTML.
const relogio = document.querySelector('.relogio')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')

// Declarado variável para salvar o valor inicial dos segundos.
let segundos = 0;

// Declarando a variável do timer (mas sem valores).
let timer;

// Função para iniciar o relógio.
function iniciaRelogio() {
  timer = setInterval(function () {
   segundos++;
   relogio.innerHTML = criaHoraDosSegundos(segundos);
 }, 1000);
}

// Função para iniciar o timer através do botão do HTML.
iniciar.addEventListener('click', function (event) {
 relogio.classList.remove('pausado');
 clearInterval(timer);
 iniciaRelogio();
});

// Função para pausar o timer através do botão do HTML.
pausar.addEventListener('click', function (event) {
 clearInterval(timer);
 relogio.classList.add('pausado');
});

// Função para zerar o timer através do botão do HTML.
zerar.addEventListener('click', function (event) {
 clearInterval(timer);
 relogio.classList.remove('pausado');
 relogio.innerHTML = '00:00:00';
 segundos = 0;
}); 