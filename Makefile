serve:
	bundle exec jekyll serve --host 0.0.0.0 --watch --drafts --future --incremental --verbose

serve-static:
	(cd _site; python3 -m http.server 4000)

update:
	bundle update

ruby-instsall:
	sudo apt-get install ruby rubygem-integration
	gem install bundler
	bundle

build:
	bundle exec jekyll build --future --verbose

build-drafts:
	bundle exec jekyll build --future --drafts --verbose

build-watch:
	bundle exec jekyll build --future --watch --incremental --verbose

check:
	if ! [ -z "`git status --porcelain`" ]; then echo "Working directory is not clean" && exit 1; fi

push: check
	echo "Pushing source"
	if [ ! -z "$(git status --porcelain)" ]; then echo "Working directory is not clean"; exit 1; fi
	git checkout source
	git push origin source

# cf http://clontz.org/blog/2014/05/08/git-subtree-push-for-deployment/
publish: docker-build
	git add _site/
	git commit -m "Added _site"
	git subtree push --prefix _site origin master

docker-create:
	docker build -t hh-blog-build-image .

docker-serve: docker-create
	docker run --rm -v $$(pwd):/src -it -p 4000:4000 hh-blog-build-image make serve

docker-build: docker-create
	docker run --rm -v $$(pwd):/src -it hh-blog-build-image make build

docker-build-drafts: docker-create
	docker run --rm -v $$(pwd):/src -it hh-blog-build-image make build-drafts

docker-build-watch: docker-create
	docker run --rm -v $$(pwd):/src -it hh-blog-build-image make build-watch

docker-make:
	docker run --rm -v $$(pwd):/src -it hh-blog-build-image make $(TARGET)

docker-jekyll:
	docker run --rm -v $$(pwd):/src -it hh-blog-build-image bundle exec jekyll $(CMD)
