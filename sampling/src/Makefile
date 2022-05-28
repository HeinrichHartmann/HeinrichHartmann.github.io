content:
	#	marked content.md > content.html
	sed -i -n '1,/START_MDCONTENT/p;/END_MDCONTENT/,$$p' App.vue
	marked content.md | sed -i -e '/START_MDCONTENT/r /dev/stdin' App.vue 
