//bienvenida
let parrafo1 = document. getElementById('h3');
parrafo1.innerText = "Bienvenidos a La Dolce Vitta";
parrafo1.style.cssText = 'color: red; background-color: black; font-size: 22px; font-weight: bold; justifyContent: center; text-align: center';

let ingresoDeNombre = document.getElementById('nombre');
  
ingresoDeNombre.onkeyup= () =>{
parrafo1.innerText = 'Hoolaa ' + ingresoDeNombre.value + "\n" + "\n" + "\n" + "\n" + "\n" + " te muestro un breve tour del sitio" + "\n" + "\n" + "\n" + "\n"; 
  console.log(ingresoDeNombre.value);
  sessionStorage.setItem('nombre', ingresoDeNombre.value);
 
} 

////// mostrar mesas ocupadas
      let mostarstorageMesas = localStorage.getItem('mesas');
      console.log(mostarstorageMesas)
      let agregar2 = document.getElementById('listadoMesasOcupadas');
      agregar2.innerText =  mostarstorageMesas;
/////

//// mostrar menú general
      let agragando = document.getElementById('listadoMenu');
      agragando.innerHTML = "<ul>" + (JSON.parse(localStorage.getItem('listaDePrecios'))); + "</ul>";
     
//////
