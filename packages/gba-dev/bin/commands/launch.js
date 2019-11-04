const path = require('path');
const { exec } = require('child_process');

const output = require('../helpers/output');

module.exports = function () {
  const platform = process.platform;
  const arch = process.arch;
  const visualboy = path.join(process.cwd(), 'node_modules', 'gba-dev', 'node_modules', 'gba-dev-win64', 'visualboyadvance-m.exe');
  const buildFolder = path.join(process.cwd(), 'build');
  const mainGba = path.join(buildFolder, 'main.gba');
  if (platform === 'win32' && arch === 'x64') {
    exec(`"${visualboy}" "${mainGba}"`, (err, stdout, strerr) => {
      if (err) {
        output.error('Failed to launch build/main.gba:');
        output.write(`"${visualboy}" "${mainGba}"`);
        output.write(strerr);
        output.write(stdout);
        process.exit(1);
      }
    });
  } else {
    console.log('Not Supported: Install visualboyadvance and open /build/main.gba')
  }
}