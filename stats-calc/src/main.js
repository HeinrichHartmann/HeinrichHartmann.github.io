import { createApp } from 'vue'
import App from './App.vue'
import VueScreen from 'vue-screen'

import './assets/site.css';

createApp(App)
  .use(VueScreen, 'bootstrap')
  .mount('#app')
