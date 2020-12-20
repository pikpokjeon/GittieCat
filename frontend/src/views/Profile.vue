<template>
	<section>
		<GameSection></GameSection>
		<AnalysisSection></AnalysisSection>
		<RelationshipSection></RelationshipSection>
		<button @click="testClick">테스트 버튼1</button>
		<button @click="postClick">테스트 버튼2</button>
		<!-- <button @click="loginClick">테스트 버튼3</button> -->
	</section>
</template>
<script>
import GameSection from '@/components/profile/game/GameSection';
import RelationshipSection from '@/components/profile/relation/RelationshipSection';
import AnalysisSection from '@/components/profile/analysis/AnalysisSection.vue';
import axios from 'axios';

export default {
	components: {
		GameSection,
		AnalysisSection,
		RelationshipSection,
	},
	methods: {
		testClick() {
			axios
				.get('http://52.79.191.158:8080/messages/messages')
				.then(res => {
					console.log(res);
				})
				.catch(error => {
					console.log(error);
				});
		},
		postClick() {
			axios
				.post('http://52.79.191.158:8080/messages/messages', {
					text: 'text12',
				})
				.then(res => {
					console.log(res);
				})
				.catch(error => {
					console.log(error);
				});
		},
		// loginClick() {
		// 	axios.post( )
		// }
	},
};
</script>
<style lang="scss" scoped></style>
