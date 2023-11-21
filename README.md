# 1 Lehenengo kommita
lehen commita, readme-n izena jarrita

# 2 Webgunea sortu
Erabili dudna komando izan da git clone "direktorioa".

# 3 Web zerbitzariariaren Docker irudia prestatu
Lehenik eta behin egin dudana izan da nire repositorioan sortu `Dockerfile` bat. Ondoren egin dudana izan da ezarri hurrengo agindua: 

```
FROM httpd:latest
EXPOSE 80
```

Ondoren gordeko dugu eta hurrengo komandoak sartuko ditugu gure direktorioko terminalean:
```
docker build -t my-apache2 .
docker run -p 8080:80 my-apache2
```

# 4 Docker compose erabiltzen
Bueno orain egin beharko duguna izango da sortzea docker-compose.yml fitxategia gure repositorian, ondoren barruan hurrengo agindua jarriko diogu:
```
version: '3.9'
services:
  apache:
    image: httpd:latest
    container_name: my-apache-app
    ports:
      - '8080:80'
    volumes:
      - "C:/Users/1ag3.achralla/Desktop/SI Azterketa:/usr/local/apache2/htdocs"
```
Garrantxixia izango da volumes-ean gure path ondo idaztea bestela errorea emango digu.


# 5 Docker compose erabiltzen
Lehenik sortuko dugu Dockerfile bat beharrezko komandoekin, komandoak Dockerfile barruan aurkitu dezakezu. Ondoren hurrengo komandoa erabiliko dugu `docker build -t kontuak:azterketa .` horrek egingo duena izango da kontainera sortu non amdin erabiltzailea erabiliko du. Kontenairuaren barruan sartzeko bash komandoa erabiliz:
`docker run -it kontuak:azterketa bash`