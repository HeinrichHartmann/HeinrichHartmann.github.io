SHELL = /bin/bash

export AWS_SHARED_CREDENTIALS_FILE = ~/box/secrets/aws-credentials-hhcom

build:
	date > ./public/last-update.txt
	cd hugo && make build
	# Rebuilds of the individual sub-projects are not necessary, as the content of public is chcekd in
	# cd elements && make build
	# cd latency && make build

serve:
	cd public; python3 -m http.server

aws-deploy:
	aws s3 sync ./public 's3://heinrichhartmann.com'
	aws cloudfront create-invalidation --distribution-id E3VQL5EKZQ85E0 --paths "/*"
	git add -f ./public && git commit -m "Deployment $$(date -Is)" && git push

aws-diff:
	aws s3 sync 's3://heinrichhartmann.com'  ./public-diff
	diff --recursive --brief ./public ./public-diff

nix-build:
	nix-shell --command 'make build'

nix-serve:
	nix-shell --command 'make serve'
