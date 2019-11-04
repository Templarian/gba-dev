const path = require('path');
const { exec } = require('child_process');

const output = require('../helpers/output');

function verifyComamnds() {
  exec('which arm-none-eabi-gcc', (err, stdout, stderr) => {
    if (err) {
      output.error('Troubleshoot:');
      output.error('1. Please ensure devkitpro is installed.');
      output.error('   - During install make sure GBA was selected.');
      output.error('2. Ensure the path variable is set.');
      output.error('   - C:\\devkitPro\\devkitARM\\bin');
      output.error('3. Restart VS Code and Terminals.')
      process.exit(1);
      return;
    }
  });
}

module.exports = function build() {
  // Verify Commands
  verifyComamnds();
  // Run src/main.ts -> build/main.c
  // ..
  // Build build/main.c -> build/main.o
  const buildFolder = path.join(process.cwd(), 'build');
  const mainC = path.join(buildFolder, 'main.c');
  const mainO = path.join(buildFolder, 'main.o');
  const mainElf = path.join(buildFolder, 'main.elf');
  const mainGba = path.join(buildFolder, 'main.gba');
  exec(`arm-none-eabi-gcc -c "${mainC}" -mthumb-interwork -mthumb -O2 -o "${mainO}"`, (err, stdout, strerr) => {
    if (err) {
      output.error('Failed build/main.c -> build/main.o:');
      output.write(strerr);
      output.write(stdout);
      process.exit(1);
    }
  });
  // Build build/main.o -> build/main.elf
  exec(`arm-none-eabi-gcc "${mainO}" -mthumb-interwork -mthumb -specs=gba.specs -o "${mainElf}"`, (err, stdout, strerr) => {
    if (err) {
      output.error('Failed to build/main.o -> build/main.elf:');
      output.write(strerr);
      output.write(stdout);
      process.exit(1);
    }
  });
  // Build build/main.o + build/main.elf -> build/main.gba
  exec(`arm-none-eabi-objcopy -v -O binary "${mainElf}" "${mainGba}"`, (err, stdout, strerr) => {
    if (err) {
      output.error('Failed to build/main.o + build/main.elf -> build/main.gba:');
      output.write(strerr);
      output.write(stdout);
      process.exit(1);
    }
  });
  // Run Build
  output.write('Build Complete', 'green');
}