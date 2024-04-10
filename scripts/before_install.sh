#!/bin/bash
curl -sL https://rpm.nodesource.com/setup_16.x | sudo -E bash -
sudo yum -y install nodejs npm
sudo yum install -y gcc-c++ make
# Install CodeDeploy Agent
sudo yum install -y ruby
sudo yum install -y wget
cd /home/ec2-user
wget https://aws-codedeploy-us-east-1.s3.us-east-1.amazonaws.com/latest/install
chmod +x ./install
./install auto
cd /home/ec2-user/
sudo mkdir server_based_app
cd /home/ec2-user/server_based_app/
