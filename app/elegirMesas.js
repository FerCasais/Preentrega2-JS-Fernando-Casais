//// ELEGIR MESAS 

let mesa1 = {
    mesa: 1,
    estado: 'libre'
}
let mesa2 = {
    mesa: 2,
    estado: 'libre'
}
let mesa3 = {
    mesa: 3,
    estado: 'libre'
}
let mesa4 = {
    mesa: 4,
    estado: 'libre'
}
let mesa5 = {
    mesa: 5,
    estado: 'libre'
}
let mesa6 = {
    mesa: 6,
    estado: 'libre'
}
let mesa7 = {
    mesa: 7,
    estado: 'libre'
}
let mesa8 = {
    mesa: 8,
    estado: 'libre'
}
let mesa9 = {
    mesa: 9,
    estado: 'libre'
}
let mesa10 = {
    mesa: 10,
    estado: 'libre'
}
let mesa11 = {
    mesa: 11,
    estado: 'libre'
}
let mesa12 = {
    mesa: 12,
    estado: 'libre'
}

let totalMesas = [];
let arrayMesas = [];


let seleccionarMesa1 = document.getElementById("mesax1");
seleccionarMesa1.addEventListener("click", actualizar1);

function actualizar1() {
    seleccionarMesa1.innerText = (" mesa 1 ");
    document.getElementById("mesax1").style.backgroundColor = 'red';
    totalMesas.push({
        mesa: 1,
        estado: 'ocupada'
    });
    console.log(totalMesas);
    localStorage.setItem("key", JSON.stringify(totalMesas));
    arrayMesas.push(seleccionarMesa1.innerText);
    storageMesas = localStorage.setItem('mesas', arrayMesas);
};

let seleccionarMesa2 = document.getElementById("mesax2")
seleccionarMesa2.addEventListener("click", actualizar2)

function actualizar2() {
    seleccionarMesa2.innerText = " mesa 2 "
    document.getElementById("mesax2").style.backgroundColor = 'red';
    totalMesas.push({
        mesa: 2,
        estado: 'ocupada'
    });
    console.log(totalMesas);
    localStorage.setItem("key", JSON.stringify(totalMesas));
    arrayMesas.push(seleccionarMesa2.innerText);
    storageMesas = localStorage.setItem('mesas', arrayMesas);
};
let seleccionarMesa3 = document.getElementById("mesax3")
seleccionarMesa3.addEventListener("click", actualizar3)

function actualizar3() {
    seleccionarMesa3.innerText = " mesa 3 "
    document.getElementById("mesax3").style.backgroundColor = 'red';
    totalMesas.push({
        mesa: 3,
        estado: 'ocupada'
    });
    console.log(totalMesas);
    localStorage.setItem("key", JSON.stringify(totalMesas));
    arrayMesas.push(seleccionarMesa3.innerText);
    storageMesas = localStorage.setItem('mesas', arrayMesas);
}
let seleccionarMesa4 = document.getElementById("mesax4");
seleccionarMesa4.addEventListener("click", actualizar4);

function actualizar4() {
    seleccionarMesa4.innerText = (" mesa 4 ")
    document.getElementById("mesax4").style.backgroundColor = 'red';
    totalMesas.push({
        mesa: 4,
        estado: 'ocupada'
    });
    console.log(totalMesas);
    localStorage.setItem("key", JSON.stringify(totalMesas));
    arrayMesas.push(seleccionarMesa4.innerText);
    storageMesas = localStorage.setItem('mesas', arrayMesas);
}
let seleccionarMesa5 = document.getElementById("mesax5")
seleccionarMesa5.addEventListener("click", actualizar5)

function actualizar5() {
    seleccionarMesa5.innerText = " mesa 5 "
    document.getElementById("mesax5").style.backgroundColor = 'red';
    totalMesas.push({
        mesa: 5,
        estado: 'ocupada'
    });
    console.log(totalMesas);
    localStorage.setItem("key", JSON.stringify(totalMesas));
    arrayMesas.push(seleccionarMesa5.innerText);
    storageMesas = localStorage.setItem('mesas', arrayMesas);

}
let seleccionarMesa6 = document.getElementById("mesax6")
seleccionarMesa6.addEventListener("click", actualizar6)

function actualizar6() {
    seleccionarMesa6.innerText = " mesa 6 "
    document.getElementById("mesax6").style.backgroundColor = 'red';
    totalMesas.push({
        mesa: 6,
        estado: 'ocupada'
    });
    console.log(totalMesas);
    localStorage.setItem("key", JSON.stringify(totalMesas));
    arrayMesas.push(seleccionarMesa6.innerText);
    storageMesas = localStorage.setItem('mesas', arrayMesas);
};

let seleccionarMesa7 = document.getElementById("mesax7");
seleccionarMesa7.addEventListener("click", actualizar7);

function actualizar7() {
    seleccionarMesa7.innerText = (" mesa 7 ");
    document.getElementById("mesax7").style.backgroundColor = 'red';
    totalMesas.push({
        mesa: 7,
        estado: 'ocupada'
    });
    console.log(totalMesas);
    localStorage.setItem("key", JSON.stringify(totalMesas));
    arrayMesas.push(seleccionarMesa7.innerText);
    storageMesas = localStorage.setItem('mesas', arrayMesas);
};

let seleccionarMesa8 = document.getElementById("mesax8")
seleccionarMesa8.addEventListener("click", actualizar8)

function actualizar8() {
    seleccionarMesa8.innerText = " mesa 8 "
    document.getElementById("mesax8").style.backgroundColor = 'red';
    totalMesas.push({
        mesa: 8,
        estado: 'ocupada'
    });
    console.log(totalMesas);
    localStorage.setItem("key", JSON.stringify(totalMesas));
    arrayMesas.push(seleccionarMesa8.innerText);
    storageMesas = localStorage.setItem('mesas', arrayMesas);
};
let seleccionarMesa9 = document.getElementById("mesax9")
seleccionarMesa9.addEventListener("click", actualizar9)

function actualizar9() {
    seleccionarMesa9.innerText = " mesa 9 "
    document.getElementById("mesax9").style.backgroundColor = 'red';
    totalMesas.push({
        mesa: 9,
        estado: 'ocupada'
    });
    console.log(totalMesas);
    localStorage.setItem("key", JSON.stringify(totalMesas));
    arrayMesas.push(seleccionarMesa9.innerText);
    storageMesas = localStorage.setItem('mesas', arrayMesas);
}
let seleccionarMesa10 = document.getElementById("mesax10");
seleccionarMesa10.addEventListener("click", actualizar10);

function actualizar10() {
    seleccionarMesa10.innerText = (" mesa 10 ")
    document.getElementById("mesax10").style.backgroundColor = 'red';
    totalMesas.push({
        mesa: 10,
        estado: 'ocupada'
    });
    console.log(totalMesas);
    localStorage.setItem("key", JSON.stringify(totalMesas));
    arrayMesas.push(seleccionarMesa10.innerText);
    storageMesas = localStorage.setItem('mesas', arrayMesas);
}
let seleccionarMesa11 = document.getElementById("mesax11")
seleccionarMesa11.addEventListener("click", actualizar11)

function actualizar11() {
    seleccionarMesa11.innerText = " mesa 11 "
    document.getElementById("mesax11").style.backgroundColor = 'red';
    totalMesas.push({
        mesa: 11,
        estado: 'ocupada'
    });
    console.log(totalMesas);
    localStorage.setItem("key", JSON.stringify(totalMesas));
    arrayMesas.push(seleccionarMesa11.innerText);
    storageMesas = localStorage.setItem('mesas', arrayMesas);

}
let seleccionarMesa12 = document.getElementById("mesax12")
seleccionarMesa12.addEventListener("click", actualizar12)

function actualizar12() {
    seleccionarMesa12.innerText = " mesa 12 "
    document.getElementById("mesax12").style.backgroundColor = 'red';
    totalMesas.push({
        mesa: 12,
        estado: 'ocupada'
    });
    console.log(totalMesas);
    localStorage.setItem("key", JSON.stringify(totalMesas));
    arrayMesas.push(seleccionarMesa12.innerText);
    storageMesas = localStorage.setItem('mesas', arrayMesas);
}
let takeAway = document.getElementById("take-away");
takeAway.addEventListener("click", actualizar13);

function actualizar13() {
    
    document.getElementById("take-away");
    arrayMesas.push('retira take away');
    storageMesas = localStorage.setItem('mesas', arrayMesas);
   
   
};




let mostrarMesas = JSON.parse(localStorage.getItem("key"));
console.log(...mostrarMesas);

