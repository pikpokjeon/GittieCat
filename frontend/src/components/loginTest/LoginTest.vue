<template>
	<card>
		<div>
			<button @click="popLoginWindow">로그인테스트 팝업 창</button>
		</div>
	</card>
</template>

<script>
import Card from '../common/Card.vue';
export default {
	components: { Card },
	mounted: {
		popLoginWindow() {
			window.open(
				'https://github.com/login/oauth/authorize?client_id=0e9ce3e69ff338443e2c&redirect_uri=http://localhost:8081/login',
			);
		
	},
	}
}
</script>

<style></style>
