<template>
	<card>
		<div>
			<h1>로그인 성공</h1>
			<h2>{{ query }}</h2>
		</div>
	</card>
</template>

<script>
import Card from '../common/Card.vue';
import axios from 'axios';

export default {
	components: { Card },
	data() {
		return {
			query: this.$route.query,
	
		};
	},
	mounted() {
		const data = {
			code : this.query.code,
			client_id: "0e9ce3e69ff338443e2c",
			client_secret: "bb84225728c32f251daa05631d4f32f143a7d790"
			};
		axios.post('/git/getToken',data)
					.then((data) => console.log(data))
					.catch((err)=>console.log(err))

	},
	methods: {

	},
};
</script>

<style></style>
