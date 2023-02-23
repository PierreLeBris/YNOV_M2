FROM mcr.microsoft.com/mssql/server:2017-latest

LABEL author=pierrelebris
LABEL name=sql.data

# COPY entrypoint.sh entrypoint.sh
# COPY SqlCmdScript.sql SqlCmdScript.sql
# COPY SqlCmdStartup.sh SqlCmdStartup.sh

# ENV ACCEPT_EULA=Y
# ENV MYSQL_SA_PASSWORD=Pass@word

# RUN chmod +x ./SqlCmdStartup.sh

# CMD /bin/bash ./entrypoint.sh
EXPOSE 1433

ENV SA_PASSWORD=Pass@word
ENV ACCEPT_EULA=Y

COPY . .

RUN chmod +x ./SqlCmdStartup.sh

ENTRYPOINT ./entrypoint.sh