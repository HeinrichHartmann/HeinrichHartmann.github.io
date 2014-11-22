#!/bin/bash

set -e # fail on error

git checkout source

jekyll build

git branch -D master
git checkout -b master
git add _site/
git commit -m "Added _site"
git filter-branch --subdirectory-filter _site/ -f
git push origin master -f

rm _site -r

git checkout source
