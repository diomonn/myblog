<template>
<div class="A">
 <h1>虚拟列表</h1>

    <div class="my-ul" @scroll="handleScroll">
         <div class="phantom"  :style="{height:`${TOTAL*ITEM_HEIGHT}px`}"> 
<div ref="divRef">
    <li v-for="item in dataForShow">
        {{ item }}
    </li>
</div>

 </div>

    </div>
</div>
</template>
<script setup lang='ts'>
import {ref,computed} from 'vue'
const TOTAL = 120;
const UL_HEIGHT = 300;
const ITEM_HEIGHT = 40;
const visibleCount  = Math.ceil(UL_HEIGHT / ITEM_HEIGHT);
const end=ref(visibleCount)
const start =ref(0)
const divRef = ref<HTMLDivElement | null>();
const MY_DATA: string[] = [];
const dataForShow = computed(()=>{
    return MY_DATA.slice(start.value,end.value)
})

for (let i = 0; i < TOTAL; i++) {
  MY_DATA.push(`lalalalalala-${i}`);
}
const handleScroll = (e:any) => {
    
    const maxScrollTop = e.currentTarget.scrollHeight - UL_HEIGHT;
    let currentScrollTop =  e.currentTarget.scrollTop;
    let s = Math.floor(currentScrollTop / ITEM_HEIGHT);
    start.value=s;
    end.value=s + visibleCount;

    if (divRef.value) {
      divRef.value.style.transform = `translateY(${s * ITEM_HEIGHT}px)`;
    }
    if (maxScrollTop - currentScrollTop < 20) {
    console.log(12);
    }

}



</script>
<style scoped>
.my-ul {
    height: 300px;
    width: 200px;
    overflow: auto;
    position: relative;
    border: 2px solid salmon;
  }
  
  .phantom li{
    
    height: 40px;
    z-index: -1;
  }

 </style>