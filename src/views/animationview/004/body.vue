<template>
<div>
 <h1>
   {{ NUM }}

 <slot name="header" > </slot>
 <slot name="footer" > </slot>

</h1>

</div>
</template>
<script setup lang='ts'>
import {ref,inject} from 'vue'
const NUM = inject('NUM')
</script>
<style scoped lang='less'>
 </style>