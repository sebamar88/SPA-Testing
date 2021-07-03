import { Home } from './Home.js';
import { Features } from './Features.js';
import { Prices } from './Prices.js';



const App = document.querySelector('#app')
const homeLink = document.querySelector('#home')
const featuresLink = document.querySelector('#features')
const pricingLink = document.querySelector('#pricing')
const Logo = document.querySelector('.navbar-brand')
const LoginDiv = document.querySelector('#login')

//TODO: Descomentar estas variables cuando se elimine el TODO de linea 51
//const LoginForm = document.querySelector('#loginForm')
//const nameLogin = document.querySelector('#nameLogin') 

let userName = '';

Logo.addEventListener('click', (e)=>{
    e.preventDefault()
    App.innerHTML = ''
    App.innerHTML = Home;
})

homeLink.addEventListener('click', (e)=>{
    e.preventDefault()
    App.innerHTML = ''
    App.innerHTML = Home;
})

featuresLink.addEventListener('click', (e)=>{
    e.preventDefault()
    App.innerHTML = ''
    App.innerHTML = Features;
})

pricingLink.addEventListener('click', (e)=>{
    e.preventDefault()
    App.innerHTML = ''
    App.innerHTML = Prices;
})

/* LoginForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    LoginDiv.innerHTML = ''
    userName = nameLogin.value;
    console.log(userName)
    LoginDiv.innerHTML = `<span>Bienvenido ${userName}</span><form class="d-inline-flex ms-5" id="logOut"><button class="btn btn-primary">LogOut</button></form>`
}) */
document.addEventListener('DOMContentLoaded', ()=>{
//TODO: Eliminar hasta la linea 59 inclusive

let pedirNombre = prompt('Ingresa tu nombre completo:')

while(pedirNombre === '' || pedirNombre === null){
    pedirNombre = prompt('Por favor ingrese un valor valido de nombre completo')
}
if(pedirNombre){
    LoginDiv.innerHTML = `<span>Bienvenido ${pedirNombre}</span><form class="d-inline-flex ms-5" id="logOut"><button class="btn btn-primary">LogOut</button></form>`
}

let logOutButton;

if(userName.trim() > 0){
    logOutButton = document.querySelector('#logOut')
    logOutButton.addEventListener('submit', (e)=>{
        e.preventDefault();
        LoginDiv.innerHTML = ''
        userName = '';
        LoginDiv.innerHTML = `<form id="loginForm" action="">
                                <input type="text" name="name" id="nameLogin">
                                <input type="password" name="password" id="passLogin">
                                <input type="submit" class="btn btn-primary" value="Login">
                            </form>`
    })
    
}
})
