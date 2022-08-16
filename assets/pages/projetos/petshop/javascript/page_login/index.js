
let btn = document.querySelector('#senha')

btn.addEventListener('click', () => {
    let inputSenha = document.querySelector('#senha1')

    if (inputSenha.getAttribute('type') == 'password') {
        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'password')
    }
})

function entrar() {
    let usuario = document.querySelector('#usuario')
    let senha = document.querySelector('#senha1')

    let listaUser = []
    let userValid = {
        nome: '',
        user: '',
        senha: ''
    }
    listaUser = JSON.parse(localStorage.getItem('listaUser'))
    listaUser.forEach((item) => {
        if (usuario.value == item.userCad && senha.value == item.senhaCad) {
            userValid = {
                nome: item.nomeCad,
                user: item.userCad,
                senha: item.senhaCad
            }
        }
    })

    if (usuario.value == userValid.user && senha.value == userValid.senha) {
        window.location.href = './pos_login.html'

        let token = Math.random().toString(16).substring(2)
        localStorage.setItem('token', token)
        localStorage.setItem('userLogado', JSON.stringify(userValid)
        )


    } else {
        alert('Verifique Usuário/senha.')
    }


}
