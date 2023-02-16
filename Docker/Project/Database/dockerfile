FROM mysql:latest

LABEL author="pierrelebris"

# Définition de l'utilisateur et du mot de passe pour la base de données
ENV MYSQL_USER=user \
    MYSQL_PASSWORD=password

ENV MYSQL_ROOT_PASSWORD=test

# Ajout d'un script SQL pour l'initialisation de la base de données
COPY SqlCmdScript.sql /docker-entrypoint-initdb.d/
COPY entrypoint.sh /docker-entrypoint-initdb.d/
COPY SqlCmdStartup.sh /docker-entrypoint-initdb.d/

RUN echo "CREATE DATABASE Project;" > /docker-entrypoint-initdb.d/SqlCmdScript.sql
RUN echo "CREATE USER 'myuser'@'%' IDENTIFIED BY 'mypassword';" >> /docker-entrypoint-initdb.d/SqlCmdScript.sql
RUN echo "GRANT ALL PRIVILEGES ON mydatabase.* TO 'myuser'@'%';" >> /docker-entrypoint-initdb.d/SqlCmdScript.sql

EXPOSE 1433