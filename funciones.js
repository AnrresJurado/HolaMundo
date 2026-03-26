function saludar(){
    console.log("Hello world")
}

saludar();

function retonar(){
    return "XD";
}

var saludito = retonar();
console.log(saludito);

function recibiendoParametro(saludo){
    return saludo
}
respuesta = recibiendoParametro("Hola desde el curso de interciclo");
console.log(respuesta);

function recibiendoDosParametro(saludo, nombre){
    const respuesta = saludo + ": " + nombre
    return respuesta;
}
respuesta = recibiendoDosParametro("Hola","Maria");
console.log(respuesta);

function recibiendoDosParametro2(saludo, nombre){
    return saludo + ": " + nombre;
}
respuesta = recibiendoDosParametro2("Hola","Maria");
console.log(respuesta);

//Los operadores 
// Operdores aritmeticos
console.log("Suma + :", 5, "+", 5, "=", 5+5 );
console.log("Resta - :", 5, "-", 5, "=", 5-5 );
console.log("Division / :", 5, "/", 5, "=", 5/5 );
console.log("Multiplicacion * :", 5, "*", 5, "=", 5*5 );
console.log("Modulo % :", 5, "%", 5, "=", 5%5 );
console.log("Potencia ** :", 5, "**", 5, "=", 5**5 );
// Operadores de comparacion
console.log("Igualdad Debil :", 5, "==", 5, "=", "5"==5 );
console.log("Igualdad Estricta :", 5, "===", 5, "=", "5"===5 );
console.log("Desigualdad Debil :", 5, "!=", 5, "!=", "5"!=5 );
console.log("desigualdad Estricta :", 5, "!==", 5, "!==", "5"!==5 );
console.log("Mayor que :", 5, ">", 2, "=", 5>2 );
console.log("Menor que :", 5, "<", 2, "=", 5<2 );
console.log("Mayor igual que :", 5, ">=", 2, "=", 5>=2 );
console.log("Menor igual que :", 5, "<=", 2, "=", 5<=2 );

//Operadores logicos
//AND
console.log("And &&:", "true && true =", true && true );
console.log("And &&:", "true && false =", true && false );
const number1 = 5;
const number2 = 2; 
console.log("And &&:", "true && true =", (number1>=number2)&&(number1==number2));
//OR
console.log("Or || :", "true || false =", true || false );
console.log("Or || :", "true || false || false =", true || false || false);
console.log("And &&:", "true || true =", (number1>=number2)||(number1==number2));
//NOT
console.log("Not ! :","! = ",!true);
console.log("Not ! :","! = ",!(number1>=number2));
console.log("Not ! :","! = ",!(number1==number2));
//
function ejercicio(numer1, numer2){
    return numer1 + numer2;
}
resp1 = ejercicio(5,5)
console.log("suma: ",resp1)

function ejercicio2(numer1, numer2){
    return numer1 - numer2;
}
resp2 = ejercicio2(5,5)
console.log("Resta: ",resp2)

// Ejercicio 60: La función Saludadora
// 1. Crea una función llamada 'saludar' que reciba un 'nombre' como parámetro.
// 2. La función debe retornar: "Hola " + nombre + ", bienvenido al sistema".
// 3. Pide al usuario su nombre con prompt.
// 4. Muestra el resultado de la función en un alert.

// Tu código aquí:

function saludar60 (nombre){
    return "Hola "+nombre+", bienvenido al sistema";
}

let userName = prompt("Escriba su nombre");
let mensajeF = saludar60(userName);
console.log(mensajeF);

// Ejercicio 61: Validador de Edad (Booleano)
// 1. Crea una función llamada 'esMayor' que reciba una 'edad'.
// 2. Si la edad es 18 o más, debe retornar true. Si no, false.
// 3. Usa un bucle while para pedir edades.
// 4. Si la función retorna true, agrega la edad a un array 'permitidos'.
// 5. El bucle para cuando la edad sea 0.

// Tu código aquí:

const permitidos = [];

function esMayor (edad) {
    if (edad >= 18) {
        return true;
    } else {
        return false;
    }
}

let pedirEdad = 1;
while (pedirEdad != 0){
    pedirEdad = Number(prompt("Ingrese su edad o escriba '0' para finalizar"))
        if (pedirEdad >=18){
            agregar = new esMayor(pedirEdad);
            console.log()
        }
}


// Ejercicio 62: El Mini-Calculador de IVA
// 1. Crea un array vacío llamado 'ventas'.
// 2. Crea una función llamada 'sumarIVA' que reciba un precio y retorne el precio + 21%.
// 3. Usa un while para pedir "monto" y "producto".
// 4. Dentro del while, usa la función para calcular el precio final.
// 5. Guarda el objeto {producto: p, precioFinal: sumarIVA(monto)} en el array.

// Tu código aquí:

// =============================================================
// EJERCICIO 61: EL FILTRO DE EDAD (FUNCIONES + ARRAYS)
// =============================================================
// 1. Crea una función llamada 'esMayor' que reciba una 'edad'.
// 2. Si la edad es 18 o más, debe retornar 'true'. Si no, 'false'.
// 3. Crea un array vacío llamado 'listaVip'.
// 4. Usa un 'while' para pedir edades al usuario (el bucle para con 0).
// 5. DENTRO del bucle, usa tu función: if (esMayor(edadDigitada)) { ... }
// 6. Si es verdadero, guarda la edad en el array 'listaVip'.

// Tu código aquí:



// =============================================================
// EJERCICIO 62: CALCULADORA DE IVA (FUNCIONES + OBJETOS)
// =============================================================
// 1. Crea una función 'aplicarIva' que reciba un precio y retorne (precio * 1.21).
// 2. Crea un array vacío llamado 'carrito'.
// 3. Usa un 'while' para pedir el 'nombreProducto' y su 'precioBase'.
// 4. El bucle termina cuando el nombreProducto sea "pagar".
// 5. Crea un objeto que guarde: { producto: nombreProducto, total: aplicarIva(precioBase) }.
// 6. Guarda ese objeto en el array 'carrito' usando .push().

// Tu código aquí:



// =============================================================
// EJERCICIO 63: EL CONVERSOR DE DIVISAS (SWITCH + FUNCIONES)
// =============================================================
// 1. Crea una función 'convertirDolares' que reciba 'pesos' y 'tipoMoneda'.
// 2. Dentro de la función, usa un SWITCH para el 'tipoMoneda':
//    - case "USD": retorna pesos / 4000 (suponiendo ese cambio).
//    - case "EUR": retorna pesos / 4300.
//    - default: retorna "Moneda no soportada".
// 3. Pide al usuario un monto en pesos y a qué moneda quiere cambiar.
// 4. Muestra el resultado final con un alert usando la función.

// Tu código aquí: