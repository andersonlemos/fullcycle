FROM golang:alpine AS builder
WORKDIR /src
COPY ./src /src/
RUN go build -o /out/build .

FROM scratch AS stage
WORKDIR /root/
COPY  --from=builder /out/build ./
ENTRYPOINT ["./build"]