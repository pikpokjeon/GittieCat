import Vue from 'vue';
import VueRouter from 'vue-router';
import Profile from '@/views/Profile.vue';
import Login from '@/components/loginTest/Login.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			component: Profile, //우선 개발해야 하는 페이지를 루트로
		},
		{
			path: '/login',
			component: Login, //깃헙 로그인 연동후 리다이렉트 되는 곳 (추가정보 입력)
		},

	],
});
