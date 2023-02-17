FROM mcr.microsoft.com/dotnet/core/sdk:2.1-stretch

LABEL author="pierrelebris"

WORKDIR /src

COPY D:\YNOV_M2\Docker\elec2\projet\appscore\Services\Applicant.api /src/Services/Applicant.api/
COPY D:\YNOV_M2\Docker\elec2\projet\appscore\Foundation\Events /src/Foundation/Events/

RUN dotnet restore /src/Services/Applicant.api/applicant.api.csproj 
RUN dotnet restore /src/Foundation/Events/Events.csproj

