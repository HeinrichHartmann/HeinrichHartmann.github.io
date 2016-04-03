# was ./jekyll-run
serve:
	bundle exec jekyll serve -w --drafts

# was ./jekyll-update
update:
	bundle update

ruby-instsall:
	sudo apt-get install ruby rubygem-integration
	gem install bundler
	bundle

build:
	bundle exec jekyll build

check:
	if ! [ -z "`git status --porcelain`" ]; then echo "Working directory is not clean" && exit 1; fi

push: check
	echo "Pushing source"
	if [ ! -z "$(git status --porcelain)" ]; then echo "Working directory is not clean"; exit 1; fi
	git checkout source
	git push origin source

# ./publish.sh
publish: push build
	echo "Pushing _site"
	git branch -D master
	git checkout -b master
	git add _site/ -f
	git commit -m "Added _site"
	git filter-branch --subdirectory-filter _site/ -f
	git push origin master -f
	git checkout source
