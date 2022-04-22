let btn = document.querySelector('.fa-eye')

btn.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#senha')

    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text')
    }else{
        inputSenha.setAttribute('type', 'password')
    }
        
})

let login = document.querySelector('#login')
let labelLogin = document.querySelector('#labelLogin')
let validLogin = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false


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
