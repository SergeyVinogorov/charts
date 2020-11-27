import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

createApp(App).use(store).mount('#app')
// import { createApp } from 'vue'
// import App from './App.vue'

// const app = createApp(App)

// app.config.isCustomElement = tag => tag.startsWith('app-')
// app.use(store)

// app.config.globalProperties.customProperty = () => {}

// app.mount(App, '#app')
