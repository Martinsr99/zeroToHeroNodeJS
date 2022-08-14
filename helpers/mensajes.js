const { resolve } = require('path');

require('colors');

const mostrarMenu = () => {


    return new Promise((resolve, reject) => {


        console.clear();
        console.log('==================================='.green)
        console.log(' Seleccione una opción '.green)
        console.log('===================================\n'.green)

        console.log('1. Crear tarea');
        console.log('2. Listar tarea');
        console.log('3. Listar tareas completadas');
        console.log('4. Listar tareas pendientes');
        console.log('5. Completar tarea(s)');
        console.log('6. Borrar tarea');
        console.log('0. Exit \n');

        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readLine.question('Seleccione una opción: ', (opt) => {
            readLine.close();
            resolve(opt);
        })
    });

}

const pausa = () => {

    return new Promise((resolve, reject) => {

        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readLine.question(`\nPresione ${'ENTER'.green} para continuar\n`, (opt) => {
            console.log(opt)
            readLine.close();
            resolve(opt);
        })
    });
}


module.exports = {
    mostrarMenu,
    pausa
}