#!/bin/bash
sudo npm install pm2 -g
sudo pm2 kill
cd /home/ec2-user/server_based_app/frontend/
sudo npm install --force
sudo npm install --save create-react-app react-scripts --force
cd /home/ec2-user/server_based_app/backend/
sudo npm install --force
sudo npm install --save create-react-app react-scripts --force