const { describe } = require('yargs');

const argv = require('yargs')
        .option('b',{
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe:'es la base que se va a usar en la multiplicacion'
        })
        .check((argv, options) => {
            if (isNaN(argv.b)){
                throw 'la base tiene que ser un numero';
            }
            return true;
        })
        .option('l',{
            alias: 'listar',
            type: 'boolean',
            default: 'false',
            describe: 'muestra la multiplicacion en consola'
            })
        .option('h',{
                alias: 'hasta',
                type: 'number',
                default: 10,
                describe: 'indica el limite de la multiplicacion'
                })
                .argv;



module.exports= argv;