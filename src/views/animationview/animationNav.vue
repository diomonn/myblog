<template>
    <div>
        <ul class="animation">
          <li v-for="i in 7" class="card">
<RouterLink :to="{name:`00${i}`}" >00{{i}}</RouterLink>
          </li> 
        </ul>
    </div>
    </template>
    <script setup lang='ts'>
    </script>
    <style lang="less" scoped>   
    .animation{
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap; 
      
      .card{
            margin: 10px;
        width:18.75rem;
        height: 18.75rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 30px;
        color: rgb(250, 247, 188);
        font-weight: 900;
     box-shadow: inset 0 0 3.5rem  aqua;
     border-radius: 20%;
     transition: all .3s linear;
    
        }
        .card:hover{
            cursor: pointer;
            box-shadow:  inset 0 0 .2rem  aqua;
             }
    }
     </style>
