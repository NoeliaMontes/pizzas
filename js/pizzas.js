cartaPizzas=[]

document.addEventListener('DOMContentLoaded', cargarDatos)

function cargarDatos(){

        fetch('pizzas.json')
        .then(res => res.json())
        .then(data=> {console.log(`datos ${data}`); cartaPizzas=data})
        .catch(error=>console.log(`${error}`))
}

pizzasCompradas=[]

function cargarPizzas() {

    let listadoPizzas = document.getElementById('listadoPizzas')
    /*
        for (i=0; i < cartaPizzas.length; i++) {
            console.log(cartaPizzas[i].nombre)
        }
    */
    cartaPizzas.forEach(function(pizza){
        let pizzaDiv = document.createElement('div')
        let nombre = document.createElement('h3')
        nombre.innerHTML = pizza.nombre

        let listaIngredientes = document.createElement('p')
        let cadenaIngredientes = ""
        pizza.ingredientes.forEach(function(ingrediente){
            cadenaIngredientes = cadenaIngredientes + ingrediente + ', '
        })
        listaIngredientes.innerHTML = cadenaIngredientes
       
       /* let listaIngredientes = document.createElement('ul')
        pizza.ingredientes.forEach(function(ingrediente){
            var ingredienteLi = document.createElement('li')
            ingredienteLi.innerHTML = ingrediente
            listaIngredientes.appendChild(ingredienteLi)
        })*/

        let botonComprar = document.createElement('button')
        botonComprar.innerHTML = "Comprar"
        botonComprar.id = pizza.nombre

        pizzaDiv.appendChild(nombre)
        pizzaDiv.appendChild(listaIngredientes)
        pizzaDiv.appendChild(botonComprar)
        listadoPizzas.appendChild(pizzaDiv)
    })

    let listaBotones = document.getElementsByTagName('button')

    console.log(listaBotones) // nos permitirá ver que listaBotones es una colección
    Array.from(listaBotones).forEach(function(boton){
        // convertimos la colección a un Array para poder iterar sobre el mismo con
        // el método forEach
        boton.addEventListener('click', function(){
            pizzasCompradas.push(boton.id)
            localStorage.setItem('carritoPizzas', JSON.stringify(pizzasCompradas))
        })
    })
}


function mostrarPizzasCarrito(){
    var pizzasCompradas = JSON.parse(localStorage.getItem('carritoPizzas')) || []

    pizzasCompradas.forEach(function(pizza){
        console.log (`la pizza ${pizza} está en el carrito `)
    })
}