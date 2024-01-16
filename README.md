# 1. Lehenengo Commita
Lehen commita egiteko, izena jarri readme-an.

# 2. Webgunea Sortu
Webgunea sortzeko, `git clone "direktorioa"` komandoa erabili.

# 3. Web Zerbitzariaren Docker Irudia Prestatu
Lehenik eta behin, nire repositorioan `Dockerfile` bat sortu. Ondoren, hurrengo agindua gehitu:

```Dockerfile
FROM httpd:latest
EXPOSE 80
```

Ondoren gordeko dugu eta hurrengo komandoak sartuko ditugu gure direktorioko terminalean:
```
docker build -t my-apache2 .
docker run -p 8080:80 my-apache2
```

# 4 Docker compose erabiltzen
Oraintxe egin beharrekoa da docker-compose.yml fitxategia sortzea gure repositorian. Gero, barruan hurrengo agindua gehitu:
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
Garrantzitsua da volumes-ean gure path ondo idaztea, bestela errorea emango du.

# 5 Docker compose erabiltzen
Lehenik, Dockerfile bat sortu behar da beharrezko komandoekin; komandoak Dockerfile barruan aurkituko dituzu. Gero, hurrengo komandoa exekutatu docker build -t kontuak:azterketa .. Honek sortuko du kontainera, non administratzaile erabiltzailea erabiliko du. Kontainera barruan sartzeko, bash komandoa erabiliz:
- docker run -it kontuak:azterketa bash
