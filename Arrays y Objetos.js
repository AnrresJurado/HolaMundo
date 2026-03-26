// Ejercicio 38
// Crea un objeto llamado 'mascota' que tenga las propiedades: nombre, especie y edad.
// Luego, muestra un alert que diga: "Mi mascota se llama " + (nombre de la mascota).

// Tu código aquí:

const mascota = {
    nombre: "Memphis",
    especie:"Macaco",
    edad:69
}
alert("Mi mascota se llama: ",mascota.nombre);

// Ejercicio 42: Creación de un Array simple
// Instrucciones:
// 1. Crea una variable llamada 'paises' que sea un Array.
// 2. Debe contener 4 nombres de países (Strings).
// 3. Muestra en la consola el tercer país de la lista (recuerda los índices).

// Tu código aquí:

const paises42 = ['Peru', 'Ecuador', 'Venecos', 'Brasil'];
console.log("El tercer pais es: ", paises42[2]);

// Ejercicio 44: Array de Objetos (Tu propia base de datos)
// Instrucciones:
// 1. Crea un Array llamado 'carrito'.
// 2. Dentro del Array, crea 2 objetos. Cada objeto representa un producto y debe tener: 
//    nombre y precio (número).
// 3. Crea una variable 'total' que sume el precio del primer producto y el precio del segundo.
// 4. Muestra el total por consola con el mensaje: "El total de la compra es: $" + total.

// Tu código aquí:

const carrito44 = [
    {
        nombre:"PS2 CHIPEADA",
        precio:80
    },
    {
        nombre:"Nintendo Wii",
        precio:100
    }
];
var total44 = carrito44[0].precio + carrito44[1].precio;
console.log("El total de la compra es: $", total44);

// Ejercicio 45
// 1. Crea un Array llamado 'biblioteca'.
// 2. Agrega 2 objetos. Cada uno debe tener: 'titulo' y 'autor'.
// 3. Muestra un alert que diga: "El primer libro es " + (titulo del primer libro) + " de " + (autor del primer libro).

// Tu código aquí:

const biblioteca45 = [
    libro1={
        titulo:"Doraemon",
        autor: "Nuse"
    },

    libro2={
        titulo:"Yo,Robot",
        autor:"Isaac Azimov"
    }
];

alert("El primer libro es " + biblioteca45[libro1].titulo+ " de " + biblioteca45[libro1].autor);





//PUSH
// 1. Creamos el array vacío
const carrito1 = [];

// 2. Pedimos datos al usuario
var productoNombre = prompt("¿Qué producto quieres comprar?");
var productoPrecio = Number(prompt("¿Cuánto cuesta?"));

// 3. Creamos un objeto con esos datos
var nuevoProducto = {
    nombre: productoNombre,
    precio: productoPrecio
};

// 4. ¡Lo metemos al carrito!
carrito1.push(nuevoProducto);

console.log("Tu carrito tiene ahora:");
console.log(carrito1);

// Ejercicio 46: Lista de invitados
// Instrucciones:
// 1. Crea un array vacío llamado 'invitados'.
// 2. Pide al usuario un nombre mediante prompt.
// 3. Usa .push() para agregar ese nombre al array.
// 4. Pide un SEGUNDO nombre y agrégalo también con .push().
// 5. Muestra el array completo en la consola.

// Tu código aquí:


const invitados46 = [];
var nombre46= prompt("Ingrese el nombre: ")

invitados46.push(nombre46);
console.log("El nombre ingresdo fue: "+invitados46)

// Ejercicio 47: Registro de puntajes
// Instrucciones:
// 1. Crea un array vacío llamado 'puntos'.
// 2. Pide al usuario que ingrese 3 puntajes (usa Number y prompt).
// 3. Agrega cada uno al array usando .push().
// 4. Al final, muestra un alert que diga: "El primer puntaje fue: " + puntos[0].

// Tu código aquí:

const puntitos=[];

var punto1 = Number(prompt("Ingrese el primer puntaje: "));
var punto2 = Number(prompt("Ingrese el segundo puntaje: "));
var punto3 = Number(prompt("Ingrese el tercer puntaje: "));

puntitos.push(punto1);
puntitos.push(punto2);
puntitos.push(punto3);

console.log("El primer puntaje fue de: "+puntitos[0]);

// Ejercicio 48: Mini Base de Datos de Usuarios
// Instrucciones:
// 1. Crea un array vacío llamado 'usuarios'.
// 2. Pide al usuario su 'nombre' y su 'email' por separado.
// 3. Crea un objeto con esos datos: { nombre: ..., email: ... }
// 4. Agrega ese objeto al array 'usuarios' con .push().
// 5. Muestra en consola el email del primer usuario registrado.

// Tu código aquí:

const usuarios = [];

var nombre48 = prompt("Imgrese su name compa: ");
var correo48 = prompt("Ingrese su correo: ");

const datos48 = {
    nombre: nombre48,
    email: correo48
}

usuarios.push(datos48);
console.log("El email es: "+usuarios[0].email);

// Ejercicio 52: Registro de Gastos
// 1. Crea un array vacío llamado 'gastos'.
// 2. Usa un bucle while para pedir montos de dinero (Number).
// 3. El bucle debe parar cuando el usuario ingrese un 0.
// 4. Muestra el array de gastos en la consola al finalizar.

// Tu código aquí:

const gastos52 = [];
let montos52 = 1;

while (montos52 != 0) {
    montos52 = Number(prompt("Ingrese un monto (o pulse 0 para salir):"));
        if (montos52 != 0) {
            gastos52.push(montos52);
        }
}
console.log("Los gastos infresados fueron de:");
console.log(gastos52);

// Ejercicio 53: Supermercado Dinámico
// 1. Crea un array vacío llamado 'productos'.
// 2. Muestra un prompt que pregunte: "¿Qué producto desea agregar? (escriba 'fin' para terminar)".
// 3. Usa un while para que, mientras no escriba 'fin', se agreguen los productos al array.

// Tu código aquí:

const products = [];
let agregados ="";

while (agregados != "fin") {
    agregados = prompt("¿Qué producto desea agregar? (escriba 'fin' para terminar)");
        if (agregados != "fin") {
            products.push(agregados);
        }
}

// Ejercicio 54 (El más difícil): Contador de elementos
// 1. Usa el código del Ejercicio 53.
// 2. Al final del bucle, muestra un alert que diga: 
//    "Has cargado " + (largo del array) + " productos".
//    (Pista: usa productos.length).

// Tu código aquí:

alert("Has cargado "+ products.length + " productos");

// Ejercicio 55: Registro de Inventario
// 1. Crea un array vacío llamado 'inventario'.
// 2. Usa un bucle while para pedir el 'nombre' de un producto y su 'stock' (Number).
// 3. El bucle debe detenerse si el usuario escribe "parar" en el nombre del producto.
// 4. Cada producto debe guardarse como un objeto {item: nombre, cantidad: stock} dentro del array.

// Tu código aquí:

const inventario55 =[];

var nombre55 = "";
var stock = 0;

while (nombre55 != "parar") {
    nombre55 = prompt("Escriba un nombre para continuar (o parar para finalizar)");
        if (nombre55 != "parar") {

            stock = Number(prompt("Escriba en numero el stock: "));

            item55= {
            nombre:nombre55,
            cantidad:stock
            }

            inventario55.push(item55);
        }
} 

console.log("Productos: ");
console.log(item55);

// Ejercicio 56: Agenda de Contactos
// 1. Crea un array vacío llamado 'agenda'.
// 2. Pide al usuario un nombre y un teléfono mediante prompt.
// 3. Mientas el nombre no sea "fin", agrega un objeto con esos datos al array.
// 4. Al terminar, muestra por consola el nombre del primer contacto guardado.

// Tu código aquí:

const agenda56 = [];

let nombre56 ="";
let telefono56 ="";

while (nombre56 != "fin") {
    nombre56 = prompt("Ingrese un nombre (o escriba 'fin' para finalizar)");
        if(nombre56!= "fin") {
            telefono56 = Number(prompt("Ingrese el telefono: "));

            const datos56 = {
                nombre: nombre56,
                telefono: telefono56
            };

            agenda56.push(datos56);
        }
}

console.log("Contacto: "+agenda56[0].nombre);

// Ejercicio 57: Sistema de Calificaciones con Switch y Array
// 1. Crea un array vacío llamado 'registro'.
// 2. Usa un while para pedir el 'nombre' del alumno y su 'nota' (0 al 10).
// 3. El bucle para cuando el nombre sea "salir".
// 4. Dentro del bucle, usa un SWITCH para evaluar la nota:
//    - Si es 10: categoría = "Excelente".
//    - Si es 7, 8 o 9: categoría = "Aprobado".
//    - Default: categoría = "Revisar".
// 5. Guarda un objeto {alumno: nombre, calificacion: nota, estado: categoría} en el array.

const registro = [];
let nombre = "";
let nota = 0;

while(nombre != "salir") {
    nombre = prompt("Ingrese el nombre del alumno: ");
        if (nombre != "salir") {
            nota = Number(prompt("Ingrese la nota del alumno: "));
            let categoria = "";
                switch (nota) {
                    case 10:
                        categoria = "Excelente";
                        break;
                    
                    case 7:
                    case 8:
                    case 9:
                        categoria = "Aprobado";
                        break;

                    default:
                        categoria = "Revisar";
                        break;
                }

            const alumnoObjeto = {
                alumno: nombre,
                calificaion: nota,
                estado: categoria
            };

            registro.push(alumnoObjeto);
        }
}
console.log("Datos de Alumnos", registro);



// Ejercicio 58: Filtro de Seguridad Lógico
// 1. Crea un array 'usuariosVip'.
// 2. Usa un while que pida 'nombre' y 'edad'.
// 3. El bucle sigue MIENTRAS el nombre no sea "fin" Y el array tenga menos de 3 personas.
// 4. Solo si (edad >= 18 && nombre != "invitado"), agrega el objeto al array.
// 5. Si no cumple, muestra un alert: "No cumple requisitos VIP".

// 1. Crea un array 'usuariosVip'.
const usuariosVip = [];
let nombre58 = "";
let edad58 = 0;

// 3. El bucle sigue MIENTRAS el nombre no sea "fin" Y el array tenga menos de 3 personas.
while (nombre58 !== "fin" && usuariosVip.length < 3) {
    nombre58 = prompt("Ingrese el nombre del usuario o 'fin' para finalizar:");

    // Verificamos de nuevo la longitud y el nombre antes de pedir la edad
    if (nombre58 !== "fin" && usuariosVip.length < 3) {
        edad58 = Number(prompt("Ingrese la edad:"));

        // 4. Solo si (edad >= 18 && nombre != "invitado"), agrega el objeto.
        if (edad58 >= 18 && nombre58 !== "invitado") {
            // Creamos el objeto directamente y lo pusheamos
            usuariosVip.push({
                nombre: nombre58,
                edad: edad58
            });
        } else {
            // 5. Si no cumple, muestra un alert.
            alert("No cumple requisitos VIP");
        }
    }
}

console.log("Lista VIP:", usuariosVip);




// Ejercicio 59: Calculadora de Gastos por Categoría
// 1. Crea un array 'facturas'.
// 2. Pide 'monto' y 'tipo' (ej: "comida", "ocio").
// 3. Usa un switch para el 'tipo':
//    - case "comida": aplica un impuesto del 10% al monto (monto * 1.10).
//    - case "ocio": aplica un impuesto del 20% (monto * 1.20).
// 4. Guarda el objeto con el precio final en el array.

const facturas = [];
let monti = 0;
let tipo59 = "";
const objeto59 = {
    tipo : tipo59,
    valor: impuesto
};


switch (tipo59){
    case "comida":
        impuesto = monti * 1.10;
        facturas.push(objeto59); 
        break;

    case "ocio": 
        impuesto = monti * 1.20;
        facturas.push(objeto59);
        break;
}
console.log("Datos de la factura: ",facturas[0]);