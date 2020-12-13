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

export default {
	components: { Card },
	data() {
		return {
			query: this.$route.query
		};
	},
	mounted() {
	},
	methods: {

	},
};
</script>

<style></style>
