<template>
	<Card>
		<div class="analysis">
			<div class="row">
				<div class="col">
					<Repository></Repository>
				</div>
				<div class="col">
					<Commit></Commit>
				</div>
			</div>
			<div class="row">
				<div class="col w1">
					<Contribute></Contribute>
				</div>
			</div>
		</div>
	</Card>
</template>

<script>
import Card from '@/components/common/Card.vue';
import Repository from './Repository.vue';
import Commit from './Commit.vue';
import Contribute from './Contribute.vue';
export default {
	components: {
		Card,
		Repository,
		Commit,
		Contribute,
	},
};
</script>

<style lang="scss" scoped>
.analysis {
	> .row {
		display: flex;
		justify-content: center;
		> .col {
			display: flex;
			flex-direction: column;
			width: 50%;
			border: 1px solid #efefef;
			&.w1 {
				width: 100%;
			}
		}
	}
}
</style>
