// Variables que contienen los precios de cada articulo disponible.

// let Camiseta = 11500;
// let Pantalon = 9400;
// let Buzo = 15999;
// let Campera = 15999;
// let Pelota = 7999;


// Nueva clase con un producto (objeto).
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

let carrito = [];

// creacion de todos los objetos.
let Camiseta = new Producto("camiseta", 11500);
let Pantalon = new Producto("pantalon", 9400);
let Buzo = new Producto("buzo", 15999);
let Campera = new Producto(" campera", 15999);
let Pelota = new Producto("pelota", 7999);



// Muestra en consola todos los productos disponibles.
// console.log(" Pelota = $7999 - Camiseta = $11500 - Pantalon = $9400 - Buzo = $15999 - Campera = $15999");


let mensaje = "Productos disponibles:\n";
mensaje += "- Pelota: $" + Pelota.precio + "\n";
mensaje += "- Camiseta: $" + Camiseta.precio + "\n";
mensaje += "- Pantalon: $" + Pantalon.precio + "\n";
mensaje += "- Buzo: $" + Buzo.precio + "\n";
mensaje += "- Campera: $" + Campera.precio + "\n";

alert(mensaje);




// Variable "Total" para guardar la suma de la compra.
let total = 0;

// En un inicio se solicita al usuario ingresar un producto y se analiza que se encuentre dentro de los disponibles. En caso de ingresar cualquie otra cosa imprime "Producto desconocido" y no entra al while que suma todo. (Esta checkeo sirve para el primer producto. Los demás se controlan dentro del while).


let compra = prompt("Ingrese el nombre de los productos que desea comprar ¡Escriba 'fin' para finalizar!");
compra = compra.toLowerCase();

// if ((compra != "Pelota") && (compra != "Buzo") && (compra != "Campera") && (compra != "Camiseta") && (compra != "Pantalon" )) {
// alert("Producto desconocido.");

while ((compra != "pelota") && (compra != "buzo") && (compra != "campera") && (compra != "camiseta") && (compra != "pantalon")) {
    compra = prompt("Ingrese un producto VALIDO");
    compra = compra.toLowerCase();
}

while (compra != "fin") {
    SumarProducto(compra);
    compra = prompt("Ingrese el nombre de los productos que desea comprar ¡Escriba 'FIN' para finalizar!");
    compra = compra.toLowerCase();
}
alert("El Total es : $" + total);
// alert("Productos en el carrito:\n" +  carrito.join("\n"));

let mensajeCarrito = "Carrito:\n";
for (let i = 0; i < carrito.length; i++) {
    let producto = carrito[i];
    mensajeCarrito += producto.nombre + ": $" + producto.precio + "\n";
}
alert(mensajeCarrito);



// Funcion que aplica un descuento del 20% a la totalidad de la compra.
function Descuento(total) {
    const Descuento = total * 0.2;
    total = (total - Descuento);
    redondeo = Math.floor(total);
    return redondeo;
}

alert("Con su primera compra se aplica un Descuento del 20%");

// La funcion toma como parametro la variable total y retorna el nuevo total con el descuento aplicado.
total = Descuento(total);

// If que controla si la compra supera los $25000 y envia un alert de : "envio gratis".
if (total > 25000) {
    alert("¡Felicitaciones! ¡Tu compra tiene envio gratis!");
}

// Alert que muestra el precio final.
alert("El Total con descuento es : $" + total);





// Funcion para sumar los productos. Toma como parametro el producto seleccionado por el usuario y va sumando a la variable total en caso se ser correcto.
function SumarProducto(producto) {
    switch (producto) {
        case "campera":
            total = total + Campera.precio;
            carrito.push(new Producto("campera", 15999));
            break;
        case "buzo":
            total = total + Buzo.precio;
            carrito.push(new Producto("buzo", 15999));
            break;
        case "camiseta":
            total = total + Camiseta.precio;
            carrito.push(new Producto("camiseta", 11500));
            break;
        case "pelota":
            total = total + Pelota.precio;
            carrito.push(new Producto("pelota", 7999));
            break;
        case "pantalon":
            total = total + Pantalon.precio;
            carrito.push(new Producto("pantalon", 9400));
            break;
        default:
            alert("Producto no válido");
    }
}

// console.log("nombre : " + Campera.nombre + ", precio : $" + Campera.precio);