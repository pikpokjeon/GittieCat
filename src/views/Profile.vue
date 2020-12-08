<template>

  <section>
    <GameSection></GameSection>
    <ChartSection></ChartSection>
    <RelationshipSection></RelationshipSection>
  </section>

</template>
<script>
import ChartSection from './../components/profile/ChartSection'
import GameSection from './../components/profile/GameSection'
import RelationshipSection from './../components/profile/RelationshipSection'
export default {
  components:{
    ChartSection,
    GameSection,
    RelationshipSection

  }
}
</script>
<style lang="scss" scoped>

</style>