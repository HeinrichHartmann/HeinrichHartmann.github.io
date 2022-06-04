App.vue: app.js
	sed -i -n '1,/<script setup>/p;/<\/script>/,$$p' App.vue
	cat app.js | sed -i -e '/<script setup>/r /dev/stdin' App.vue
