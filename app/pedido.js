// PRECIOS

let preciosCoca = [1, "coca", 300];
let preciosCerveza = [2, "cerveza", 500];
let preciosCocktail = [3, "cocktail", 800];
let preciosPizza = [4, "pizza", 1100];
let preciosMilanesa = [5, "milanesa", 1300];
let preciosPasta = [6, "pastas", 900];

const productos = [
    {
        id:1,
        nombre: 'coca',
        precio: 300
    },
    {
        id:2,
        nombre: 'cerveza',
        precio: 500
    },
    {
        id:3,
        nombre: 'cocktail',
        precio: 800
    }
]

let precios = preciosCoca.concat(preciosCerveza, preciosCocktail, preciosPizza, preciosMilanesa, preciosPasta);

console.log(precios)

// pasar como argumento productos de stringify
localStorage.setItem('listaDePrecios', JSON.stringify(productos));

let precioCocaCola = (precios[2]) // precio de la coca
let precioCerveza = (precios[5]) // precio de la cerveza
let precioCocktail = (precios[8]) // precio de la cocktail
let precioPizza = (precios[11]) // precio de la pizza
let precioMilanesa = (precios[14]) // precio de la milanesa
let precioPasta = (precios[17]) // precio de la pastas

///////


// CREADOR DE PEDIDO

let precioTotal = 0;

let formularioPedidos = document.getElementById("formulario");
formularioPedidos.addEventListener("submit", validarForm);

function validarForm(e) {
    e.preventDefault();
    let formulario = e.target

    console.log(formulario.children)
    console.log(formulario.children[0].value)
    console.log(formulario.children[1].value)
    console.log(formulario.children[2].value)
    console.log(formulario.children[3].value)
    console.log(formulario.children[4].value)
    console.log(formulario.children[5].value)
    console.log(formulario.children[6].value)
    console.log(formulario.children[7].value)
    console.log(formulario.children[8].value)
    console.log(formulario.children[9].value)
    console.log(formulario.children[10].value)
    console.log(formulario.children[11].value)


    let cantidadCocas = (formulario.children[1].value) // cantidad de cocas que eligio
    let cantidadCervezas = (formulario.children[3].value) // cantidad de cerveza que eligio
    let cantidadCocktails = (formulario.children[5].value) // cantidad de cockstails que eligio
    let cantidadPizzas = (formulario.children[7].value) // cantidad de pizzas que eligio
    let cantidadMilanesas = (formulario.children[9].value) // cantidad de milanas que eligio
    let cantidadPastas = (formulario.children[11].value) // cantidad de pastas que eligio


    let preciototalCocas = ((precioCocaCola) * (cantidadCocas));
    let preciototalCervezas = ((precioCerveza) * (cantidadCervezas));
    let preciototalCocktails = ((precioCocktail) * (cantidadCocktails));
    let preciototalPizzas = ((precioPizza) * (cantidadPizzas));
    let preciototalMilanesas = ((precioMilanesa) * (cantidadMilanesas));
    let preciototalPastas = ((precioPasta) * (cantidadPastas));

    console.log(preciototalCocas, preciototalCervezas, preciototalCocktails, preciototalPizzas, preciototalMilanesas, preciototalPastas)

    precioTotal = (preciototalCocas + preciototalCervezas + preciototalCocktails + preciototalPizzas + preciototalMilanesas + preciototalPastas)
    console.log(precioTotal)


    if ((formulario.children[1].value) != (0)) {
        preciosCoca.shift();
        preciosCoca.unshift(formulario.children[1].value);

        console.log(preciosCoca)

       localStorage.setItem('preciosCoca', preciosCoca);
        
    }

    if ((formulario.children[3].value) != (0)) {
        preciosCerveza.shift();
        preciosCerveza.unshift(formulario.children[3].value);

        console.log(preciosCerveza)
       
    }

    if ((formulario.children[5].value) != (0)) {
        preciosCocktail.shift();
        preciosCocktail.unshift(formulario.children[5].value);

        console.log(preciosCocktail)
      
    }

    if ((formulario.children[7].value) != (0)) {
        preciosPizza.shift();
        preciosPizza.unshift(formulario.children[7].value);

        console.log(preciosPizza)
       
    }

    if ((formulario.children[9].value) != (0)) {
        preciosMilanesa.shift();
        preciosMilanesa.unshift(formulario.children[9].value);

        console.log(preciosMilanesa)
       
    }

    if ((formulario.children[11].value) != (0)) {
        preciosPasta.shift();
        preciosPasta.unshift(formulario.children[11].value);

        console.log(preciosPasta)
      
    } 


///resumen del pedido de cada mesa
    let pedidoPorMesa = [];
    pedidoPorMesa.push(preciosCerveza, preciosCoca, preciosCocktail, preciosPizza, preciosPasta, preciosMilanesa);
    console.log(pedidoPorMesa);
   const resultadoPedidoPorMesa = pedidoPorMesa.filter(orden => typeof orden[0] == "string");
   console.log(resultadoPedidoPorMesa);
   localStorage.setItem("pedidoPorMesa", resultadoPedidoPorMesa);
   let resultadoPorMesa = [];
   resultadoPorMesa.push(localStorage.getItem("pedidoPorMesa"));
   console.log(resultadoPorMesa);

   let pedidoPorCadaMesa = document.getElementById("listadoPedidosPorMesas");
   pedidoPorCadaMesa.innerText =  resultadoPorMesa ; //// arreglar aca
/////

   

   
    

    let mostrarNombre = document.getElementById("nombre");
    mostrarNombre.innerHTML = '<h2>' + sessionStorage.getItem('nombre') + '</h2>';

    let mostrarMesa = document.getElementById("mesa");
    mostrarMesa.innerHTML = '<h2>' + localStorage.getItem('mesas') + '</h2>';

     let mostrarFacturacion = (document.getElementsByTagName('h3')[0])
        mostrarFacturacion.innerHTML = '<h4>Buena elección!!</h4>' + resultadoPedidoPorMesa + '<h1>' + 'Precio total $ ' + precioTotal + '</h1>';

     ////
  

    let facturacionTotal = [];
    facturacionTotal.push(precioTotal);
    console.log(facturacionTotal);

    let pedidosTotales = [];
    pedidosTotales.push(pedidoPorMesa);
    console.log(pedidosTotales);
}




let confirmacion = document.getElementById('confirmacion');
confirmacion.onclick = function (e) {
    alert('confirmado')
    confirmacion.innerHTML = "<p>facturar"  + "</p>";
    confirmacion.style.cssText = "display: inline-block; color: black; font-size: 30px; font-weight: bold; background-color: red; border-radius:2x; padding: 0.5em 0em 0em";
}


//let agregar1 = document.getElementById('listadoMenu');
//agregar1.innerHTML = "ver listado general de Menu" + mostrarMenu ;