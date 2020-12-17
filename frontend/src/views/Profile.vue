<template>
	<section>
		<GameSection></GameSection>
		<AnalysisSection></AnalysisSection>
		<RelationshipSection></RelationshipSection>
		<LoginTest></LoginTest>
	</section>
</template>
<script>
import GameSection from '@/components/profile/game/GameSection';
import RelationshipSection from '@/components/profile/relation/RelationshipSection';
import AnalysisSection from '@/components/profile/analysis/AnalysisSection.vue';
import LoginTest from '@/components/loginTest/LoginTest.vue';
export default {
	components: {
		GameSection,
		AnalysisSection,
		RelationshipSection,
		LoginTest,
	},
};
</script>
<style lang="scss" scoped></style>
