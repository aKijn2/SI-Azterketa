FROM ubuntu:latest

RUN apt-get update && apt-get install -y net-tools iputils-ping curl wget

RUN useradd -m admin

RUN mkdir -p /home/admin/{tools,notes,config}

RUN chown -R admin:admin /home/admin/*

RUN chmod 770 /home/admin/tools || true
RUN chmod 770 /home/admin/notes || true
RUN chmod 760 /home/admin/config || true
RUN chmod 700 /home/admin/tools/* || true

# Asegurémonos de que el directorio /home/admin/tools existe antes de escribir el script
RUN mkdir -p /home/admin/tools && echo "echo 'my tool is working'" > /home/admin/tools/mytool.sh

RUN chmod +x /home/admin/tools/mytool.sh

USER admin

CMD ["bash"]
