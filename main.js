#!/usr/bin/env node
const { exec } = require('./utli');
function main() {
  console.log('---更新yum---');
  exec('yum upgrade -y');
  exec('yum update -y');
  console.log('---安装Nginx---');
  exec('sudo yum install epel-release');
  exec('sudo yum install nginx');
  console.log('---设置防火墙---');
  exec('sudo firewall-cmd --permanent --zone=public --add-service=http');
  exec('sudo firewall-cmd --permanent --zone=public --add-service=https');
  exec('sudo firewall-cmd --reload');
  
}
main();
