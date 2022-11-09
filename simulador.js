
//SIMULADOR DE UNA TERMINAL DE PEDIDO DE COMIDAS

//ESTO SERIA CONSTRUCTOR PARA ARMAR LOS PRECIOS 

let precio = 0
let id = 0


class Bebidas {
  constructor(id, bebida, precio) {
    this.id = id;
    this.bebida = bebida;
    this.precio = precio;
   }

}
const preciosBebidas1 = new Bebidas(1, 'coca', 300);
const preciosBebidas2 = new Bebidas(2, 'cerveza', 500);
const preciosBebidas3 = new Bebidas(3, 'cocktail', 800);

const bebidas = ['BEBIDAS'];
bebidas.push(preciosBebidas1, preciosBebidas2, preciosBebidas3);

const agregado = (preciosBebidas1.precio, preciosBebidas2.precio, preciosBebidas3.precio, preciosBebidas1.id, preciosBebidas2.id, preciosBebidas3.id);

//console.log(preciosBebidas1);

//console.log(preciosBebidas2);

//console.log(preciosBebidas3);

console.log(bebidas);


//BIENVENIDA PEDIR NOMBRE Y OFRECER CARTA

  
  


let nombre = prompt('Bienvenidos. Favor decinos tu nombre?');
alert('hola ' + nombre + '!!');
let confirmacionVerCarta = confirm('deseas ver nuestra carta?');

//ESTO SERIA MOSTRAR LA CARTA
const cartaMenu = ['BEBIDAS', 'id 1 Coca', 'id 2 Cerveza', 'id 3 Cocktail'];

console.log(cartaMenu)

console.log(cartaMenu.join('\n'))

let mostrarCarta = cartaMenu.join('\n');

if (confirmacionVerCarta == (true)) {
alert(mostrarCarta);
} else {alert('gracias por su visita!')}

let seleccionarMesa = 0;

// SELECCIONAR MESAS DISPONIBLES
while(!seleccionarMesa || seleccionarMesa === 0 || seleccionarMesa > 12){
seleccionarMesa = prompt('Seleccionar mesa disponible');}

const mesasYNombres = [];
mesasYNombres.push(nombre, seleccionarMesa);
alert(nombre + ' ha seleccionado la mesa ' + seleccionarMesa);

console.log(mesasYNombres)



let mesas = 0;
let totalMesas = ["mesa 1 libre", "mesa 2 libre", "mesa 3 libre", "mesa 4 libre", "mesa 5 libre", "mesa 6 libre", "mesa 7 libre", "mesa 8 libre", "mesa 9 libre", "mesa 10 libre", "mesa 11 libre", "mesa 12 libre" ];
let mesasOcupadas = [];//ARRAY DE MESAS OCUPADAS

statusMesas = '';

switch (seleccionarMesa) {
  case ("1"):
    console.log('mesa 1 ocupada');
    statusMesas = 'mesa 1 ocupada';
    totalMesas.push(statusMesas);
    mesasOcupadas.push(statusMesas);
    totalMesas.splice(0, 1);
    
    break;

    case ("2"):
    console.log('mesa 2 ocupada');
    statusMesas = 'mesa 2 ocupada';
    totalMesas.push(statusMesas);
    mesasOcupadas.push(statusMesas);
    totalMesas.splice(1, 1);
    
    break;

    case ("3"):
    console.log('mesa 3 ocupada');
    statusMesas = 'mesa 3 ocupada';
    totalMesas.push(statusMesas);
    mesasOcupadas.push(statusMesas);
    totalMesas.splice(2, 1);
    
    break;

    case ("4"):
    console.log('mesa 4 ocupada');
    statusMesas = 'mesa 4 ocupada';
    totalMesas.push(statusMesas);
    mesasOcupadas.push(statusMesas);
    totalMesas.splice(3, 1);
    
    break;

    case ("5"):
    console.log('mesa 5 ocupada');
    statusMesas = 'mesa 5 ocupada';
    totalMesas.push(statusMesas);
    mesasOcupadas.push(statusMesas);
    totalMesas.splice(4, 1);
    
    break;

    case ("6"):
    console.log('mesa 6 ocupada');
    statusMesas = 'mesa 6 ocupada';
    totalMesas.push(statusMesas);
    mesasOcupadas.push(statusMesas);
    totalMesas.splice(5, 1);
    
    break;

    case ("7"):
      console.log('mesa 7 ocupada');
      statusMesas = 'mesa 7 ocupada';
      totalMesas.push(statusMesas);
      mesasOcupadas.push(statusMesas);
      totalMesas.splice(6, 1);
      
      break;
  
      case ("8"):
      console.log('mesa 8 ocupada');
      statusMesas = 'mesa 8 ocupada';
      totalMesas.push(statusMesas);
      mesasOcupadas.push(statusMesas);
      totalMesas.splice(7, 1);
      
      break;
  
      case ("9"):
      console.log('mesa 9 ocupada');
      statusMesas = 'mesa 9 ocupada';
      totalMesas.push(statusMesas);
      mesasOcupadas.push(statusMesas);
      totalMesas.splice(8, 1);
      
      break;
  
      case ("10"):
      console.log('mesa 10 ocupada');
      statusMesas = 'mesa 10 ocupada';
      totalMesas.push(statusMesas);
      mesasOcupadas.push(statusMesas);
      totalMesas.splice(9, 1);
      
      break;
  
      case ("11"):
      console.log('mesa 11 ocupada');
      statusMesas = 'mesa 11 ocupada';
      totalMesas.push(statusMesas);
      mesasOcupadas.push(statusMesas);
      totalMesas.splice(10, 1);
      
      break;
  
      case ("12"):
      console.log('mesa 12 ocupada');
      statusMesas = 'mesa 12 ocupada';
      totalMesas.push(statusMesas);
      mesasOcupadas.push(statusMesas);
      totalMesas.splice(11, 1);
      
      break;

  default:
    break;
}


totalMesas.sort((a,b) => a-b);

console.log('estado de las mesas ' + totalMesas) //LISTADO DE TODAS LAS MESAS. LIBRES PRIMERO Y OCUPADAS DESPUES
console.log('mesas ocupadas: ' + mesasOcupadas) //LISTADO DE TODAS LAS MESAS OCUPADAS 

// ESTO SERIA  EL ARRAY DE LOS PEDIDOS 

const pedidos = [];

let bebida = '';
let cantidad = 0;
let resumenPedido = '';
let items = 0;
const cantidadId = [];
cantidades = 3;


while(!items || items === 0 || items > 3){
items = prompt('seleccione el id de su bebida')}
while(!cantidad || cantidad === 0 ){
cantidad = Number(prompt('ingrese la cantidad'))}


class Pedido {
  constructor(seleccionarMesa, id, cantidad) {
    this.seleccionarMesa = seleccionarMesa;
    this.id = id;
    this.cantidad = cantidad;
   
  }
}
//ESTO SERIA la fcturaccion de los pedidos
const pedido1 = new Pedido(seleccionarMesa, id, cantidad);
const pedido2 = new Pedido(seleccionarMesa, id, cantidad);
const pedido3 = new Pedido(seleccionarMesa, id, cantidad);

switch (items) {
  case "1":
     resumenPedido = Object.assign(pedido1, preciosBebidas1);
    break;

    case "2":
     resumenPedido = Object.assign(pedido1, preciosBebidas2);
    break;

    case "3":
     resumenPedido = Object.assign(pedido1, preciosBebidas3);
    break;

  default:
    alert("ingrese un id valido por favor");
    break;
}
 
pedidos.push(resumenPedido);

console.log(resumenPedido);

const facturacionMesa = pedidos.reduce((acc, items) => acc + items.cantidad*items.precio, 0);
console.log('la facturacion de la mesa ' + seleccionarMesa + ' es de $' + facturacionMesa);

alert("Mesa Nro " + seleccionarMesa + " facturar: " + "$" + facturacionMesa);

confirmacion = confirm("desea confirmar este pedido?");

if (confirmacion) {
  console.log("Mesa Nro " + seleccionarMesa + " pedido confirmado. " + (new Date()));
  alert("su pedido se está procesando,\n gracias por su visita!!");
} else {
  alert("que tenga un buen día!!");
}

const totalFacturacion = []; 
totalFacturacion.push(facturacionMesa);

console.log(pedidos);
console.log(totalFacturacion);


