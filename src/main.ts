import { createApp } from 'vue';
import { Lazyload, allowMultipleToast } from 'vant';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import vconsole from 'vconsole';

import '@unocss/reset/normalize.css';
import 'vant/es/toast/style';
import 'vant/es/dialog/style';
import 'vant/es/image-preview/style';
import '@/assets/style/base.css';
import 'virtual:uno.css';
import App from './App.vue';
import router from './router';

const pinia = createPinia();
const app = createApp(App);

if (import.meta.env.MODE !== 'prod') new vconsole();
allowMultipleToast();

pinia.use(piniaPluginPersistedstate);
app.use(pinia);
app.use(router);
app.use(Lazyload, { lazyComponent: true });
app.mount('#app');
