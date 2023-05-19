<template>
<div>
 <button @click="A=!A" style="padding: 10px;">切换 </button>
<button @click="B++">
{{ B }}
</button>
<KeepAlive>
    <In  v-if="A" >
        <template #P>2112</template>
    </In>
    <Body v-else >
        <template #header>
            <h1>Here might be a page title</h1>
          </template>
        
         
          <template #footer>
            <p>Here's some contact info</p>
          </template>
    </Body>
</KeepAlive>
</div>
</template>
<script setup lang='ts'>
import In from './Inputa.vue';
import Body from './body.vue';
import {ref,provide,readonly,onBeforeUpdate} from 'vue';
const A=ref<boolean>(true)
const B=ref<number>(0)
provide('NUM', readonly(B))
onBeforeUpdate(()=>{
    console.log("coa1");
})
</script>
<style scoped>
 </style>
