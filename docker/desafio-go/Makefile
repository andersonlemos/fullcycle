all: build push

.PHONY: build
build:
	docker build -t alemos/desafio-go:latest .
push:
	docker push alemos/desafio-go:latest
clean:
	docker system prune -a
