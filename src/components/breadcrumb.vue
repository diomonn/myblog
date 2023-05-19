<template>
    <div class="breadcumb">
      导航: <ul class="breadcumbList">
          <li v-for="item in lists"  v-show="item.name">
         
     <p  @click="blackrouter(item.name)">{{item.meta.title}} /</p>
       </li>
        </ul>
      </div>
</template>
<script setup lang='ts'>
import { ref,watch } from 'vue';
import {useRoute,useRouter} from 'vue-router';
const router=useRoute()
const route=useRouter()
const lists=ref<any[]>([])
let old=<string|undefined>('');
const blackrouter=(item:string)=>{
  route.push({name:item})
}

watch(()=>router.matched,(newVal,oldVal)=>{
      let matched = newVal;
      lists.value = matched;//更新路由菜单数组
    }
)
    

</script>
<style scoped lang="less">
.breadcumb{
align-items: center;
  font-size: 16px;
  display: flex;
}
.breadcumbList{
  display: flex;
  color: beige;
}
 </style>

