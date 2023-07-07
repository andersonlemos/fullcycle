# Desafio-go

Containerized golang aplication, when initialize shows "Fullcycle Rocks!!" message, in terminal.

Docker Hub image link: [Dockerhub](https://hub.docker.com/r/alemos/fullcycle)
## Dependencies

|library|version|
|---|---|---|
|golang|[1.20](https://go.dev/dl/)|
|make (*for unix systems.if you want to use automated build*)|GNU Make 4.3|
|docker|24.0.2|

**NOTE:** *The project was written in golang and using asdf package manager, so you will need to [install](https://github.com/asdf-vm/asdf).*

**NOTE:** *If you want to use automated build with Docker, so you need to [install](https://docs.docker.com/get-docker/) on your system.*

## Bulding the application

Commands to build and install the application:

In Unix systems:

- You can type `make` command, in root folder, on terminal, to build and push container to docker hub.

Example:

```bash
make
```

Manual build or Windows systems:

In root folder:

```bash
docker build -t alemos/fullcycle:latest .
```

## Running after build

Running application use commands:

```bash
docker run -rm -it alemos/fullcycle:latest
```
