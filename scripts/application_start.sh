#!/bin/bash
cd /home/ec2-user/server_based_app/frontend/
sudo pm2 start ./node_modules/react-scripts/scripts/start.js --name "whizlabs-frontend" --watch
sudo pm2 startup
sudo pm2 save
cd /home/ec2-user/server_based_app/backend/
sudo pm2 start ./app.js --name "whizlabs-backend" --watch
sudo pm2 startup
sudo pm2 save