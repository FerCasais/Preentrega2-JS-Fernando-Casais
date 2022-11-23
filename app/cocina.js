let card1Mesa = document.getElementById('card1-mesa');
let card1Pedido = document.getElementById('card1-pedido');

card1Mesa.innerHTML =   '<h2>' + localStorage.getItem('mesas') + '</h2>';
card1Pedido.innerHTML = '<h4>Pedido a despachar!!</h4>' + '<h4>' + JSON.parse(localStorage.getItem('pedidosTotales')) + '</h4>';

let despachado = document.getElementById('despachado');
despachado.addEventListener("click", despachar);
function despachar() {
    document.getElementById('despachado').style.backgroundColor = 'red';
    card1Pedido.innerHTML = '<h4>Despachado!!</h4>' + '<h4>' + JSON.parse(localStorage.getItem('pedidosTotales')) + '</h4>';
};


