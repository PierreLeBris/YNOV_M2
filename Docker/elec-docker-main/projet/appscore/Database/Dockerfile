
FROM mcr.microsoft.com/mssql/server:2017-latest

ENV SA_PASSWORD=Pass@word
ENV ACCEPT_EULA=Y

COPY . .

RUN chmod +x ./SqlCmdStartup.sh

ENTRYPOINT ./entrypoint.sh