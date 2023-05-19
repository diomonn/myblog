<template>
<div class="left burl">
    <div class="card burl">
<img src="../assets/wallhaven-zygeko.jpg" alt="">
<h1>喀什</h1>
    </div>
    <nav>

        <li><RouterLink to="/tech" ><img src="@/assets/icon/keshihuabianji.svg" alt="技术文章" title="技术文章"><p>技术文章</p></RouterLink></li>
        <li><RouterLink to="/Learn"><img src="@/assets/icon/my-daily.svg" alt="学习文章" title="学习文章"><p>学习文章</p></RouterLink></li>
        <li><RouterLink to="/"><img src="@/assets/icon/shoucang.svg" alt="翻译文章" title="翻译文章"><p>翻译文章</p></RouterLink> </li>

    <li><RouterLink to="/animation"><img src="@/assets/icon/shiyanshi.svg" alt="动画实验" title="动画实验"><p>动画实验</p></RouterLink></li>
    <li><RouterLink to="/collection"><img src="@/assets/icon/keshihuabianji.svg" alt="网站收藏" title="网站收藏"><p>网站收藏</p></RouterLink></li>
    <li><RouterLink to="/"><img src="@/assets/icon/my-daily.svg" alt="个人简介" title="个人简介"><p>个人简介</p></RouterLink></li>
    <li><RouterLink to="/"><img src="@/assets/icon/keshihuabianji.svg" alt="涉及技术栈" title="涉及技术栈"><P>涉及技术栈</P></RouterLink></li>

    </nav>
</div>
</template>
<script setup lang='ts'>
import {useRouter} from 'vue-router';
const use=useRouter()
const  goto=(msg:string)=>{
    use.push({name:msg})
}
</script>
<style lang="less" scoped>
.left{
    position: relative;
    border-radius: 10px;
    width: 15%;
    height: 95vh;
    box-shadow: inset 0 0 10px rgb(250, 237, 237);
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: space-around;
    backdrop-filter: blur(2px);
    overflow: hidden;
.card{
    margin-top: 10px;
    padding: 10px;
    position: relative;
    width: 80%;
    border-radius: 25%;
    height: 20%;
    box-shadow: inset 0 0 10px #6064b8;
    display: flex;
    transition: all .3s ease-in-out;
    flex-direction:column;
    align-items: center;
    img{
       
    
        width: 70px;
        height: 70px;
       box-shadow: 3px 3px 4px hsla(0, 0%, 0%, 0.3);
       border-radius: 50%;
        transition: all  1s linear;
        &:hover{
           
            box-shadow: 0px 0px 4px black; 

        
        }
        &:active{

           box-shadow: none;
        }
    }
    &:hover{
        box-shadow: inset 0 0 10px #e77e15;
    }
}
nav{
    width: 80%;
    height: 73%;
    box-shadow: inset 0 0 10px #9196ea;
    backdrop-filter: blur(10px);
  transition: all .3s linear;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
    &:hover{
        box-shadow: inset 0 0 10px #e77e15;
        cursor: pointer;
        backdrop-filter: none;
    }
   
  & li a{
    font-size: 1rem;
    display: flex;
    align-items: center;
    & img{
        width: 2.25rem;
    }
  }
    }
 
}

@media screen  and (max-width: 760px)  {
    .left{
        width: 100%;
        height: 40px;
.card {
    display: none;
       
    }
     nav{
        padding: 0;
        
        overflow-y: auto;
        width: 100%;
        height: 100%;
       flex-direction: row;
       align-items: center;
       & li {
        
        padding: 0;
        align-items: center;
        margin: 0;
       
        &  p{
            
            display: none;
        }
        & img{
         
            width: 27px;
            height: 27px;
        }
       }
   
    }
}
                    
}

</style>
