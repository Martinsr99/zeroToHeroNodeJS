const { leerInput, inquirerMenu, pausa } = require("./helpers/inquirer")
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
                console.log(lugar);
                //Buscar los lugares

                //Seleccionar el lugar

                //Clima data received

                //Show results
                console.log('\nInformación del lugar: \n'.green)
                console.log('Ciudad: ')
                console.log('Lat: ')
                console.log('Lng: ')
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