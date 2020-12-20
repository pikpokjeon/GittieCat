<template>
	<article>
		<Login></Login>
		<Regist></Regist>
		<Settings></Settings>
	</article>
</template>

<script>
import Regist from '@/components/etc/Regist';
import Login from '@/components/etc/Login';
import Settings from '@/components/etc/Settings';

export default {
	components: {
		Regist,
		Login,
		Settings,
	},
};
</script>

<style lang="scss" scoped>
article {
	// background: purple;
}
</style>
