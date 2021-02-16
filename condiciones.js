//Swicth
var opcion = 2
switch (opcion) {
    case 1:
        console.log("Ha introducido el Numero Uno")
        break;
    case 2:
        console.log("Ha introducido el Numero Dos")
        break;
    case 3:
        console.log("Ha introducido el Numero Tres")
        break;
    case 4:
        console.log("Ha introducido el Numero Cuatro")
        break;
    case 5:
        console.log("Ha introducido el Numero Cinco")
        break;
    default:
        console.log("Opcion incorrecta")
        break;
}

//For each
var arrayElementos = ["Yasmany", "Yanet", 32, 30]
for (let i = 0; i < arrayElementos.length; i++) {
    console.log(`Estoy en el elemento ${i} del array y su valor es ${arrayElementos[i]}`);
}

arrayElementos.forEach(elem => console.log(elem))

arrayElementos.forEach((elem, i) => console.log(`Estoy en el elemento ${i} del array y su valor es ${elem}`))

var arrayPersonas = [
    persona1 = { nombre: 'Elizabeth', edad: 1 },
    persona2 = { nombre: 'David', edad: 5 },
    persona1 = { nombre: 'Yasmany', edad: 32 },
    persona2 = { nombre: 'Yanet', edad: 30 }
]
var arrayNombres = []
arrayPersonas.forEach(element => arrayNombres.push(element.nombre))
console.log(arrayNombres)
