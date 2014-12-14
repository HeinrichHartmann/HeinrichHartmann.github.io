#!/bin/bash

set -e # fail on error

if [ ! -z "$(git status --porcelain)" ]; then
    # working directory not clean
    echo "Working directory is not clean"
    exit 1
fi

git checkout source

echo "Pushing source branch to github"
git push origin source


echo "Building source tree"
jekyll build > /dev/null

git branch -D master
git checkout -b master
git add _site/ -f
git commit -m "Added _site"
git filter-branch --subdirectory-filter _site/ -f
git push origin master -f
git checkout source
