<template>
	<Card>
		<div class="relation">
			<div class="row">
				<div class="col">
					<VisualFollow></VisualFollow>
				</div>
				<div class="col">
					<Recommend></Recommend>
				</div>
			</div>
		</div>
	</Card>
</template>
<script>
import Card from '@/components/common/Card.vue';
import VisualFollow from './VisualFollow.vue';
import Recommend from './Recommend.vue';
export default {
	components: {
		Card,
		VisualFollow,
		Recommend,
	},
};
</script>
<style lang="scss" scoped>
.relation {
	> .row {
		display: flex;
		justify-content: center;
		> .col {
			display: flex;
			flex-direction: column;
			width: 50%;
			border: 1px solid #efefef;
		}
	}
}
</style>
