const {tablas} = require('./helpers/multiplicacion');
const argv = require('./config/yargs.js');


tablas(argv.b, argv.l, argv.h).then(nombreArchivo => {
    console.log('ARCHIVO CREADO');
    console.log(nombreArchivo);
})
    .catch(err=> {
         console.log(err);
    });



