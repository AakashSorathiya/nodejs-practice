const fileSystem = require('fs');
const yargs = require('yargs');
const notes = require('./notes');
//const validator = require('validator');
//const chalk = require('chalk');

yargs.command({
  command: 'add',
  describe: 'Add Note',
  builder: {
    title: {
      describe: 'Title of a Note',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Body of a Note',
      demandOption: true,
      type: 'string',
    }
  },
  handler: function(argv) {
    notes.addNote(argv.title, argv.body);
  }
})

yargs.command({
  command: 'remove',
  describe: 'Remove Note',
  builder: {
    title: {
      describe: 'Title of a Note',
      demandOption: true,
      type: 'string'
    },
  },
  handler: function(argv) {
    notes.removeNote(argv.title);
  }
})

/*fileSystem.writeFileSync('sample.txt', 'First Line\n');
fileSystem.writeFileSync('sample.txt', 'Second Line\n');
fileSystem.appendFileSync('sample.txt', 'First Line\n');

console.log(getNotes());
console.log(validator.isAlpha('wwwmsufpin'));
console.log(chalk.blue('Blue'));
console.log(chalk.red.bgWhite.bold.italic('  Green'));
console.log(process.argv[2]);
fileSystem.appendFileSync('sample.txt', process.argv[3]);
console.log(getNotes());*/

//console.log(yargs.argv);
yargs.parse();