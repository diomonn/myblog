<template>
<div>
<ul class="lists">
  <li class="title" v-for="{title,url,icon,introduction} in count">
<a :href="url" > {{ title }}</a>
    <img :src="icon" alt="">
    <p>{{introduction}}</p>
  </li>
 
</ul>
</div>
</template>
<script setup lang='ts'>
import {reactive, ref} from 'vue'
const count = reactive<websitd[]>([{
  id:0,
  title:"变量名",
  url:'https://unbug.github.io/codelf/',
  introduction:"变量名生成器",
  icon:"https://unbug.github.io/codelf/images/codelf_logo.f4ae25bd.png"
},
{
  id:1,
  title:"Web API",
  url:'https://developer.mozilla.org/',
  introduction:"三剑客api查询",
  icon:"https://developer.mozilla.org/apple-touch-icon.6803c6f0.png"
},
{
  id:2,
  title:"leetcode",
  url:'https://leetcode.cn/',
  introduction:"算法刷题",
  icon:"https://static.leetcode.cn/cn-mono-assets/production/assets/logo-dark-cn.4c5e285b.svg"
},
{
  id:2,
  title:"TypeORM",
  url:'https://leetcode.cn/',
  introduction:"一个ORM框架",
  icon:"https://typeorm.bootcss.com/logo/logo.png"
},

])

</script>
<style scoped lang="less">
.lists{
  display: flex;
  flex-wrap: wrap;
  .title{
    border-radius: 25px;
border: #fff 1px solid;
padding: 1.25rem;
box-shadow: inset 0 0 20px greenyellow;    
width: 10.5rem;
    height:auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
font-size: 16px;
    color: black;
    font-weight: bold;
margin: 10px;
    text-align: center;
transition:1s linear all;    
    &:hover{

      box-shadow: none;
cursor: pointer;  
    }
  }
  .title a{
  
    color: #fff;
    text-decoration: none;
  }
  .title a:hover{
    color: #fff;
    text-decoration:underline rebeccapurple dotted;
  }
  
  .title img{
    width: 100px;
  }
}
 </style>