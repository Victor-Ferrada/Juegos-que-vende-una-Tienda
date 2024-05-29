let ventas = [];

function addProduct() {
    let nombre = document.getElementById('producnom').value;
    let valor = parseFloat(document.getElementById('productValue').value);
    let cantidad = parseInt(document.getElementById('productQuantity').value);

    let venta = {
        nombre: nombre,
        valor: valor,
        cantidad: cantidad
    };

    ventas.push(venta);

    document.getElementById('producnom').value = '';
    document.getElementById('productValue').value = '';
    document.getElementById('productQuantity').value = '';
}

document.getElementById('totalCompra').addEventListener('click', function() {
    let ultimaVenta = ventas[ventas.length - 1];
    let totalCompra = ultimaVenta.valor * ultimaVenta.cantidad;
    document.getElementById('total-compra').innerText = 'Total Compra: ' + totalCompra;
});

document.getElementById('totalVentas').addEventListener('click', function() {
    let totalVentas = 0;
    for (let venta of ventas) {
        totalVentas += venta.valor * venta.cantidad;
    }
    document.getElementById('ventas-totales').innerText = 'Caja total: ' + totalVentas;
});

function abrirNuevaPagina() {
    let totalVentas = 0;
    for (let venta of ventas) {
        totalVentas += venta.valor * venta.cantidad;
    }
    localStorage.setItem('totalVentas', totalVentas);
    window.open('caja.html');
}