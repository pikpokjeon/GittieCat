<template>
	<section>
		<GameSection></GameSection>
		<AnalysisSection></AnalysisSection>
		<RelationshipSection></RelationshipSection>
	</section>
</template>
<script>
import GameSection from '@/components/profile/game/GameSection';
import RelationshipSection from '@/components/profile/relation/RelationshipSection';
import AnalysisSection from '@/components/profile/analysis/AnalysisSection.vue';
export default {
	components: {
		GameSection,
		AnalysisSection,
		RelationshipSection,
	},
};
</script>
<style lang="scss" scoped></style>
