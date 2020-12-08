<template>
  <section>
    GameSection
    <CharacterSpace></CharacterSpace>
    <StatusBox></StatusBox>
    <Storage></Storage>
    
  </section>
</template>
<script>
import CharacterSpace from '../game/CharacterSpace'
import StatusBox from '../game/StatusBox'
import Storage from '../game/Storage'

export default {
  components:{
    CharacterSpace,
    Storage,
    StatusBox

  }
  
}