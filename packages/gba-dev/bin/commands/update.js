var yargsInteractive = require("yargs-interactive");

module.exports = function update() {
    yargsInteractive()
      .usage("$0 [args]")
      .interactive({
          interactive: { default: true },
          yn: {
              type: 'confirm',
              describe: 'Are you sure you want to update devkitpro (this could take a few minutes)?',
              prompt: 'always',
              default: true
          }
      }).then(({ yn }) => {
          if (yn) {
              
          }
      });
  }