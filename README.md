# Estructura inicial del proyecto
```
Objetivos:
    Entornos de pruebas para contenedores docker

Referencias:
    https://labs.play-with-docker.com

Repositorio:
    https://github.com/platzi/swarm
    https://github.com/platzi/docker

Docker:
    https://store.docker.com
    https://hub.docker.com        
```
# Ejecutar
```
1.- Clonar repositorio
        git clone repositorio

2.- En la ruta del proyecto ejecutar:
        $> playwithdocker/src
        $> npm install
        $> npm start
```
# Docker ejecucion
```
https://github.com/yogparra/playwithdocker.git

docker build -t ejemplodocke-01 .
docker images
docker run --name ejemplo-v1 -d -p 3070:3070 ejemplodocke-01
```