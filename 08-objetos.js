var user = "Yasmany"

var miObjeto = {
    //clave : valor
    nombre: "NombreObjeto",
    edad: 20,
    importante: true,
    texto: `Usuario ${user}`,
    miFuncion: (a, b) => {
        console.log(`El objeto con nombre: ${miObjeto.nombre} tiene el usuario ${user}`)
        return a + b
    },
    otroObjeto: {
        nombre: "ObjetoYasmany",
        sexo: "Masculino"
    },
    fecha: new Date()
}
//console.log(miObjeto.miFuncion(2, 2))
//console.log(miObjeto.otroObjeto.nombre);
//console.log(miObjeto.fecha);
var { nombre } = miObjeto //Desestructuracion de un objeto
//console.log(nombre)

var otraFuncion = ({ texto }, { edad }) => {
    console.log(texto);
    console.log(edad);
}
otraFuncion(miObjeto, miObjeto)