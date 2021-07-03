import { Home } from './Home.js';
import { Features } from './Features.js';
import { Prices } from './Prices.js';



const App = document.querySelector('#app')
const homeLink = document.querySelector('#home')
const featuresLink = document.querySelector('#features')
const pricingLink = document.querySelector('#pricing')
const Logo = document.querySelector('.navbar-brand')

//TODO: Descomentar estas variables cuando se elimine el TODO de linea 51
//const LoginDiv = document.querySelector('#login')
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
}) */
document.addEventListener('DOMContentLoaded', ()=>{
//TODO: Eliminar hasta la linea 139 inclusive

let pedirNombre = prompt('Ingresa tu nombre completo:')

while(pedirNombre === '' || pedirNombre === null){
    pedirNombre = prompt('Por favor ingrese un valor valido de nombre completo')
}

const Saludo = (nombre) => {
    alert('Bienvenido ' + nombre + ', Cuanto tiempo sin verte!')
}

class Compra{
    constructor(product, quantity, shop){
        this.product = product,
        this.quantity = parseInt(quantity),
        this.shop = shop
    }
    Items(){
        return `Deseas comprar ${this.quantity} ${this.product} de la tienda ${this.shop}. Su pedido ha sido tomado`
    }

}
let cantidadProductos;
if(pedirNombre){
    Saludo(pedirNombre)
    cantidadProductos = parseInt(prompt(`Bueno ${pedirNombre},cuantos productos diferentes desea comprar?`))
}

let counter = 0;
const listadoPedidos = [];

while(isNaN(cantidadProductos)){
    cantidadProductos = parseInt(prompt('Debe ingresar un valor numerico. Cuantos productos diferentes desea comprar?'))
}

while(counter < cantidadProductos){
    const prod = prompt('Ingrese un producto que desee comprar:')
    const qt = parseInt(prompt('Cuanto de ese producto desea comprar?'))
    const store = prompt('Donde quiere que vayamos a conseguirlo?')

    const producto = new Compra(prod, qt, store);  
    
    listadoPedidos.push(producto)
    
    counter++;
}

listadoPedidos.sort((a, b) => (a.quantity > b.quantity) ? 1 : -1)

const pedidoCompleto = (pedidos) => {
    let pedidoListos = '';
    pedidos.forEach(pedido =>{
        pedidoListos += pedido.quantity + ' x ' + pedido.product + ' comprados en ' + pedido.shop + '\n'
    })
    return pedidoListos;
}


if(counter === cantidadProductos){
    alert(`
    ${pedirNombre}, gracias por tu compra de:
    ${pedidoCompleto(listadoPedidos)}
    `)
}



/* console.log(listadoPedidos) */

})
