//bienvenida
let parrafo1 = document.getElementById('h3');
parrafo1.innerText = "Bienvenidos a La Dolce Vitta";
parrafo1.style.cssText = 'color: red; background-color: black; font-size: 22px; font-weight: bold; justifyContent: center; text-align: center';

let ingresoDeNombre = document.getElementById('nombre');

ingresoDeNombre.onkeyup = () => {
      parrafo1.innerText = 'Hoolaa ' + ingresoDeNombre.value + "\n" + "\n" + "\n" + "\n" + "\n" + " podrás aquí debajo ver nuestro Menú, elegir tu Mesa y realizar un pedido. Disfrutá tu estadía!!" + "\n" + "\n" + "\n" + "\n";
      console.log(ingresoDeNombre.value);
      sessionStorage.setItem('nombre', ingresoDeNombre.value);

}

////// mostrar mesas ocupadas
let mostarstorageMesas = localStorage.getItem('mesas');
console.log(mostarstorageMesas)
let agregar2 = document.getElementById('listadoMesasOcupadas');
agregar2.innerText = mostarstorageMesas;
/////

//// mostrar menú general

let listarMenu = document.getElementById("listadoMenu");
listarMenu.innerHTML = "<li>" + preciosCoca.join('') + "</li>" + "<li>" + preciosCerveza.join('') + "</li>" + "<li>" + preciosCocktail.join('') + "</li>" + "<li>" + preciosPizza.join('') + "</li>" + "<li>" + preciosMilanesa.join('') + "</li>" + "<li>" + preciosPasta.join('') + "</li>";

//////
//mostrar pedido por mesa

let elPedido = [];
elPedido.push(localStorage.getItem("pedidoPorMesa"));

localStorage.setItem("elPedido", elPedido);
localStorage.getItem("elPedido");

let averahora = document.getElementById("pedidosPorMesas");
averahora.innerHTML = "<li>" + JSON.parse(localStorage.getItem("pedidosTotales")) + "</li>";

document.addEventListener('DOMContentLoaded', () => {

      localStorage.getItem("pedidosTotales");

});