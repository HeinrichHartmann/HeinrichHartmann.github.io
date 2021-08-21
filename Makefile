SHELL = /bin/bash
.PHONY: build publish

build:
	# git checkout stages the checked-out files, we need undow this with git reset
	git --work-tree ./public checkout master -- . && git reset
	date > ./public/last-update.txt
	cp ./CNAME public
	cd hugo && make build

publish: build
	git diff --quiet || exit 1 # Check if tree is ditry
	git symbolic-ref HEAD refs/heads/master
	git reset
	git --work-tree ./public add .
	git --work-tree ./public commit -m "publish"
	git symbolic-ref HEAD refs/heads/source
	git reset
	git push origin master
