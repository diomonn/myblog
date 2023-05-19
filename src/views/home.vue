<script setup lang="ts">
import Left from '@/components/left.vue';
import Main from '@/components/main.vue';

</script>

<template>
<div>
  <Left></Left>
<Main></Main>

</div>
</template>

<style scoped lang="less"  >
div{
  width: 100%;
  height: 100%;
  transition: all .3s linear;
  position: absolute;
  display: flex;
  justify-content: space-evenly;
}
@media screen  and (max-width: 760px)  {
  div{

   
    flex-direction: column;

 
  }
}
</style>
