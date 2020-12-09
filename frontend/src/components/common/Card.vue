<template>
	<section><slot></slot></section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
section {
	border: 1px solid #ccc;
	margin-bottom: 10px;
	padding: 10px;
	border-radius: 3px;
	box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.12);
	&:last-child {
		margin-bottom: 0;
	}
}
</style>
