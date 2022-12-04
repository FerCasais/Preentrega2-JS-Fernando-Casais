//bienvenida
let parrafo1 = document.getElementById('h3');
parrafo1.innerText = "Bienvenidos a La Dolce Vitta";
parrafo1.style.cssText = 'color: red; background-color: black; font-size: 22px; font-weight: bold; justifyContent: center; text-align: center';

let ingresoDeNombre = document.getElementById('nombre');

ingresoDeNombre.onkeyup = () => {
      parrafo1.innerText = 'Hoolaa ' + ingresoDeNombre.value +  "\n" + "\n" + "\n" + "\n";
      console.log(ingresoDeNombre.value);
      sessionStorage.setItem('nombre', ingresoDeNombre.value);

     

   Swal.fire({
 
      imageUrl: "../img/images.jpg",
         imageHeight: "312",
         title: 'Hoolaa ' + ingresoDeNombre.value,
         timer: 6500,
        text: " podrás aquí debajo ver nuestro Menú, sugerencia de tragos, elegir tu Mesa, realizar tu pedido (y además ... ver tu orden cuando la despachan en la cocina).  Disfrutá tu estadía!!",
         background: 'black',
         showConfirmButton: false,
         position: "center",
      showClass: {
        popup: 'animate__animated animate__fadeInDown',
        timer: 6500,
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
    
      }
    })
};

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml3 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 750 * (i+1)
  }).add({
    targets: '.ml3',
    opacity: 0,
    duration: 3000,
    easing: "easeOutExpo",
    delay: 3000
  });

  var textWrapper2 = document.querySelector('.ml34');
textWrapper2.innerHTML = textWrapper2.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml34 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 4250,
    delay: (el, i) => 750 * (i+1)
  }).add({
    targets: '.ml34',
    opacity: 0,
    duration: 3000,
    easing: "easeOutExpo",
    delay: 3000
  });

 


window.onload = () => {

Swal.fire({
 
  imageUrl: "../img/images.jpg",
     imageHeight: "312",
     title: "Bienvenidos a La Dolce Vita! Ingresá tu nombre para comenzar el recorrido ",
     timer: 4500,
    
     background: 'black',
     showConfirmButton: false,
     position: "center",
  showClass: {
    popup: 'animate__animated animate__fadeInDown',
    timer: 4500,
  },
  hideClass: {
    popup: 'animate__animated animate__fadeOutUp'

  }
})
}
 



////// mostrar mesas ocupadas
let mostarstorageMesas = localStorage.getItem('mesas');
console.log(mostarstorageMesas)
let agregar2 = document.getElementById('listadoMesasOcupadas');
agregar2.innerText = mostarstorageMesas;

let verMesa = document.getElementById("mesaOcupada");

verMesa.onclick = function (e) {

      swal.fire({

      timer: 3500,
       imageUrl: "../img/images.jpg",
       imageHeight: "312",
       text: mostarstorageMesas,
       background: 'black',
       showConfirmButton: false
    
   });

}

//// mostrar menú general

let listarMenu = document.getElementById("listadoMenu");
let menuGeneral = [preciosCoca, preciosCerveza, preciosCocktail, preciosPizza, preciosMilanesa, preciosPasta];
console.log(menuGeneral)

for (const iterator of  menuGeneral ) {

      let li = document.createElement('li');
      li.innerHTML = iterator.product + ' $ ' + iterator.price;
      listarMenu.appendChild(li);
           
      };
 
//////
//mostrar pedido por mesa

let elPedido = [];
elPedido.push(localStorage.getItem("pedidoPorMesa"));

localStorage.setItem("elPedido", elPedido);
localStorage.getItem("elPedido");

let pedidoPorMesas = document.getElementById("pedidosPorMesas");
pedidoPorMesas.innerHTML = "<li>" + mostarstorageMesas + " " + JSON.parse(localStorage.getItem("pedidosTotales")) + "</li>";

document.addEventListener('DOMContentLoaded', () => {

      localStorage.getItem("pedidosTotales");

});

mostrameElPedidos = document.getElementById('pedidoMesa');
mostrameElPedidos.addEventListener('click', () => {
      
      swal.fire({

            timer: 3500,
             imageUrl: "../img/images.jpg",
             imageHeight: "312",
             text: mostarstorageMesas + " " + JSON.parse(localStorage.getItem("pedidosTotales")),
             background: 'black',
             showConfirmButton: false
    
         });
     
      });

      //// hasta aca pedidos por mesa

const lista = document.querySelector('#fetch')

fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
  .then((response) => response.json())
  .then((data) => 

 {
    data.drinks.forEach(post => {
        const li = document.createElement('li')
        li.innerHTML = `
           <h4 id="btnn">Nuestra sugerencia de tragos para vos </h4><h5> ${post.strDrink} <br><span id="ver-ingredientes"><br><button>click para ver los ingredientes</button></span></h5> `
       
     
        lista.appendChild(li);


        let img = document.createElement('img');
        img.src = post.strDrinkThumb;
        img.innerHTML = `
        ${post.strDrinkThumb}  `

       
     
        lista.appendChild(img);

        let verIngredientes = document.getElementById('ver-ingredientes');

        verIngredientes.onclick = function (e) {
            verIngredientes.innerHTML = `<br><h5>ingredientes:</h5> ${post.strIngredient1} ${post.strIngredient2} ${post.strIngredient3} -- ${post.strInstructions}  `};

            
        })
    
});


  
 
