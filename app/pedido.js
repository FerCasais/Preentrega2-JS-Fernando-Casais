// PRECIOS

let preciosCoca = {
    id: 1,
    product: " Gaseosa ",
    price: 400
};
let preciosCerveza = {
    id: 2,
    product: " Cerveza ",
    price: 500
};
let preciosCocktail = {
    id: 3,
    product: " Cocktail ",
    price: 800
};
let preciosPizza = {
    id: 4,
    product: " Pizza ",
    price: 1000
};
let preciosMilanesa = {
    id: 5,
    product: " Milanesa  ",
    price: 1100
};
let preciosPasta = {
    id: 6,
    product: " Pastas  ",
    price: 900
};
let preciosVolcan = {
    id: 7,
    product: " Volcán ",
    price: 700
};
let preciosTiramisu = {
    id: 8,
    product: " Tiramisú  ",
    price: 800
};
let preciosFlan = {
    id: 9,
    product: " Flan  ",
    price: 600
};






console.log(preciosCoca);

let precioCocaCola = preciosCoca.price // precio de la coca
let precioCerveza = preciosCerveza.price
let precioCocktail = preciosCocktail.price
let precioPizza = preciosPizza.price
let precioMilanesa = preciosMilanesa.price
let precioPasta = preciosPasta.price
let precioVolcan = preciosVolcan.price
let precioTiramisu = preciosTiramisu.price
let precioFlan = preciosFlan.price


console.log(precioCocaCola)
console.log(precioCerveza)
console.log(precioCocktail)
console.log(precioPizza)
console.log(precioMilanesa)
console.log(precioPasta)
console.log(precioVolcan)
console.log(precioTiramisu)
console.log(precioFlan)

///////


// CREADOR DE PEDIDO // 

let precioTotal = 0;
let count = 1;




let formularioPedidos = document.getElementById("formulario");
let cantidadCocas = document.getElementById("quantity1");
let cantidadCervezas = document.getElementById("quantity2");
let cantidadCocktails = document.getElementById("quantity3");
let cantidadPizzas = document.getElementById("quantity4");
let cantidadMilanesas = document.getElementById("quantity5");
let cantidadPastas = document.getElementById("quantity6");
let cantidadVolcan = document.getElementById("quantity7");
let cantidadTiramisu = document.getElementById("quantity8");
let cantidadFlan = document.getElementById("quantity9");

let pedidosTotales = [];

function validarForm(e) {
    e.preventDefault();



    let formulario = e.target

    console.log(formulario[0].value);
    console.log(formulario[1].value);
    console.log(formulario[2].value);
    console.log(formulario[3].value);
    console.log(formulario[4].value);
    console.log(formulario[5].value);
    console.log(formulario[6].value);
    console.log(formulario[7].value);
    console.log(formulario[8].value);

    
    let cantidadcoca = cantidadCocas.value; //cantidad de cocas que eligio
    let cantidadcerveza = cantidadCervezas.value;
    let cantidadcocktail = cantidadCocktails.value;
    let cantidadpizza = cantidadPizzas.value;
    let cantidadmilanesa = cantidadMilanesas.value;
    let cantidadpasta = cantidadPastas.value;
    let cantidadvolcan = cantidadVolcan.value;
    let cantidadtiramisu = cantidadTiramisu.value;
    let cantidadflan = cantidadFlan.value;

    

    let preciototalCocas = ((precioCocaCola) * (cantidadcoca));
    let preciototalCervezas = ((precioCerveza) * (cantidadcerveza));
    let preciototalCocktails = ((precioCocktail) * (cantidadcocktail));
    let preciototalPizzas = ((precioPizza) * (cantidadpizza));
    let preciototalMilanesas = ((precioMilanesa) * (cantidadmilanesa));
    let preciototalPastas = ((precioCocktail) * (cantidadpasta));
    let preciototalVolcan = ((precioVolcan) * (cantidadvolcan));
    let preciototalTiramisu = ((precioTiramisu) * (cantidadtiramisu));
    let preciototalFlan = ((precioFlan) * (cantidadflan));

    console.log(preciototalCocas)
    console.log(preciototalCervezas)
    console.log(preciototalCocktails)
    console.log(preciototalPizzas)
    console.log(preciototalMilanesas)
    console.log(preciototalPastas)
    console.log(preciototalVolcan)
    console.log(preciototalTiramisu)
    console.log(preciototalFlan)

    let productosPedidos = [preciototalCocas, preciototalCervezas, preciototalCocktails, preciototalPizzas, preciototalMilanesas, preciototalPastas, preciototalVolcan, preciototalTiramisu, preciototalFlan];

    console.log(productosPedidos)

    precioTotal = (preciototalCocas + preciototalCervezas + preciototalCocktails + preciototalPizzas + preciototalMilanesas + preciototalPastas + preciototalVolcan + preciototalTiramisu + preciototalFlan)
    console.log(precioTotal) //precioTotal

    let elPedido = [];

    if (cantidadcoca != 0 ) {
        let coca = cantidadcoca + preciosCoca.product;
        console.log(coca)
        elPedido.push(coca);
    }
    if (cantidadcerveza != 0) {
        let cerveza = cantidadcerveza + preciosCerveza.product;
        elPedido.push(cerveza);
    }
    if (cantidadcocktail != 0) {
        let cocktail = cantidadcocktail + preciosCocktail.product;
        console.log(cocktail)
        elPedido.push(cocktail);
    }
    if (cantidadpizza != 0) {
        let pizza = cantidadpizza + preciosPizza.product;
        elPedido.push(pizza);
    }
    if (cantidadmilanesa != 0) {
        let milanesa = cantidadmilanesa + preciosMilanesa.product;
        console.log(milanesa)
        elPedido.push(milanesa);
    }
    if (cantidadpasta != 0) {
        let pasta = cantidadpasta + preciosPasta.product;
        elPedido.push(pasta);
    }
    if (cantidadvolcan != 0) {
        let volcan = cantidadvolcan + preciosVolcan.product;
        elPedido.push(volcan);
    }
    if (cantidadtiramisu != 0) {
        let tiramisu = cantidadtiramisu + preciosTiramisu.product;
        console.log(tiramisu)
        elPedido.push(tiramisu);
    }
    if (cantidadflan != 0) {
        let flan = cantidadflan + preciosFlan.product;
        elPedido.push(flan);
    }

    console.log(elPedido)

    ///
    ///resumen del pedido de cada mesa
    
    
    localStorage.setItem('elPedido', elPedido);

    pedidosTotales.push(localStorage.getItem('elPedido'));


    console.log(pedidosTotales);

    localStorage.setItem('pedidosTotales', JSON.stringify(pedidosTotales));

   



    ///// mostrar el pedido elegido y esperar por confirmacion

    let mostrarNombre = document.getElementById("nombre");

    mostrarNombre.innerHTML = '<h2>' + sessionStorage.getItem('nombre') + '</h2>';


    let comprobarStorage = (localStorage.getItem('mesas'));
    console.log(comprobarStorage)

    if (comprobarStorage === null) {
        storageMesas = localStorage.setItem('mesas', 'retira take away');
    };

   
   

    let mostrarMesa = document.getElementById("mesa");
    mostrarMesa.innerHTML = '<h2>' + localStorage.getItem('mesas') + '</h2>';


    if (sessionStorage.getItem("nombre") != null) {
        let mostrarFacturacion = (document.getElementById('summary'));
        mostrarFacturacion.innerHTML = sessionStorage.getItem('nombre') + '<h4>Buena elección!!</h4>' + localStorage.getItem('mesas') + '<h1>' + elPedido + ' Total ' + ' $ ' + precioTotal + '</h1>';
    } else {
        let mostrarFacturacion = (document.getElementById('summary'));
        mostrarFacturacion.innerHTML = '<h4>Buena elección!!</h4>' + localStorage.getItem('mesas') + '<h1>' + elPedido + ' Total ' + ' $ ' + precioTotal + '</h1>';
    };
    sessionStorage.clear();
  


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
        text: "pedido confirmado",
        background: 'black',
        showConfirmButton: false

    })
};

