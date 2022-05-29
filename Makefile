SHELL = /bin/bash
.PHONY: build publish

checkout:
	# git checkout stages the checked-out files, we need undow this with git reset
	git --work-tree ./public checkout origin/master -- . && git reset

build:
	date > ./public/last-update.txt
	cp ./CNAME public
	cd hugo && make build
	cd latency && make build
	cd elements && make build

serve:
	cd public; python3 -m http.server

publish:
	date > ./public/last-update.txt
	git diff --quiet || exit 1 # Check if tree is ditry
	git symbolic-ref HEAD refs/heads/master
	git reset
	git --work-tree ./public add .
	git --work-tree ./public commit -m "publish"
	git symbolic-ref HEAD refs/heads/source
	git reset
	git push origin master
