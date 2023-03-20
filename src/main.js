import { createApp } from "vue";
import App from "./App.vue";
import "mdb-vue-ui-kit/css/mdb.min.css";

import router from "./router/index.js";
// import store from "./store/store.js";

//vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
  })
  
  export default createVuetify({
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi,
      }
    },
  })

createApp(App).use(router).use(vuetify).mount("#app");
//createApp(App).use(router).mount("#app");
