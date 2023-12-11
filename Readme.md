```bash
#!/bin/bash
yum install git -y
yum install docker -y
groupadd docker
usermod -aG docker ec2-user
curl -L https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m) -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose
systemctl start docker.service
cd /opt && git clone https://github.com/cloco-akrit/express-nginx.git
chown -R ec2-user:ec2-user /opt/express-nginx
cd /opt/express-nginx && docker-compose build
cd /opt/express-nginx && docker-compose up
```
