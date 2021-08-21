SHELL = /bin/bash
.PHONY: build publish

build:
	mkdir -p public
	date > ./public/last-update.txt
	cp ./CNAME public
	cd hugo && make build

publish: build
	git status -s
	git symbolic-ref HEAD refs/heads/master
	git reset
	git --work-tree ./public add .
	git --work-tree ./public commit -m "publish"
	git --work-tree ./public push origin master
	git symbolic-ref HEAD refs/heads/source
	git reset
