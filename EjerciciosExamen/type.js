// función normal
function calculo(altura) {
    return 5 * altura / 2;
}
;
function triangulo(base, altura) {
    return base * altura / 2;
}
console.log(calculo(5));
console.log(triangulo(3, 8));
// función de flecha
var funcion1 = function (altura) {
    return 5 * altura / 2;
};
console.log(funcion1(6));
// forma simplificada de la función de flecha
var funcion2 = function (altura) { return 5 * altura / 2; };
console.log(funcion2(10));
