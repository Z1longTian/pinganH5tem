import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router' // router

// styles
import '@unocss/reset/tailwind.css' // style resets
import 'uno.css' // unocss
import '@/assets/css/index.scss' // main  style


const app = createApp(App)

app.use(router)

app.mount('#app')
