
// Nueva clase con un producto (objeto).
class Producto {
    constructor(nombre, precio, ID) {
        this.nombre = nombre;
        this.precio = precio;
        this.ID = this.crearID();
    }
    // Funcion que permite generar un ID para cada producto.
    crearID() {
        return Math.floor(Math.random() * 1000);
    }

}

// Declaracion del array carrito.
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

while ((compra != "pelota") && (compra != "buzo") && (compra != "campera") && (compra != "camiseta") && (compra != "pantalon")) {
    compra = prompt("Ingrese un producto VALIDO");
    compra = compra.toLowerCase();
}

while (compra != "fin") {
    SumarProducto(compra);
    compra = prompt("Ingrese el nombre de los productos que desea comprar ¡Escriba 'FIN' para finalizar!");
    compra = compra.toLowerCase();
}


// Funcion que aplica un descuento del 20% a la totalidad de la compra.
function Descuento(total) {
    const Descuento = total * 0.2;
    total = (total - Descuento);
    redondeo = Math.floor(total);
    return redondeo;
}


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

// Funcion Para eliminar un producto del carrito filtrado por ID.

function eliminarProducto(ID) {
    let producto = carrito.find(producto => producto.ID === ID);
    let index = carrito.indexOf(producto);
    if (index !== -1) {
        carrito.splice(index, 1);
    }
}

// Menu con opciones.


// 1 : Agrega un producto al carrito actual.
// 2 : Muestra en un prompt el carrito actual.
// 3 : Filtra un producto por ID y lo elimina del carrito.
// 4 : Muestra el valor final de la compra con un descuento aplicado.
// 99 : cierra el menu.


function FinalizarCompra() {
    let opcion = "";
    do {
        opcion = prompt(`Seleccione una opción:
        1. Agregar Producto
        2. Ver Carrito
        3. Eiminar Un Producto
        4. Finalizar Compra
        99. Salir`);
        switch (opcion) {
            case "1":
                let compra = prompt("Ingrese el nombre del producto que desea agregar");
                compra = compra.toLowerCase();

                while ((compra != "pelota") && (compra != "buzo") && (compra != "campera") && (compra != "camiseta") && (compra != "pantalon")) {
                    compra = prompt("Ingrese un producto VALIDO");
                    compra = compra.toLowerCase();
                }

                SumarProducto(compra);
                break;
            case "2":
                let mensajeCarrito = "Carrito:\n";
                let total = 0;
                for (let i = 0; i < carrito.length; i++) {
                    let producto = carrito[i];
                    total = total + producto.precio;
                    mensajeCarrito += "ID: " + producto.ID+" - "+ producto.nombre + ": $" + producto.precio + "\n";
                }
                mensajeCarrito +=  " \n Total : $" +total ;
                alert(mensajeCarrito);

                break;
            case "3":
                ID = parseInt (prompt("Ingrese el ID del producto que desea eliminar"))
                let ProductoAEliminar = carrito.find(producto => producto.ID === ID);
                if (ProductoAEliminar){
                    eliminarProducto(ID);
                    alert("El Producto fue eliminado correctamente");
                }else{
                    alert("ID Incorrecto. No se pudo encontrar un producto con ese ID en el carrito");
                }
                break;
            case "4":
                let tot= 0;
                for (let i = 0; i < carrito.length; i++) {
                    let producto = carrito[i];
                    tot = tot + producto.precio;
                }
                alert ("Con su primera compra se aplica un Descuento del 20%!!. \n \n EL TOTAL CON DESCUENTO ES DE : $" +Descuento(tot));
            
                break;
            case "99":
                break;
            default:
                alert("Opción inválida");
                break;
        }
    } while (opcion !== "99");

}

FinalizarCompra ();