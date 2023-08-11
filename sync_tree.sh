#!/bin/sh

git subtree "$1" --prefix=ddd/fullcycle-desafio-ddd-patterns fullcycle-desafio-ddd-patterns main
git subtree "$1" --prefix=docker/fullcycle-desafio-go fullcycle-desafio-go main
git subtree "$1" --prefix=docker/fullcycle-nginx-with-nodejs fullcycle-nginx-with-nodejs main


