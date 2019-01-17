FROM microsoft/dotnet:2.1-aspnetcore-runtime AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM microsoft/dotnet:2.1-sdk AS build
WORKDIR /src
COPY src/Web/TravelApp.WebSPA/TravelApp.WebSPA.csproj src/Web/TravelApp.WebSPA/
RUN dotnet restore src/Web/TravelApp.WebSPA/TravelApp.WebSPA.csproj
COPY . .
WORKDIR /src/src/Web/TravelApp.WebSPA
RUN dotnet build TravelApp.WebSPA.csproj -c Release -o /app

FROM build AS publish
RUN dotnet publish TravelApp.WebSPA.csproj -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "TravelApp.WebSPA.dll"]
