<template>
<div>
<button  @click="someEvent">草泥马 {{a}}</button> 
<slot  name="a"></slot>
</div>
</template>
<script setup lang='ts'>

import {onMounted, ref,defineEmits,inject} from 'vue'
const emits = defineEmits(['some-event']) // 语法糖
    let a =inject('a')
// const ff=defineProps({
//   a:Number,
 
// })
const someEvent=function(){
  console.log(emits);
emits('some-event',2)
}
</script>
<style scoped>
 </style>
