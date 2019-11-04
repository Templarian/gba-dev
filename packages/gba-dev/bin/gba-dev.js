#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const yargsInteractive = require("yargs-interactive");

const output = require('./helpers/output');
const update = require('./commands/update');
const build = require('./commands/build');
const launch = require('./commands/launch');

const options = {};

yargsInteractive()
  .usage("$0 <command> [args]")
  .interactive(options)
  .then(result => {
    const args = result['_'];
    const command = args.length ? result['_'][0] : null;
    switch (command) {
      case 'start':
        build();
        launch();
        break;
      case 'launch':
        launch();
        break;
      case 'build':
        build();
        break;
      case 'update':
        update();
        break;
      default:
        output.write(
          ['Unknown command! Use ', '--help', '. Debug:'],
          [null, 'green', null]
        );
        output.error(result['_'][0], JSON.stringify(result));
    }
  });

  // pacman -Syu