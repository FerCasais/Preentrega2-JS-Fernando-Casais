anime({
    targets: '#la-cocina',
    translateX: 250,
    autoplay: true,
    easing: 'easeInOutSine'
});


let card4Mesa = document.getElementById('card4-mesa');
let card4Pedido = document.getElementById('card4-pedido');

card4Mesa.innerHTML = '<h2>' + localStorage.getItem('mesas') + '</h2>';
card4Pedido.innerHTML = '<h4>Pedido a despachar!!</h4>' + '<h4>' + JSON.parse(localStorage.getItem('pedidosTotales')) + '</h4>';

let despachado4 = document.getElementById('despachado4');
despachado4.addEventListener("click", despachar4);

function despachar4() {
    document.getElementById('despachado4').style.backgroundColor = 'red';
    card4Pedido.innerHTML = '<h4>Despachado!!</h4>' + '<h4>' + JSON.parse(localStorage.getItem('pedidosTotales')) + '</h4>';
    card4Pedido.style.cssText = 'background-color : blue';

    anime({
        targets: '#card4',
        translateX: -570
    });

};

let card3Mesa = document.getElementById('card3-mesa');
let card3Pedido = document.getElementById('card3-pedido');

card3Mesa.innerHTML = '<h2>' + localStorage.getItem('mesas') + '</h2>';
card3Pedido.innerHTML = '<h4>Pedido a despachar!!</h4>' + '<h4>' + JSON.parse(localStorage.getItem('pedidosTotales')) + '</h4>';

let despachado3 = document.getElementById('despachado3');
despachado3.addEventListener("click", despachar3);

function despachar3() {
    document.getElementById('despachado3').style.backgroundColor = 'red';
    card3Pedido.innerHTML = '<h4>Despachado!!</h4>' + '<h4>' + JSON.parse(localStorage.getItem('pedidosTotales')) + '</h4>';
    card3Pedido.style.cssText = 'background-color : blue';

    anime({
        targets: '#card3',
        translateX: -570,
        easing: 'easeInOutExpo',
        delay: 300
    });

};

