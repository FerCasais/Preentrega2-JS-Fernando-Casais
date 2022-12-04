//// ELEGIR MESAS 

let arrayMesas = [];

let seleccionarMesa1 = document.getElementById("mesa1");
seleccionarMesa1.addEventListener("click", actualizar1);
function actualizar1(){    
    seleccionarMesa1.innerText = ("Mesa 1 ocupada")
    document.getElementById("mesax1").style.backgroundColor = 'red';
    seleccionarMesa1.style.borderColor = 'blue';
    arrayMesas.push(seleccionarMesa1.innerText);
    let storageMesas = localStorage.setItem('mesas', arrayMesas);
   
        
   
  /////
}
let seleccionarMesa2 = document.getElementById("mesa2")
seleccionarMesa2.addEventListener("click", actualizar2) 
function actualizar2(){     
    seleccionarMesa2.innerText = "Mesa 2 ocupada"
    document.getElementById("mesax2").style.backgroundColor = 'red';
    seleccionarMesa2.style.borderColor = 'blue';
    arrayMesas.push(seleccionarMesa2.innerText);
    storageMesas = localStorage.setItem('mesas', arrayMesas);
}
let seleccionarMesa3 = document.getElementById("mesa3")
seleccionarMesa3.addEventListener("click", actualizar3) 
function actualizar3(){     
    seleccionarMesa3.innerText = "Mesa 3 ocupada"
    document.getElementById("mesax3").style.backgroundColor = 'red';
    seleccionarMesa3.style.borderColor = 'blue';
    arrayMesas.push(seleccionarMesa3.innerText);
    storageMesas = localStorage.setItem('mesas', arrayMesas);
}
let seleccionarMesa4 = document.getElementById("mesa4");
seleccionarMesa4.addEventListener("click", actualizar4);
function actualizar4(){     
   seleccionarMesa4.innerText = ("Mesa 4 ocupada")
    document.getElementById("mesax4").style.backgroundColor = 'red';
    seleccionarMesa4.style.borderColor = 'blue';
    arrayMesas.push(seleccionarMesa4.innerText);
    storageMesas = localStorage.setItem('mesas', arrayMesas);
}
let seleccionarMesa5 = document.getElementById("mesa5")
seleccionarMesa5.addEventListener("click", actualizar5) 
function actualizar5(){     
    seleccionarMesa5.innerText = "Mesa 5 ocupada"
    document.getElementById("mesax5").style.backgroundColor = 'red';
    seleccionarMesa5.style.borderColor = 'blue';
    arrayMesas.push(seleccionarMesa5.innerText);
    storageMesas = localStorage.setItem('mesas', arrayMesas);
};
let seleccionarMesa6 = document.getElementById("mesa6")
seleccionarMesa6.addEventListener("click", actualizar6) 
function actualizar6(){     
    seleccionarMesa6.innerText = "Mesa 6 ocupada"
    document.getElementById("mesax6").style.backgroundColor = 'red';
    seleccionarMesa6.style.borderColor = 'blue';
    arrayMesas.push(seleccionarMesa6.innerText);
    storageMesas = localStorage.setItem('mesas', arrayMesas);
    
};
/////// HASTA ACA ELEGIR MESAS (por ahora hice solo 6 por si lo cambio por menos código)






