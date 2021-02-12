function sum(a, b) {
    return a + b;
}
console.log(sum(10, 10));

function product(a, b) {
    return a * b;
}

console.log("El producto de 12 y 27 es: " + product(12, 27));

setTimeout(function () { console.log("Hola seteando timepo"); }, 1000);

setTimeout(() => console.log("Hola seteando timepo"), 1000);