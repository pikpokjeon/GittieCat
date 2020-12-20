<template>
	<div>
		<header>
			<!-- 상단메뉴 구성 미정 -->
			<nav>
				<p>GittieCat</p>
				<p @click="moveToLoginPage">Login/Settings</p>
				<p @click="moveToProfilePage">Profile</p>
			</nav>
		</header>
	</div>
</template>
<script>
export default {
	methods: {
		moveToLoginPage() {
			window.open(
				'https://github.com/login/oauth/authorize?client_id=0e9ce3e69ff338443e2c&redirect_uri=http://localhost:8081/login',
				'_self',
			);
				location.href ='https://github.com/login/oauth/authorize?client_id=0e9ce3e69ff338443e2c&redirect_uri=http://localhost:8081/login'
		},
		moveToProfilePage() {
			this.$router.push('/');
		},
	},
};
</script>
<style lang="scss" scoped>
header {
	position: sticky;
	background: #000;
	padding: 20px 10px;
	nav {
		text-align: center;
		color: #fff;
	}
}
</style>
