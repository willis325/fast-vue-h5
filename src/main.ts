import { createApp } from 'vue';
import { Lazyload } from 'vant';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

import '@unocss/reset/normalize.css';
import 'vant/es/toast/style';
import '@/assets/style/base.css';
import 'virtual:uno.css';
import App from './App.vue';
import router from './router';

const pinia = createPinia();
const app = createApp(App);

const components = import.meta.glob('@/components/**/*.vue');
Object.keys(components).forEach((path) => {
  const filename = path.replace('/src/components/', '').replace('.vue', '');
  const name = filename.split('/').join('-');
  app.component(name, components[path]);
});

pinia.use(piniaPluginPersistedstate);
app.use(pinia);
app.use(router);
app.use(Lazyload, { lazyComponent: true });
app.mount('#app');
