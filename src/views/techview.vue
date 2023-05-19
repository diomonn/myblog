<template>
    <div class="tech" >
        <input  type="text" placeholder="输入并搜索" v-model="title">
       <ul >
        <li :key="index" v-for="item,index in a" >
            <p>{{item.title}}</p>
          <time>{{item.time}}</time>
        </li>
       </ul>
      
   
       
    </div>
    
</template>
<script setup lang='ts'>




import {ref,computed,reactive } from 'vue';
const a = reactive([{
    id:1,
    title:'vue的开发与设计',
    content:'1999999',
    time:'2000-12-12'
},{
    id:2,
    title:'react的开发与设计',
    content:'1999999',
    time:'2000-12-22'
}])

let title = ref<string|undefined>()
const data=[{
    title:'1290',
    time:'2022-12-12'
}]


</script>
<style scoped lang="less">

.tech{
    display: flex;
    align-items: center;
    overflow: auto;
    & input{
        margin: 0;
        position: relative;
        width: 100%;
        border: 0;
        height: 5%;
    }
  & ul{
    width: 100%;
display: flex;
flex-direction: column;
align-items: center;
    & li{
        cursor: pointer;
        margin: 10px;
        width: 90%;
        height: 3.25rem;
        display: flex;
        letter-spacing:3px;
color: aliceblue;
        justify-content: center;
        align-items: center;
        font-size: 1.5rem;
    box-shadow: inset 0 0 6px rgb(255, 255, 255);
    & p{
        font-weight: bold;
        font-size: 1.5rem;
        text-indent: 1em;
    }   
    & time{
        position: relative;
        right: 0;
        color: #c1f6ed;
        font-size: 0.4rem;
    }
    }
}
}
@media screen  and (max-width: 530px)  {
time{
    display: none;
}
}
</style>
