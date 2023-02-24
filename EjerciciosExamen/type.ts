// He creado una hoja con terminacion .ts de typescript, he comenzado a codear aclarando los tipos de variables
// ya que typescript tiene un tipado fuerte, luego al terminar y checkear que todo este correcto, me he ido 
// a la raiz donde se encuentra el archivo.ts, he abierto el CMD del ordenador y tipeado en la carpeta del archivo
// TSC nombredelarchivo.ts y automaticamente el programa transpila de .ts a .js

// función normal
function calculo(altura:number):number {
    return 5 * altura / 2;
};

function triangulo(base:number,altura:number):number {
    return base * altura / 2;
}
console.log(calculo(5));
console.log(triangulo(3,8));

// función de flecha
const funcion1 = (altura:number) => {
    return 5 * altura / 2;
};
console.log(funcion1(6));

// forma simplificada de la función de flecha
const funcion2 = altura => 5 * altura / 2;
console.log(funcion2(10));

// Como revisamos las versiones de TS, Node, el instalador de paquetes y Angular,
// escribe los comandos en consola necesarios   

// codigo de ts: tsc --version
// codigo de node: node -v
// codigo de npm: npm -v
// codigo de Angular: ng version