// const exportar = require("./controller")
import {suma,mult} from './controller.js';
import chalk from 'chalk';
console.log(chalk.bgGreen('Hello world!'));

const Suma = suma(15,12)
console.log(`la suma es ${Suma}`)

const Mult = mult(5,5);
console.log(`La multiplicacion es ${Mult}`)

// chalk
const log = console.log;


log(chalk.blue('la suma es: ') + chalk.green(`${Suma}`) + " y la mult es: "+chalk.green (`${Mult}`));