function Hola (){
    alert('Hola! Bienvenido! tenemos nootebooks y consolas!');
}
Hola();

class Producto {
    constructor(marca, nombre, color, gigas, precio){
        this.marca = marca;
        this.nombre = nombre;
        this.color = color;
        this.gigas = gigas;
        this.precio = precio;
    }
}

let producto1 = new Producto( 1, 'Sony', 'PlayStation 4', 'Negra', '1 Tera', 100);
let producto2 = new Producto( 2, 'Sony', 'PlayStation 5', 'Blanca', '3 Teras', 500);
let producto3 = new Producto( 3, 'Microsoft', 'Xbox', 'Negra', '3 Teras', 400);
let producto4 = new Producto( 4, 'Nintendo', 'Wii', 'Roja', '500 gigas', 100);
let producto5 = new Producto( 5, 'Nootebook', 'Samsung', 'Gris', '250 gigas', 600);
let producto6 = new Producto( 6, 'Nootebook', 'Macbook', 'Blanca', '500 gigas', 1000);

let listaDeProductos = [producto1, producto2, producto3, producto4, producto5, producto6];

let productosDisponibles = '';

function mostrarProductosDisponibles (){
    listaDeProductos.map(producto => {
        productosDisponibles += (`\n ${producto.marca}. ${producto.nombre} ${producto.precio}cpl`);
    });
}

mostrarProductosDisponibles();

let marcaProducto = 0;
let productoElegido = 0;
let compra = '';
let precio = 0;

function seleccionProducto(){
    marcaProducto = Number(prompt(`Indicame cual de nuestros ${listaDeProductos.length} productos estas interesado 
    ${productosDisponibles}`));

    productoElegido = listaDeProductos[marcaProducto -1];

    if (marcaProducto > 0 && marcaProducto <= listaDeProductos.length){
        compra = productoElegido.nombre;
        precio = productoElegido.precio;
    }    
}

seleccionProducto();

while(marcaProducto <= 0 || marcaProducto > listaDeProductos.length || marcaProducto === "no"){
    alert(`El valor ingresado no es valido intente un numero del 1 al ${listaDeProductos.length} o escriba no para salir`);
    seleccionProducto();
}

let unidades = 0;

function cantidadDeUnidades () {
    unidades = Number(prompt(`¿Cuantas unidades del ${productoElegido.nombre} quieres comprar?`));
}
cantidadDeUnidades ()


function resumenDeCompra (){
    console.log('Producto: ' + compra);
    console.log('Unidades: ' + unidades);
    console.log('precio: ' + precio +' AR$');
    console.log('Subtotal: ' + `${(precio * unidades)} pcl`);
    console.log(`Gracias por participar en el simulador de compras de SW`)
}

resumenDeCompra();
