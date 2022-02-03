
const yargs = require('yargs');
const argv = yargs
    .command(
        'saludo',
        'Comando para saludar',
        {
            nombre: {
                describe: 'Argumento para definir tu nombre',
                demand: true,
                alias: 'n',
            },
        },
        (args) => {
            console.log(`¡Saludos cordiales ${args.nombre}, espero que tengas un excelente día`)
        }
    )
    .help().argv