const meow = require('meow');
const pkg = require('../package.json');
const pwdbRepl = require('./repl');

const CLI_HELP = `
  USAGE
    $ pwdb [filename]

  OPTIONS
    -t, --timeout   Set REPL timeout in seconds. Defaults to 3
    -h, --help      Displays this
    -v, --version   Displays the REPL and pwdb versions
`;

const cli = meow({
  help: CLI_HELP,
  version: `pwdb v${pkg.dependencies.pwdb} - REPL v${pkg.version}`,
}, {
  alias: {
    t: 'timeout',
    h: 'help',
    v: 'version',
  },
});

const filename = cli.input[0];
pwdbRepl(filename, cli.flags).catch(console.error);
