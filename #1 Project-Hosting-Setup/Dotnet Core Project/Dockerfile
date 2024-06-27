

  ### MEGA API SERVER

  #############################################################
  ########### STAGE 1 - BUILD ##################################
  ############################################################## 

  FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build-env

  ENV pname=mega_api

  WORKDIR /${pname}
  # Copy csproj and restore as distinct layers
  COPY . ./

  # Copy everything else and build
  WORKDIR ./MegaEvents.Services
  RUN dotnet restore
  RUN dotnet publish -c Release -o /${pname}/build

  ############################################################
  ########### STAGE 2 - RUN ###################################
  #############################################################
  FROM mcr.microsoft.com/dotnet/aspnet:6.0

  ### MAINTAINER AND PROJECT TAGS
  LABEL developer="Evvo-IN"
  LABEL packager="Evvo-SG"
  LABEL release-date="17-01-2024"
  LABEL environment="PRODUCTION"
  LABEL app-name="MEGA_API_SERVER"
  LABEL project_name="MEGA_ADVENTURE"

  ENV APP_USER=apiuser
   WORKDIR /
   RUN mkdir MegaEventReports
   RUN mkdir MegaEventImages
   RUN apt-get update && apt-get upgrade -y && apt-get install -y curl

  ENV run_folder=/api-server/build
  ENV build_folder=/mega_api/build
  ENV run_file=MegaEvents.Services

  # Expose port
EXPOSE 5007

  #   WORKDIR /api-server/build
  WORKDIR ${run_folder}

  COPY --from=build-env ${build_folder} .

ENTRYPOINT ["dotnet", "MegaEvents.Services.dll"]

