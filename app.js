const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();
// console.log(argv);

crearArchivo(argv.base, argv.l, argv.h);