/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
// Components
// Composables
import { createApp } from 'vue';
import App from './App.vue'

// import { MaskInput } from 'vue-3-mask';
import { MaskInput } from 'vue-3-mask';

const app = createApp(App)
import router from './router' // imports from router/index.js
import { createPinia } from 'pinia';
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import { fa } from 'vuetify/iconsets/fa'
import "@mdi/font/css/materialdesignicons.css";
import "@fortawesome/fontawesome-free/css/all.css";
const vuetify = createVuetify({
    components,
    directives,
        theme: {
          defaultTheme: 'dark'
        },
        icons: {
            defaultSet: "mdi",
            aliases,
            sets: {
              mdi,
              fa,
            },
          },
      
  })

app.use(createPinia())
app.use(router)
app.use(vuetify)
app.component('MaskInput', MaskInput);
app.mount('#app')

