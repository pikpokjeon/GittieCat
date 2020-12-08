<template>
  <section>
    <MostUsed></MostUsed>
    <TotalCommit></TotalCommit>
    <Repository></Repository>
    
  </section>
</template>
<script>
import MostUsed from '../chart/MostUsed'
import TotalCommit from '../chart/TotalCommit'
import Repository from '../chart/Repository'

export default {
  components:{
    MostUsed,
    Repository,
    TotalCommit

  }
  
}
</script>
<style lang="scss" scoped>

</style>