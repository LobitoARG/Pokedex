let fs = require("fs")

const leerArchivo = () => 
{
    let listaDeTareas =fs.readFileSync("./tareas.json", "utf-8");
    return JSON.parse(listaDeTareas);
}


const escribirJSON = (arrayDeTareas) =>
{
    let datosConvertidosDeArrayaJSON = JSON.stringify(arrayDeTareas)
    fs.writeFileSync("./tareas.json", datosConvertidosDeArrayaJSON, "utf-8")
    return 
}

const guardarTarea = (tarea) =>
{
    let archivosActuales = leerArchivo()
    archivosActuales.push(tarea)
    escribirJSON(archivosActuales)
    return
}

const filtrarPorEstado = (estado) =>
{
    let archivosActuales = leerArchivo();
    let arrayDeTareasEncontradas = archivosActuales.filter(function (elemento)
    {
        return elemento.estado === estado;
    })
    return arrayDeTareasEncontradas;
}

module.exports= {leerArchivo, guardarTarea,escribirJSON,filtrarPorEstado,filtrarPorEstado};

