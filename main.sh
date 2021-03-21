#!/bin/sh
yum upgrade -y
yum update -y
yum install nodejs -y
node ./index.js
