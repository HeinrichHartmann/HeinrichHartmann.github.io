mdcontent:
	sed -i -n '1,/START_MDCONTENT/p;/END_MDCONTENT/,$$p' ./public/index.html
	marked content.md | sed -i -e '/START_MDCONTENT/r /dev/stdin' ./public/index.html 

build: mdcontent
	npm run build

serve:
	npm run serve
