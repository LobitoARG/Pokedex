let fs = require("fs");
let {leerArchivo,guardarTarea,filtrarPorEstado} = require("./funcionesDeTareas.js")


let procesar = process.argv;
let comandoDos = procesar[2]
let comandoTres = procesar[3]

switch (comandoDos)
{
    case 'listar': 
    let listaDeTareas = leerArchivo();
    listaDeTareas.forEach(element => {
        console.log(element.titulo)
    });
    break;
    
    case 'crear':
    let nuevaTarea =
    {
        titulo:comandoTres,
        estado:"pendiente"
    }
    guardarTarea(nuevaTarea)
    console.log ('Tarea agregada exitosamente. Gracias')
    break;

    case 'filtrar':
        let estadoObtenido = comandoTres;
        let nuevoArrayDeTareasObtenidas = filtrarPorEstado(estadoObtenido);
        nuevoArrayDeTareasObtenidas.forEach(element =>{
            console.log(element.titulo)
        })
        break;
    
    case undefined: console.log ('Por favor, recuerde usar uno de los siguientes comandos: ' + "\n" + '1) listar' + "\n" + '2) crear' + "\n" + '3) filtrar')
    break;
    

    default: console.log ('No entiendo que necesitas, te recuerdo las opciones: ' + "\n" + '-------------------------' + "\n" + '1) listar: Visualizar todas las tareas actuales' + "\n" + '2) crear: Ingresar un nuevo titulo con estado pendiente' + "\n" + '3) filtrar: Visualizar las tareas actuales segun el estado ingresado')
    break;
}
