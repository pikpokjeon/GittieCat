import Vue from 'vue';
import App from './App.vue';
import { router } from '@/routes/index';
import { store } from '@/store/index';
// import axios from 'axios';
Vue.config.productionTip = false;
// axios.defaults.headers.common['Content-Type'] ='application/json';
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

// Vue.use(axios);

new Vue({
	render: h => h(App),
	router,
	store,
}).$mount('#app');
