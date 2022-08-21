require('dotenv').config()

const { leerInput, inquirerMenu, pausa, listarLugares } = require("./helpers/inquirer")
const Busquedas = require("./models/busquedas")

const main = async () => {
    
    const busquedas = new Busquedas();
    let opt;

    do{

        opt = await inquirerMenu();

        switch (opt) {

            case 1:
                //mostrar mensaje
                const lugar = await leerInput('Ciudad: ');
                //Buscar los lugares
                const lugares = await busquedas.ciudad(lugar);
                
                //Seleccionar el lugar
                const id = await listarLugares(lugares);
                const lugarSel = lugares.find( l => l.id === id)

                //Clima data received

                //Show results
                console.log('\nInformación del lugar: \n'.green)
                console.log('Ciudad: ',lugarSel.nombre)
                console.log('Lat: ',lugarSel.lat)
                console.log('Lng: ', lugarSel.lng)
                console.log('Temperatura: ')
                console.log('Mínima: ')
                console.log('Máxima: ')

            break;

            case 2:


            break;

        }

        if ( opt !==0 ) await pausa();

    } while ( opt !== 0)
}

main();