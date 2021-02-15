const name = ["Yasmany", "Yanet", "David", "Elizabeth"];
for (let i = 0; i < name.length; i++) {
    console.log(name[i]);
}

let password = "tomorrow";
let enterPassword = "tomorrow";

while (enterPassword !== password) {
    enterPassword = prompt("Introduzca la contraseña: ");
}
//alert("Seccion Iniciada Correctamente");

//FACTORIAL
//5*4*3*2*1
let factorial = 1;
let numero = prompt("Introduzca el numero que desee saber el factorial");
let original = numero;

do {
    factorial = factorial * numero;
    numero--
} while (numero > 0);
console.log(original + " factorial es: " + factorial);