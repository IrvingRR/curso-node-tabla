const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    description: 'Indicate the number to multiply'
                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    description: 'Shows the multiplication table of the base'
                })
                .option('h', {
                    alias: 'hasta',
                    type: 'number',
                    description: 'Indicate until what number is going to multiply',
                    default: 10
                })
                .check((argv, options) => {
                    if(isNaN(argv.b)) {
                        throw 'The base must be a number';
                    }

                    return true;
                })
                .argv;

module.exports = argv;