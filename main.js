#!/usr/bin/env node
const { exec } = require('./utli');
async function main() {
  console.log('---更新yum---');
  await exec('yum upgrade -y');
  await exec('yum update -y');
  console.log('---安装Nginx---');
  await exec('sudo yum install epel-release');
  await exec('sudo yum install nginx');
  console.log('---设置防火墙---');
  await exec('sudo firewall-cmd --permanent --zone=public --add-service=http');
  await exec('sudo firewall-cmd --permanent --zone=public --add-service=https');
  await exec('sudo firewall-cmd --reload');

}
main();
