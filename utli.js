const { spawn } = require('child_process');
function exec(execStr) {
  if (!execStr) {
    return;
  }
  return new Promise((resolve, reject) => {
    const execArr = execStr.replace(/\s+/g, ' ').split(' ');
    const command = execArr.shift();
    const ls = spawn(command, execArr, {stdio:'inherit'});
    // ls.on('data',(data)=>{
    //   console.log(data);
    // })
    // ls.stdout.on('data', (data) => {
    //   console.log(`${data}`);
      
    // });
    // ls.stderr.on('data', (data) => {
    //   console.error(`${data}`);
    //   reject(data);
    // });
    // ls.on('close', (code) => {
    //   resolve(code);
    // });
  });
}
module.exports = { exec };
