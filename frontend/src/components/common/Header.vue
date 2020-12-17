<template>
	<div>
		<header>
			<!-- 상단메뉴 구성 미정 -->
			<nav>GittieCat</nav>
			<nav @click="moveToLoginPage">Login</nav>
			<nav @click="moveToProfilePage">Profile</nav>
		</header>
	</div>
</template>
<script>
export default {
	methods:{
		moveToLoginPage(){
			this.$router.push('/login')
		},
		moveToProfilePage(){
			this.$router.push('/')
		}
	}

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
