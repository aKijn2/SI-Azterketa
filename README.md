# Lehenengo kommita
lehen commita, readme-n izena jarrita

# Webgunea sortu
Erabili dudna komando izan da git clone "direktorioa".

# Web zerbitzariariaren Docker irudia prestatu
Lehenik eta behin egin dudana izan da nire repositorioan sortu Dockerfile bat. Ondoren egin dudana izan da ezarri hurrengo agindua: 
FROM httpd:latest
EXPOSE 80

Ondoren gordeko dugu eta hurrengo komandoak sartuko ditugu gure direktorioko terminalean:
docker build -t my-apache2 .
docker run -p 8080:80 my-apache2


