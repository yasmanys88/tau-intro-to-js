var permitido = "Usuario Permitido"
var miFuncion = acceso => acceso
var persona = {
    nombre: "Pepe",
    miAutomovil: [
        pintura = {
            color: ["rojo", "azul"],
            precio: 20,
            marca: "PinturaFija"
        },
        vendedor = {
            nombre: "Vendedor Automovil",
            edad: 23,
            ayudantes: {
                nombres: ["Juan", "Felipe"],
                nivel: "A"
            }
        }
    ]
}

var miArray = ["Primero", 20202, true, 23.2, ["OtroArray", 20, miFuncion, persona], "valores"]
//Mostrando 1er Nombre de ayudante de vendedor
console.log(miArray[4][3].miAutomovil[1].ayudantes.nombres[0]);

