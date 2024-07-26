all: clean build push run

.PHONY: build
build:
	docker --debug build -t alemos/fullcycle:latest .

.PHONY: push
push:
	docker push alemos/fullcycle:latest

.PHONY: clean
clean:
	docker rmi alemos/fullcycle:latest &>/dev/null

.PHONY: run
run:
	docker run --rm -it alemos/fullcycle:latest
