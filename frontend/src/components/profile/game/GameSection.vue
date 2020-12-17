<template>
	<Card>
		<div class="game">
			<div class="row">
				<div class="col">
					<CharacterSpace></CharacterSpace>
				</div>
				<div class="col">
					<StatusBox></StatusBox>
					<Storage></Storage>
				</div>
			</div>
		</div>
	</Card>
</template>
<script>
import Card from '@/components/common/Card.vue';
import CharacterSpace from './CharacterSpace';
import StatusBox from './StatusBox';
import Storage from './Storage';

export default {
	components: {
		Card,
		CharacterSpace,
		Storage,
		StatusBox,
	},
};
</script>

<style lang="scss" scoped>
.game {
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
