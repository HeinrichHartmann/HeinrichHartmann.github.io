python-serve:
	cd _site; python -m SimpleHTTPServer 4444

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

docker-serve:
	docker run --rm -v $$(pwd):/src -it -p 4000:4000 hh-blog-build-image make serve

docker-build:
	docker run --rm -v $$(pwd):/src -it hh-blog-build-image make build

docker-build-drafts:
	docker run --rm -v $$(pwd):/src -it hh-blog-build-image make build-drafts

docker-build-watch:
	docker run --rm -v $$(pwd):/src -it hh-blog-build-image make build-watch

docker-make:
	docker run --rm -v $$(pwd):/src  -it -p 4000:4000 hh-blog-build-image make $(TARGET)

docker-jekyll:
	docker run --rm -v $$(pwd):/src -it -p 4000:4000 hh-blog-build-image bundle exec jekyll $(CMD)

nbconvert:
	(cd _notebooks; \
		jupyter-nbconvert --config nbc.py 2018-09-02-Latency-SLOs-done-right.ipynb && \
		sed -i 's|../images|/images|' 2018-09-02-Latency-SLOs-done-right.md )
	cp _notebooks/2018-09-02-Latency-SLOs-done-right.md _posts/
		# _notebooks/2018-09-02-Latency-SLOs-done-right.ipynb
		#--to markdown --template=~/host/home/git/nbconvert-jekyll/jekyll.tpl \
		#--NbConvertApp.output_files_dir="../images/" \
		# --output ../_posts/2018-09-02-Latncy-SLOs-done-right.md
		# --NbConvertApp.output_base="2018-09-02-Latency-SLOs-done-right"
		# --ExtractOutputPreprocessor.enabled=False
		# --stdout > _posts/2018-09-02-Latncy-SLOs-done-right.md

.PHONY: pdf
pdf:
	cat _posts/2018-09-04-From-Academia-to-Data-Science.md \
	| sed 's/^##/#/' \
	| sed 's/{%.*%}//' \
	| PATH=$$PATH:/Library/TeX/texbin pandoc --pdf-engine=pdflatex -f markdown -t latex --template=./_templates/wenneker.latex -o "pdf/Heinrich Hartmann - From Academia to Data Science (2018).pdf"
