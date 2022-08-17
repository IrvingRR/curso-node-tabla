const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
    try {

        let salida = '';
        let consola = '';

        for(let i = 1; i <= hasta; i++) {
            consola += `${colors.blue(base)} ${colors.red('X')} ${colors.blue(i)} ${colors.cyan('=')} ${colors.green(base * i)}\n`;
            salida += `${base} X ${i} = ${ base * i }\n`;
        }

        if(listar) {
            console.log('============================'.yellow);
            console.log(`Tabla del:`.yellow, colors.green(base));
            console.log('============================'.yellow);

            console.log(consola);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
            
        console.log(`tabla-${base}.txt created successfully!`.magenta);

    } catch(error) {
        console.log('No se pudo crear el archivo porque surgio el siguiente error'.red, colors.bold(error));
    }
}

module.exports = { crearArchivo };