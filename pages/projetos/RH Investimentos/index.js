function entrarLogin() {
    location.href = './page/login/index.html'
}

const rendafixa = document.querySelector('.display-none-rendaFixa')
const rendavariavel = document.querySelector('.display-none-rendaVariavel')
const rendaambos = document.querySelector('.display-none-ambos')

const carousel1 = document.querySelector('.opcoes')
const carousel2 = document.querySelector('.opcoes2')

const contatoH = document.querySelector('.contato')

function contato() {
    location.href = './page/contato/index.html'
}


function carousel01(){
    if (carousel1.style.display === 'block'){
        carousel1.style.display = 'none';
        carousel2.style.display = 'block';
    } else {
    carousel1.style.display = 'block';
    
    }
}

function carousel02(){
    if (carousel2.style.display === 'block'){
        carousel2.style.display = 'none';
        carousel1.style.display = 'block';
    } else {
    carousel2.style.display = 'block';
    }
}


function rendaFixa() {
    if (rendafixa.style.display === 'block') {
        rendafixa.style.display = 'none';
    } else {
        rendafixa.style.display = 'block';
        rendavariavel.style.display = 'none';
        rendaambos.style.display = 'none';
    }
};

function rendaVariavel() {
    if (rendavariavel.style.display === 'block') {
        rendavariavel.style.display = 'none';
    } else {
        rendavariavel.style.display = 'block';
        rendafixa.style.display = 'none'
        rendaambos.style.display = 'none';
    }
};

function ambos() {
    if (rendaambos.style.display === 'block') {
        rendaambos.style.display = 'none';
    } else {
        rendaambos.style.display = 'block';
        rendavariavel.style.display = 'none';
        rendafixa.style.display = 'none';   
    }
};
