const { spawn } = require('child_process');
function exec(execStr) {
  if (!execStr) {
    return;
  }
  const execArr = execStr.replace(/\s+/g, ' ').split(' ');
  const command = execArr.shift();
  const ls = spawn(command, execArr, {});
  ls.stdout.on('data', (data) => {
    console.log(`${data}`);
  });

  ls.stderr.on('data', (data) => {
    console.error(`${data}`);
  });
}
module.exports = { exec };
