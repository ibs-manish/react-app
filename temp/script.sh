#!/bin/sh

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
source ~/.bashrc  
nvm install 18  
nvm use 18     

node --version 
npm --version

npm install -g pm2
npm install -g yarn

yarn install 
yarn build
pm2 reload all --update-env

