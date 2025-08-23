import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { i18n } from './i18n'

const app = createApp(App)

// minimal i18n via global property
app.config.globalProperties.$t = i18n.t

app.use(router)

// pointer-based frost effect variables
window.addEventListener('pointermove', (e) => {
    const x = e.clientX + 'px'
    const y = e.clientY + 'px'
    document.documentElement.style.setProperty('--mx', x)
    document.documentElement.style.setProperty('--my', y)
})

app.mount('#app')
