let cantidad = 50;

const pedido = cant => {
    let precioTotal = cant * 25;
    console.log(`El valor del pedido es igual a $${precioTotal}`);
}

pedido(cantidad);