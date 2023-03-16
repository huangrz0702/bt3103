import { createApp } from 'vue'
import App from './App.vue'
import 'mdb-vue-ui-kit/css/mdb.min.css';

import router from './router/index.js'

createApp(App).use(router).mount('#app')
