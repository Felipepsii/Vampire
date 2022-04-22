

let player = document.querySelector('#player')
let labelPlayer = document.querySelector('#labelPlayer')
let validPlayer = false

let login = document.querySelector('#login')
let labelLogin = document.querySelector('#labelLogin')
let validLogin = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let confirmSenha = document.querySelector('#confirmSenha')
let labelConfirmSenha = document.querySelector('#labelConfirmSenha')
let validConfirmSenha = false

let tokenMestre = document.querySelector('#tokenMestre')
let labelToken = document.querySelector('#labelToken')
let validToken = false

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')

let tokenReal = ('#bif')

player.addEventListener('keyup', () => {
    if(player.value.length <= 2){
        labelPlayer.setAttribute('style', 'color: red')
        labelPlayer.innerHTML = 'Pogin *Insira no minimo 3 caracteres*'
        player.setAttribute('style', 'border-color:red')
        validPlayer = false

    }else{
        labelPlayer.setAttribute('style', 'color: white')
        labelPlayer.innerHTML = 'Player'
        player.setAttribute('style', 'border-color:black')
        validPlayer = true
    }
})

login.addEventListener('keyup', () => {
    if(login.value.length <= 4){
        labelLogin.setAttribute('style', 'color: red')
        labelLogin.innerHTML = 'Login *Insira no minimo 5 caracteres*'
        login.setAttribute('style', 'border-color:red')
        validLogin = false

    }else{
        labelLogin.setAttribute('style', 'color: white')
        labelLogin.innerHTML = 'Login'
        login.setAttribute('style', 'border-color:black')
        validLogin = true
    }
})

senha.addEventListener('keyup', () => {
    if(senha.value.length <= 5){
        labelSenha.setAttribute('style', 'color: red')
        labelSenha.innerHTML = 'Senha *Insira no minimo 6 caracteres*'
        senha.setAttribute('style', 'border-color:red')
        validSenha = false

    }else{
        labelSenha.setAttribute('style', 'color: white')
        labelSenha.innerHTML = 'Senha'
        senha.setAttribute('style', 'border-color:black')
        validSenha = true

    }
})

confirmSenha.addEventListener('keyup', () => {
    if(senha.value != confirmSenha.value){
        labelConfirmSenha.setAttribute('style', 'color: red')
        labelConfirmSenha.innerHTML = 'Confirmar Senha *As senhas não conferem*'
        confirmSenha.setAttribute('style', 'border-color:red')
        validConfirmSenha = false

    }else{
        labelConfirmSenha.setAttribute('style', 'color: white')
        labelConfirmSenha.innerHTML = 'Confirmar Senha'
        confirmSenha.setAttribute('style', 'border-color:black')
        validConfirmSenha = true

    }
})

tokenMestre.addEventListener('keyup', () => {
    if(tokenMestre.value != tokenReal){
        labelToken.setAttribute('style', 'color: red')
        labelToken.innerHTML = 'Token do Mestre *Token Invalido*'
        tokenMestre.setAttribute('style', 'border-color:red')
        validToken = false

    }else{
        labelToken.setAttribute('style', 'color: white')
        labelToken.innerHTML = 'Token do Mestre'
        tokenMestre.setAttribute('style', 'border-color:black')
        validToken = true

    }
})

function cadastrar(){
    if (validPlayer && validLogin && validSenha && validConfirmSenha && validToken ) {
        msgSuccess.setAttribute('style', 'display:block')
        msgSuccess.innerHTML = '<strong>Cadastrando usuário....</strong>'
        msgError.setAttribute('style', 'display:none')
        msgError.innerHTML = ''
    }else{
        msgSuccess.setAttribute('style', 'display:none')
        msgSuccess.innerHTML = ''
        msgError.setAttribute('style', 'display:block')
        msgError.innerHTML = '<strong>Preencha todos os campos corretamente antes de cadastrar</strong>'
    }
}