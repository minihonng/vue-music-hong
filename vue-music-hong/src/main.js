import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import loadingDirective from '@/components/base/loading/directive'
import lazyPlugin from 'vue3-lazy'

//引入全局样式
import "@/assets/scss/index.scss"

createApp(App).use(store).use(router).use(lazyPlugin, { loading: require('@/assets/images/default.png') }).directive('loading', loadingDirective).mount('#app')