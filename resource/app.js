const chalk = require('chalk');
const log = console.log;

function displayInfo() {
    log(chalk.white.underline.bold('English to Morse Code Converter'));
    log('\n');
    log(chalk.dim('Welcome to the English to Morse Code converter'));
    log(chalk.dim('Please type in the word or sentence you want to convert to morse code.\nTo exit, hit enter.'));
    log(chalk.red('NOTE: ') + chalk.italic.yellow('This application is case insensitive.'));
    log('\n');
}

function displayData(value) {
    if (value.includes('Invalid Character:')){
        log(`${chalk.red.bold('  Morse:')} ${chalk.italic(value)}`);
    } else {
        log(`${chalk.yellow.bold('  Morse:')} ${value}`);
    }
    log('\n');
}

module.exports = {
    displayInfo,
    displayData
}