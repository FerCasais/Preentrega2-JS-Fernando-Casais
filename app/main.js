//bienvenida
let parrafo1 = document.getElementById('h3');
parrafo1.innerText = "Bienvenidos a La Dolce Vitta";
parrafo1.style.cssText = 'color: red; background-color: black; font-size: 22px; font-weight: bold; justifyContent: center; text-align: center';



let ingresoDeNombre = document.getElementById('nombre');

ingresoDeNombre.onkeyup = () => {


  parrafo1.innerText = 'Hoolaa ' + ingresoDeNombre.value + "\n" + "\n" + "\n" + "\n";
  console.log(ingresoDeNombre.value);
  sessionStorage.setItem('nombre', ingresoDeNombre.value);



  setTimeout(function () {
    Swal.fire({

      imageUrl: "../img/images.jpg",
      imageHeight: "312",
      title: 'Hoolaa ' + ingresoDeNombre.value,
      timer: 5500,
      text: " podrás aquí debajo ver nuestro Menú, sugerencia de tragos, elegir tu Mesa o Take away, realizar tu pedido (y además ... ver tu orden cuando la despachan en la cocina).  Disfrutá tu estadía!!",
      background: 'black',
      showConfirmButton: false,
      position: "center",
      showClass: {
        popup: 'animate__animated animate__fadeInDown',
        timer: 5500,
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'

      }
    })
  }, 1000)
};

// anime js libreria
var textWrapper = document.querySelector('.ml3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({
    loop: true
  })
  .add({
    targets: '.ml3 .letter',
    opacity: [0, 1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 750 * (i + 1)
  }).add({
    targets: '.ml3',
    opacity: 0,
    duration: 3000,
    easing: "easeOutExpo",
    delay: 3000
  });

var textWrapper2 = document.querySelector('.ml34');
textWrapper2.innerHTML = textWrapper2.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({
    loop: true
  })
  .add({
    targets: '.ml34 .letter',
    opacity: [0, 1],
    easing: "easeInOutQuad",
    duration: 4250,
    delay: (el, i) => 750 * (i + 1)
  }).add({
    targets: '.ml34',
    opacity: 0,
    duration: 3000,
    easing: "easeOutExpo",
    delay: 3000
  });






Swal.fire({

  imageUrl: "../img/images.jpg",
  imageHeight: "312",
  title: "Bienvenidos a La Dolce Vita! Ingresá tu nombre para comenzar el recorrido ",
  timer: 2500,

  background: 'black',
  showConfirmButton: false,
  position: "center",
  showClass: {
    popup: 'animate__animated animate__fadeInDown',
    timer: 2500,
  },
  hideClass: {
    popup: 'animate__animated animate__fadeOutUp'

  }
})


let arrayMesa = [];

////// mostrar mesas ocupadas
let mostarstorageMesas = localStorage.getItem('mesas');
console.log(mostarstorageMesas)
let agregar2 = document.getElementById('listadoMesasOcupadas');
agregar2.innerText = mostarstorageMesas;

let verMesa = document.getElementById("mesaOcupada");


verMesa.onclick = () => {

  Swal.fire({

    imageUrl: "../img/images.jpg",
    imageHeight: "312",
    title: "Mesas ocupadas",
    timer: 2500,
    text: mostarstorageMesas,

    background: 'black',
    showConfirmButton: false,
    position: "center",
    showClass: {
      popup: 'animate__animated animate__fadeInDown',
      timer: 2500,
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'

    }
  })
}

//// mostrar menú general

let listarMenu = document.getElementById("listadoMenu");
let menuGeneral = [preciosCoca, preciosCerveza, preciosCocktail, preciosPizza, preciosMilanesa, preciosPasta, preciosVolcan, preciosTiramisu, preciosFlan];
console.log(menuGeneral)


let mostrameElMenu = document.getElementById("listadoMenuGeneral");
for (const iterator of menuGeneral) {

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
pedidoPorMesas.innerHTML = "<li>" + mostarstorageMesas + " -- " + JSON.parse(localStorage.getItem("pedidosTotales")) + "</li>";


mostrameElPedidos = document.getElementById('pedidoMesa');


mostrameElPedidos.onclick = () => {

  Swal.fire({

    imageUrl: "../img/images.jpg",
    imageHeight: "312",
    title: "Pedido en curso",
    timer: 2500,
    text: mostarstorageMesas + " -- " + JSON.parse(localStorage.getItem("pedidosTotales")),

    background: 'black',
    showConfirmButton: false,
    position: "center",
    showClass: {
      popup: 'animate__animated animate__fadeInDown',
      timer: 2500,
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'

    }
  })
}

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
          verIngredientes.innerHTML = `<br><h5>ingredientes:</h5> ${post.strIngredient1} ${post.strIngredient2} ${post.strIngredient3} -- ${post.strInstructions}  `
        };


      })

    });

document.addEventListener("DOMContentLoaded", () => {
    mostrarMesas.forEach(element => {
      if (element.mesa === 1) {
        seleccionarMesa1.innerText = "Mesa 1 ocupada"
        document.getElementById("mesax1").style.backgroundColor = 'red';
      }
      if (element.mesa === 2) {
        seleccionarMesa2.innerText = "Mesa 2 ocupada"
        document.getElementById("mesax2").style.backgroundColor = 'red';
      }
      if (element.mesa === 3) {
        seleccionarMesa3.innerText = "Mesa 3 ocupada"
        document.getElementById("mesax3").style.backgroundColor = 'red';
      }
      if (element.mesa === 4) {
        seleccionarMesa4.innerText = "Mesa 4 ocupada"
        document.getElementById("mesax4").style.backgroundColor = 'red';
      }
      if (element.mesa === 5) {
        seleccionarMesa5.innerText = "Mesa 5 ocupada"
        document.getElementById("mesax5").style.backgroundColor = 'red';
      }
      if (element.mesa === 6) {
        seleccionarMesa6.innerText = "Mesa 6 ocupada"
        document.getElementById("mesax6").style.backgroundColor = 'red';
      }
      if (element.mesa === 7) {
        seleccionarMesa7.innerText = "Mesa 7 ocupada"
        document.getElementById("mesax7").style.backgroundColor = 'red';
      }
      if (element.mesa === 8) {
        seleccionarMesa8.innerText = "Mesa 8 ocupada"
        document.getElementById("mesax8").style.backgroundColor = 'red';
      }
      if (element.mesa === 9) {
        seleccionarMesa9.innerText = "Mesa 9 ocupada"
        document.getElementById("mesax9").style.backgroundColor = 'red';
      }
      if (element.mesa === 10) {
        seleccionarMesa10.innerText = "Mesa 10 ocupada"
        document.getElementById("mesax10").style.backgroundColor = 'red';
      }
      if (element.mesa === 11) {
        seleccionarMesa11.innerText = "Mesa 11 ocupada"
        document.getElementById("mesax11").style.backgroundColor = 'red';
      }
      if (element.mesa === 12) {
        seleccionarMesa12.innerText = "Mesa 12 ocupada"
        document.getElementById("mesax12").style.backgroundColor = 'red';
      }

    })


  }



);


let elegir = document.getElementById('elegir');
elegir.addEventListener('click', () => {

  Swal.fire({

    imageUrl: "../img/71-jmCIXT8L._SY445_.jpg",
    imageHeight: "312",
    title: "Menú Bebidas",
    timer: 6500,
    text: "Gaseosas $400 Cervezas $500  Cocktails $800",

    background: 'black',
    showConfirmButton: false,
    position: "bottom-right",
    showClass: {
      popup: 'animate__animated animate__fadeInDown',
      timer: 6500,
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'

    }
  });

  setTimeout(function () {
    Swal.fire({

      imageUrl: "../img/4b1ac291564ddbf86ec2b4a947de407e428dd783824038d9436cf00f6b0db827._RI_V_TTW_.jpg",
      imageHeight: "312",
      title: "Menú Postres",
      timer: 3500,
      text: "Volcan $700 Tiramisu $800  Flan $600",

      background: 'black',
      showConfirmButton: false,
      position: "bottom-left",
      showClass: {
        popup: 'animate__animated animate__fadeInDown',
        timer: 3500,
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'

      }
    })
  }, 9000)




  setTimeout(function () {
    Swal.fire({

      imageUrl: "../img/images (1).jpg",
      imageHeight: "312",
      title: "Menú Comidas",
      timer: 6500,
      text: "Pizzas $1000 Milanesas $1100  Pastas $900",

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
  }, 5000)


});


