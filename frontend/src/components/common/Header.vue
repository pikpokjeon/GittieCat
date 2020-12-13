<template>
	<div>
		<header>
			<nav>GittieCat</nav>
			<nav @click="showLoginBox">Login</nav>
		</header>
	</div>
</template>
<script>
export default {
	methods:{
		showLoginBox(){
			this.$router.push('/login')



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
