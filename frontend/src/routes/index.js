import Vue from 'vue';
import VueRouter from 'vue-router';
import Profile from '@/views/Profile.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			component: Profile, //우선 개발해야 하는 페이지를 루트로
		},
	],
});
