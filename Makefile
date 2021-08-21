build:
	cd hugo && make build

publish:
	# deployment is taken care of by GH actions
	git push origin source:source
