<template>
<div class="phone">
<nav>
  <li @click="GETPoint">返回</li>
  <li>
    <input type="text" name="" id=""> 
    <div>suosuo</div>
  </li>
  <li>
    ++
  </li>
</nav>
<main ref="main">
     
</main>
</div>
</template>
<script setup lang='ts'>
import {onMounted, ref, watch} from 'vue' 

const div=ref<HTMLDivElement[]|undefined>();
const main=ref<HTMLElement|undefined>();

let newscrolltop=ref(0)
let oldscrolltop=ref(0)
let o1 = {"x":1,"y":2};
let o2 = {"y":2,"x":1};

// console.log(test(o1,o2));

const GETPoint=()=>{

 if (div.value&&main.value) { 
  let height:number=main.value.scrollHeight;
  newscrolltop.value=main.value.scrollTop
  if (newscrolltop.value-oldscrolltop.value>=250) {

    main.value.scrollTop=(Math.floor(height/newscrolltop.value)-1)*88;
   oldscrolltop.value=newscrolltop.value
  }
}
}



onMounted(()=>{
  main.value?.addEventListener("scroll",(ev:Event)=>{
console.log(main.value?.scrollTop);
  })
})


</script>
<style scoped lang="less"> 
.phone{
  top: 50%;
  left: 50%;
  box-shadow: 0 0 10px black;
  transform: translate(-50%,-50%);
  position: relative;
  color: #fff;
  width: 80%;
  height: 90%;
  border-radius: 15px;
nav{
border-bottom: 5px solid rgba(62, 165, 238, 0.267);
  border-radius: inherit;
  padding: 10px;
  display: flex;
justify-content:space-between;
li{
  display: flex;
}
}
main{
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  margin-top: 10px;
  position: relative;
  border: 5px solid rgba(62, 165, 238, 0.267) ;
 height: 80%;
 overflow-y: auto;
 bottom: 0;
 div{
  height: 100%;
 }
}
}
</style>
