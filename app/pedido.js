// PRECIOS

let preciosCoca = {
    id: 1,
    product: " coca ",
    price: 300
};
let preciosCerveza = {
    id: 2,
    product: " cerveza ",
    price: 500
};
let preciosCocktail = {
    id: 3,
    product: " cocktail ",
    price: 800
};
let preciosPizza = {
    id: 4,
    product: " pizza ",
    price: 1000
};
let preciosMilanesa = {
    id: 5,
    product: " milanesa ",
    price: 1100
};
let preciosPasta = {
    id: 6,
    product: " pasta ",
    price: 900
};






console.log(preciosCoca);

let precioCocaCola = preciosCoca.price // precio de la coca
let precioCerveza = preciosCerveza.price
let precioCocktail = preciosCocktail.price
let precioPizza = preciosPizza.price
let precioMilanesa = preciosMilanesa.price
let precioPasta = preciosPasta.price


console.log(precioCocaCola)
console.log(precioCerveza)
console.log(precioCocktail)
console.log(precioPizza)
console.log(precioMilanesa)
console.log(precioPasta)

///////


// CREADOR DE PEDIDO // 

let precioTotal = 0;





let formularioPedidos = document.getElementById("formulario");
let cantidadCocas = document.getElementById("quantity1");
let cantidadCervezas = document.getElementById("quantity2");
let cantidadCocktails = document.getElementById("quantity3");
let cantidadPizzas = document.getElementById("quantity4");
let cantidadMilanesas = document.getElementById("quantity5");
let cantidadPastas = document.getElementById("quantity6");

function validarForm(e) {
    e.preventDefault();

    let formulario = e.target
    
    console.log(formulario[0].value);
    console.log(formulario[1].value);
    console.log(formulario[2].value);
    console.log(formulario[3].value);
    console.log(formulario[4].value);
    console.log(formulario[5].value);

    let cantidadcoca = cantidadCocas.value; //cantidad de cocas que eligio
    let cantidadcerveza = cantidadCervezas.value;
    let cantidadcocktail = cantidadCocktails.value;
    let cantidadpizza = cantidadPizzas.value;
    let cantidadmilanesa = cantidadMilanesas.value;
    let cantidadpasta = cantidadPastas.value;

    let preciototalCocas = ((precioCocaCola) * (cantidadcoca));
    let preciototalCervezas = ((precioCerveza) * (cantidadcerveza));
    let preciototalCocktails = ((precioCocktail) * (cantidadcocktail));
    let preciototalPizzas = ((precioPizza) * (cantidadpizza));
    let preciototalMilanesas = ((precioMilanesa) * (cantidadmilanesa));
    let preciototalPastas = ((precioCocktail) * (cantidadpasta));

    console.log(preciototalCocas)
    console.log(preciototalCervezas)
    console.log(preciototalCocktails)
    console.log(preciototalPizzas)
    console.log(preciototalMilanesas)
    console.log(preciototalPastas)

    let productosPedidos = [preciototalCocas, preciototalCervezas, preciototalCocktails, preciototalPizzas, preciototalMilanesas, preciototalPastas];

    console.log(productosPedidos)



    precioTotal = (preciototalCocas + preciototalCervezas + preciototalCocktails + preciototalPizzas + preciototalMilanesas + preciototalPastas)
    console.log(precioTotal) //precioTotal

    let elPedido = [];

    if (cantidadcoca != 0) {
        let coca = cantidadcoca + preciosCoca.product;
        console.log(coca)
        elPedido.push(coca);
    } if (cantidadcerveza != 0) {
        let cerveza = cantidadcerveza + preciosCerveza.product;
        elPedido.push(cerveza);
    }  if (cantidadcocktail != 0) {
        let cocktail = cantidadcocktail + preciosCocktail.product;
        console.log(cocktail)
        elPedido.push(cocktail);
    } if (cantidadpizza != 0) {
        let pizza = cantidadpizza + preciosPizza.product;
        elPedido.push(pizza);
    }  if (cantidadmilanesa != 0) {
        let milanesa = cantidadmilanesa + preciosMilanesa.product;
        console.log(milanesa)
        elPedido.push(milanesa);
    } if (cantidadpasta != 0) {
        let pasta = cantidadpasta + preciosPasta.product;
        elPedido.push(pasta);
    }

    console.log(elPedido)

    localStorage.setItem('elPedido', elPedido);

    

        ///resumen del pedido de cada mesa
 

        let pedidosTotales = [];
        pedidosTotales.push(localStorage.getItem('elPedido'));
        pedidosTotales.concat(localStorage.getItem('elPedido')) + ' ' + localStorage.getItem('elPedido');
        console.log(pedidosTotales);

        localStorage.setItem('pedidosTotales', JSON.stringify(pedidosTotales));

        ///// mostrar el pedido elegido y esperar por confirmacion

        let mostrarNombre = document.getElementById("nombre");
        mostrarNombre.innerHTML = '<h2>' + sessionStorage.getItem('nombre') + '</h2>';

        let mostrarMesa = document.getElementById("mesa");
        mostrarMesa.innerHTML = '<h2>' + localStorage.getItem('mesas') +  '</h2>' ;
        
       // const resultadoPedidoPorMesa = productos.find(formulario.value != 0);
        //console.log(resultadoPedidoPorMesa);
        //localStorage.setItem("pedidoPorMesa", resultadoPedidoPorMesa);
    

    let mostrarFacturacion = (document.getElementById('summary'));
    mostrarFacturacion.innerHTML = '<h4>Buena elección!!</h4>'+ sessionStorage.getItem('nombre') + localStorage.getItem('mesas')+'<h1>'  + elPedido  + ' Total ' + ' $ '   + precioTotal + '</h1>';


let pedidoConfirmado = document.getElementById('h3');
pedidoConfirmado.innerHTML = '<h2>' + elPedido + '</h2>';

    formularioPedidos.reset();

};

formularioPedidos.addEventListener("submit", validarForm);

// una vez que se confirma el pedido va a la cocina a la espera de ser despachado (se puede ver en la seccion de la cocina)
let confirmacion = document.getElementById('confirmacion');
confirmacion.onclick = function (e) {
    confirmacion.innerHTML = "<p>facturar</p>";
    confirmacion.style.cssText = "display: center; color: black; font-size: 30px; font-weight: bold; background-color: red; border-radius:2x; padding: 0.5em 0em 0em; text-align: center";

    swal.fire({
        timer: 2000,
        imageUrl: "../img/imagesaa.jpg",
        imageHeight: "312",
        text: "pedido confirmado" ,
       background: 'black',
        showConfirmButton: false
       
    });
}


 


