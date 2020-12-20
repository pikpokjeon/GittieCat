<template>
	<article>Login code : {{ query }}</article>
</template>

<script>
import axios from 'axios';
// import Regist from './Regist';
export default {
	components: {
		// Regist,
	},
	data() {
		return {
			query: this.$route.query.code,
		};
	},
	mounted() {
		console.log('this.$route.query >', this.query);
		axios
			.post('http://52.79.191.158:8080/git/getToken', {
				code: this.$route.query.code,
			})
			.then(res => {
				console.log(res);
			})
			.catch(error => {
				console.log(error);
			});
	},
	// created(){

	// 		window.open(
	// 			'https://github.com/login/oauth/authorize?client_id=0e9ce3e69ff338443e2c&redirect_uri=http://localhost:8081/login',
	// 			"login"
	// 		)

	// }
};
</script>

<style lang="scss" scoped>
article {
	border: solid 1px red;
	padding: 50px;
}
</style>
