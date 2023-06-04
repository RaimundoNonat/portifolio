const carousel1 = document.querySelector('.opcoes')
const carousel2 = document.querySelector('.opcoes2')

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

