const item = document.querySelector('.item')
const preco = document.querySelector('.preco')
const quantidade = document.querySelector('.quantidade')
const btnAdicionar = document.querySelector('.btnAdicionar')
const produtos = document.querySelector('.produtos')

// Função para criar a div da lista.
function criaDiv() {
    const div = document.createElement('div')
    return div;
};

// Funções responsáveis por enviar os dados através do botão ENTER que é o código 13. Caso os campos estejam em branco, as informações não são enviadas.
item.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        if (!item.value) return;
        if (!preco.value) return;
        if (!quantidade.value) return;
        criaItem(item.value)
        criaItem(`R$ ${preco.value}`)
        criaItem(quantidade.value)
    }
});

preco.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        if (!item.value) return;
        if (!preco.value) return;
        if (!quantidade.value) return;
        criaItem(item.value);
        criaItem(`R$ ${preco.value}`);
        criaItem(quantidade.value);
    }
});

quantidade.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        if (!item.value) return;
        if (!preco.value) return;
        if (!quantidade.value) return;
        criaItem(item.value);
        criaItem(`R$ ${preco.value}`);
        criaItem(quantidade.value);
        limpaInput();
    }
});

// Função para limpar o input.
function limpaInput() {
    item.value = '';
    preco.value = '';
    quantidade.value = '';
    item.focus();
};

// Função para criação dos itens.
function criaItem(textoIncluso) {
    const div = criaDiv();
    div.innerText = textoIncluso;
    produtos.appendChild(div);
};

// Botão ADICIONAR
// Abaixo criamos uma função para capturar as informações inclusas nos campos item, preco e quantidade.
// A informação (!item.value) return; = Significa que o botão adicionar só será acionado caso tenha alguma informação no campo.

btnAdicionar.addEventListener('click', function () { 
    if (!item.value) return;
    if (!preco.value) return;
    if (!quantidade.value) return;
    criaItem(item.value)
    criaItem(`R$ ${preco.value}`);
    criaItem(quantidade.value)
    limpaInput();
});

