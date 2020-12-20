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
			this.$router.push('/login');
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
