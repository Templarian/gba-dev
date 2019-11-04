var colors = require('colors');

function error(msg) {
  write(msg, 'red');
}

function write(msg, color = [null]) {
  const msgVals = msg instanceof Array ? msg : [msg];
  const colorVals = color instanceof Array ? color : [color];
  if (msgVals.length !== colorVals.length) {
    error('DEV ERROR: write params wrong length!')
  }
  const outputs = [];
  msgVals.forEach((m, i) => {
    const c = colors[i];
    outputs.push(c ? c(m) : m);
  });
  console.log(outputs.join(''));
}

module.exports = {
  error,
  write
};