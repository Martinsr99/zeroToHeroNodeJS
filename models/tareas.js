const Tarea = require('./tarea');


class Tareas {

    _listado = {}

    get listadoArr(){
        
        const listado = []
        Object.keys(this._listado).forEach(key => {
            const tarea = this._listado[key];
            listado.push(tarea);
        })
        
        return listado
    }

    constructor() {

        this._listado = {}

    }

    borrarTarea(id){

        if(this._listado[id]){
            delete this._listado[id]
        }


    }

    cargarTareasFromArray(tareas = []){

        tareas.forEach(tarea => {
            this._listado[tarea.id] = tarea;
        })

    }

    crearTarea(desc){
        const tarea = new Tarea(desc);

        this._listado[tarea.id] = tarea;
    }

    listadoCompleto(){

        for (let i=0; i<Object.values(this._listado).length;i++){
            if(Object.values(this._listado)[i].completadoEn){
                console.log(`${String(i).green} :: ${Object.values(this._listado)[i].desc}`)
            } else{
                console.log(`${String(i).red} :: ${Object.values(this._listado)[i].desc}`)
            }
        }

    }

    listarPendientesCompletadas( completadas = true){
        this.listadoArr
        .filter( tarea => completadas ? tarea.completadoEn : !tarea.completadoEn )
        .forEach((tarea, i) => {
            const idx = `${i + 1}.`.green;
            const { desc, completadoEn } = tarea;
            const estado = (completadoEn)
                ? 'Completada'.green
                : 'Pendiente'.red;
            console.log(`${idx} ${desc} :: ${ completadas ? completadoEn : estado }`);
        });
    }

    toggleCompletadas( ids = [] ){

        ids.forEach( id => {

            const tarea = this._listado[id];

            if( !tarea.completadoEn ){
                
                tarea.completadoEn = new Date().toISOString()

            }

        })

        this.listadoArr.forEach( tarea => {

            if( !ids.includes(tarea.id)){

                this._listado[tarea.id].completadoEn = null;
                
            }

        })

    } 

}

module.exports = Tareas;