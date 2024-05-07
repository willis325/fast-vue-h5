import { createApp } from 'vue';
import { Lazyload } from 'vant';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

import '@unocss/reset/normalize.css';
import 'vant/es/toast/style';
import '@/assets/style/base.css';
import 'virtual:uno.css';
import App from './App.vue';

const pinia = createPinia();
const app = createApp(App);

pinia.use(piniaPluginPersistedstate);
app.use(pinia);
app.use(Lazyload, { lazyComponent: true });
app.mount('#app');
