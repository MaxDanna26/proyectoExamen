// Enlaza un script de un javascript externo que el prompt, muestre en consola y muestre
// en el contenido de HTML un texto cualquiera

let usuario = prompt('Escriba su nombre por favor!');
console.log(usuario);


// El prompt anterior guarde en una variable de javascript ese string y lo muestre en
// pantalla (consola o body) concatenado con un texto tipo “Hola soy “ + variable.

const mostrarNombre = function() {
    let bienvenida = document.querySelector('#saludo');
    bienvenida.innerHTML = 'BIENVENIDO A MI PAGINA: ' + usuario;
}


mostrarNombre();

// Escribe un programa con una variable de tipo number (a) y un condicional que evalúe
// si el entero es par o impar utilizando el operador %.

let numeroA = prompt('Escribe un numero!');

if((numeroA % 2) == 0){ console.log('El numero es par')}
else{console.log('El numero es impar!')}; 

// Escribe un programa que pida al usuario un número entero positivo(mediante la
//     función prompt) y muestre por pantalla la cuenta hacia delante desde ese número
//     hasta 20, utilizando saltos de línea como separación y si es superior a 20 que lo indique
// por pantalla.

let numeroB = prompt("Introduce un número entero positivo");
let numeroPositivo = document.querySelector('#numeroEntero');


if (numeroB > 20) {
 numeroPositivo.innerHTML = "El número introducido es mayor que 20";
} else {
  for (let i = numeroB; i <= 20; i++) {
numeroPositivo.innerHTML += i + '-';
  }
}

// Escribe un programa que devuelva si un string es palíndromo (se escribe igual hacia
    // delante y hacia detrás). Ejemplo: "sometemos"

    let palindromo = document.querySelector('#palindromo');

    let frase = 'alagordadrogala';
    let letra;
    let frase2 = '';

    for (let i = frase.length; i >= 0; i--) {
        frase2 += frase.charAt(i);
        // console.log(frase2);
    }
    if(frase == frase2){palindromo.innerHTML = 'SON PALINDROMOS';}
    else{palindromo.innerHTML = 'NO SON PALINDROMOS'};
        
    // Escribe un programa con un array que almacene los nombres de tres colores. A
    // continuación, crea otro array vacío e inserta en él todos los elementos del primer
    // arraymediante un for...of y el método push

let colores = ['rojo','verde','amarillo'];
let colores2 = [];

for (const color of colores) {
    colores2.push(color);
    // colores = colores + color;
    
}   
 console.log(colores2);








