<template>
<div>
    <template name="poxy"></template>
    <button @click="count++">+</button>
    <h1 :style="{ 'display': count>10?'block':'none' }">{{count}}</h1>
</div>
</template>
<script setup lang='ts'>
import {ref,onBeforeUpdate,onBeforeUnmount,onMounted,onUnmounted,onActivated,onDeactivated} from 'vue'
import {useCounterStore} from '@/stores/index';
const Counter=useCounterStore()
const count=ref(0)
onActivated(()=>{
    // count.value=100
    console.log('ACTIVE');
})
onUnmounted(()=>{
    console.log('onUnmounted');
})
onBeforeUnmount(()=>{
    console.log('onBeforeUnmount');
})
onDeactivated(()=>{
    console.log('onDeactivated');
})
onBeforeUpdate(()=>{
    console.log('onBeforeUpdate');
})
onMounted(()=>{
    console.log('onMounted');
})
</script>
<style scoped lang='less'>

 </style>
