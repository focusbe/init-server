#!/usr/bin/env node
const {exec} = require('shelljs');
function main(){
  console.log('更新yum');
  exec('yum upgrade -y');
  exec('yum update -y');
  
  console.log('安装Nginx');
  exec('sudo yum install epel-release');
  exec('sudo yum install nginx');
  exec(`sudo firewall-cmd --permanent --zone=public --add-service=http 
  sudo firewall-cmd --permanent --zone=public --add-service=https
  sudo firewall-cmd --reload`);

}
main();