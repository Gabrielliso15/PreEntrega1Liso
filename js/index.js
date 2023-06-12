// Variables que contienen los precios de cada articulo disponible.

let Camiseta = 11500;
let Pantalon = 9400;
let Buzo = 15999;
let Campera = 15999;
let Pelota = 7999;

// Muestra en consola todos los productos disponibles.
console.log(" Pelota = $7999 - Camiseta = $11500 - Pantalon = $9400 - Buzo = $15999 - Campera = $15999");

// Variable "Total" para guardar la suma de la compra.
let total = 0;

// En un inicio se solicita al usuario ingresar un producto y se analiza que se encuentre dentro de los disponibles. En caso de ingresar cualquie otra cosa imprime "Producto desconocido" y no entra al while que suma todo. (Esta checkeo sirve para el primer producto. Los demás se controlan dentro del while).


let compra = prompt("Ingrese el nombre de los productos que desea comprar ¡Escriba 'FIN' para finalizar!");

if ((compra != "Pelota") && (compra != "Buzo") && (compra != "Campera") && (compra != "Camiseta") && (compra != "Pantalon" )) {
alert("Producto desconocido.");

}else{
    // While que mediante una funcion se encarga de analizar cada producto ingresado por el usuario y los va sumando a la variable Total hasta colocar la palabra "FIN".
    while (compra != "FIN" ) {
        SumarProducto(compra);
        compra = prompt("Ingrese el nombre de los productos que desea comprar ¡Escriba 'FIN' para finalizar!");
    }
    alert("El Total es : $" + total);

// Funcion que aplica un descuento del 20% a la totalidad de la compra.
    function Descuento(total) {
        const Descuento = total * 0.2;
        return total - Descuento;
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
}

// Funcion para sumar los productos. Toma como parametro el producto seleccionado por el usuario y va sumando a la variable total en caso se ser correcto.
function SumarProducto(producto) { 
    switch (producto) {
        case "Campera":
            total = total + Campera;
            break;
        case "Buzo":
            total = total + Buzo;
            break;
        case "Camiseta":
            total = total + Camiseta;
            break;
        case "Pelota":
            total = total + Pelota;
            break;
        case "Pantalon":
            total = total + Pantalon;
            break;
        default:
            alert("Producto no válido");
}
}



