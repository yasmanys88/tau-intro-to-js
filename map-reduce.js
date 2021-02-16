
arrayPeliculas = [
    { titulo: "titulo1", anio: 2020, valoracion: 3 },
    { titulo: "titulo2", anio: 2019, valoracion: 2 },
    { titulo: "titulo3", anio: 2018, valoracion: 5 },
    { titulo: "titulo4", anio: 2020, valoracion: 5 },
    { titulo: "titulo5", anio: 2021, valoracion: 4 },
    { titulo: "titulo6", anio: 2019, valoracion: 1 }
]

let sumarUnoaValoracion = ({ valoracion }) => valoracion < 5 ? valoracion += 1 : valoracion

let ReducirValoracion = (acumulado, { valoracion }) => acumulado + valoracion
let promedioValoracion = arrayPeliculas.reduce(ReducirValoracion, 0) / arrayPeliculas.length
console.log(`El promedio de valoracion es ${promedioValoracion}`)

let mapValoracion = arrayPeliculas.map(sumarUnoaValoracion)
console.log(mapValoracion)
//Creando otro Objeto

let nuevoObjeto = ({ titulo }) => {
    let objeto = {}
    objeto["titulos"] = titulo
    return objeto
}
let objetocreado = arrayPeliculas.map(nuevoObjeto)
console.log(objetocreado)
//console.log(arrayPeliculas.map(nuevoObjeto))