import {createApp} from 'vue'

import Root from './Root.vue'

const app = createApp(Root)

document.addEventListener('DOMContentLoaded', () => {
  app.mount('#vue-root')
})
