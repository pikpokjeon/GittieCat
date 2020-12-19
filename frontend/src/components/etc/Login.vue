<template>
	<article>Login</article>
</template>

<script>


export default {
	mounted(){		
 			const loginOpen = () => Window.open(
				'https://github.com/login/oauth/authorize?client_id=0e9ce3e69ff338443e2c&redirect_uri=http://localhost:8081/login',
				"login"
			)

			loginOpen()

	}
}
					
</script>

<style lang="scss" scoped>
article {
	background: red;
}
</style>
