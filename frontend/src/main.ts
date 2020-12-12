import { createApp } from 'vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import App from './App.vue';

library.add(faSearch);

const app = createApp(App);

app.component('FontAwesomeIcon', FontAwesomeIcon);

app.mount('#app');
