FROM mcr.microsoft.com/mssql/server:2017-latest

LABEL author=pierrelebris
LABEL name=sql-server

COPY SqlCmdScript.sql SqlCmdScript.sql
COPY entrypoint.sh entrypoint.sh
COPY SqlCmdStartup.sh SqlCmdStartup.sh

ENV ACCEPT_EULA=Y
ENV MYSQL_SA_PASSWORD=Pass@word

EXPOSE 1433

CMD /bin/bash ./entrypoint.sh
