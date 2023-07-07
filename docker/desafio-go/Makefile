all: build push

.PHONY: build
build:
	docker build -t alemos/fullcycle:latest .

.PHONY: push
push:
	docker push alemos/fullcycle:latest
clean:
	docker system prune -a
