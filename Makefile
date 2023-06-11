SHELL = /bin/bash

export AWS_SHARED_CREDENTIALS_FILE = ~/box/secrets/aws-credentials-hhcom

checkout:
	# git checkout stages the checked-out files, we need undow this with git reset
	git --work-tree ./public checkout origin/master -- . && git reset

build:
	date > ./public/last-update.txt
	cd hugo && make build
	# Rebuilds of the individual sub-projects are not necessary, as the content of public is chcekd in
	# cd elements && make build
	# cd latency && make build

serve:
	cd public; python3 -m http.server

deploy:
	aws s3 sync ./public 's3://heinrichhartmann.com'
	aws cloudfront create-invalidation --distribution-id E3VQL5EKZQ85E0 --paths "/*"
	git add -f ./public && git commit -m "Deployment $$(date -Is)" && git push

nix-build:
	nix-shell --command 'make build'

nix-serve:
	nix-shell --command 'make serve'
