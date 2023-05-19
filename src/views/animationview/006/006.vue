<template>

  <div class="FirstBox">
    年: <input v-model="yearval" type="text" name="" id="">
  <div class="InputNumber">
    月:
    <button @click="dayval++">+</button>
    <input v-model="dayval" type="number" name="" id="">
    <button @click="dayval--">-</button>
  </div>
    <button @click="FirstweekDay"> 跳转</button>
   
        <table v-show="a"  class="table" border="1">
          <thead>
            <tr>
              <th colspan='5'>day7</th>
              <th colspan='5'>day1</th>
              <th colspan='5'>day2</th>
              <th colspan='5'>day3</th>
              <th colspan='5'>day4</th>
              <th colspan='5'>day5</th>
              <th colspan='5'>day6</th>
  
            </tr>
          </thead>
          <tbody>
            <tr v-for="item, index in 6">
              <td ref="td" :class="item === 1 && num <= FirstDAY || (num + (index) * 7) - FirstDAY > days ? 'td' : ''" colspan='5' v-for="num, i in 7">{{ item === 1 && i < FirstDAY ? '' : ((num + (index) * 7) - FirstDAY) <= days ? ((num + (index) * 7) - FirstDAY) : '' }}
                  <div class="residue" v-if="!(item === 1 && num <= FirstDAY || (num + (index) * 7) - FirstDAY > days)">
                    {{ todolist.todo[ item === 1 && i < FirstDAY ? NaN : ((num + (index) * 7) - FirstDAY) <= days ? ((num + (index) * 7) - FirstDAY)-1 :NaN]?.length }}
                  </div>
              </td>
            </tr>
          </tbody>
        </table>
      <section class="todolist" v-show="!a">
        <h1>{{ yearval }}-{{ dayval }}-{{ KEY+1 }} </h1>
       <div class="form">
        <input v-model="newstr" type="text" name="" id="" placeholder="规划您今天的行为">
        <button @click="a=!a">返回</button>
        <button @click="addtodo()">添加</button>
       </div>
      <ul>
        <TransitionGroup name="list" tag="ul">
        <li class="item"  v-for="i,index in todolist.todo[KEY]">
          <p   :style="{textDecoration:i.choose?'line-through':'none' }" >{{i.title}}</p>
          <input type="checkbox" v-model="i.choose" name="" id="">
          <button @click="dislodge(index,i.choose)">删除</button>
        </li>
      </TransitionGroup>
      </ul>
      
      </section>    

  
  </div>

</template>
<script setup lang='ts'>
import type { transform } from '@vue/compiler-core';
import { ref, computed, onMounted, nextTick, reactive } from 'vue'
const yearval = ref<number>(2023);
const dayval = ref<number>(4);
const FirstDAY = ref(0)
const KEY=ref(0)

const year = computed(() => {
  return LeapYear(yearval.value)
})
const days = computed(() => {
  return yearday(LeapYear(yearval.value), dayval.value)
})
const a=ref(true)
let newstr=ref<string>('')
interface todo {
  title: string
  choose: boolean

}
interface todolist {
  name: string
  time: Date
  todo: todo[][]
}
let todolist=reactive<todolist>({
  name: '',
  time: new Date(),
  todo: []
})
const td = ref<HTMLElement[] | undefined>();
function init() {
  td.value?.forEach((el,index) => {
   
     el.ondblclick=()=>{ 
      if (index-FirstDAY.value<=days.value&&index>=FirstDAY.value) {
          KEY.value=index-FirstDAY.value
          a.value=!a.value;
     }
    }
  })
}

function LeapYear(year: number): boolean {
  if (year % 4 == 0 && year % 100 !== 0 || year % 400 === 0) {
    return true
  }
  return false
}

const FirstweekDay = (() => {
  const birthday = new Date(`${yearval.value}-${dayval.value}-1`);
  const day1 = birthday.getDay();
  FirstDAY.value = day1;
  if (localStorage.getItem(`${yearval.value}-${dayval.value}`)) {
    let a =localStorage.getItem(`${yearval.value}-${dayval.value}`) as string
    let {name,time,todo}=JSON.parse(a);  
     todolist.name=name
     todolist.time=time
     todolist.todo=todo
  }else{
    todolist.name=`${yearval.value}-${dayval.value}`
  todolist.time=new Date();
  todolist.todo=[]
  for (let i=0; i < days.value; i++) {
  todolist.todo.push([]);
  }

  }
})
function yearday(year: boolean, month: number | string): number {
  month = parseInt(month as string) as number | string
  console.log(year, month);
  if (month === 4 || month === 6 || month === 9 || month === 11) {
    return 30
  } else if (year && month === 2) {
    return 29
  } else if (!year && month === 2) {
    return 28
  }
  else {
    return 31
  }
}
const addtodo=()=>{
if (newstr.value) {
  todolist.todo[KEY.value].push({
  title:newstr.value,
  choose:false,

})
}else{
  alert("请认真描述你的事件")
}
local(todolist)
}
const dislodge=(i:number,bo:boolean)=>{
if (bo) {
  todolist.todo[KEY.value].splice(i,1)

}
  local(todolist)  
}
const revise=(i:number,str:string)=>{
  todolist.todo[KEY.value][i].title=str
  local(todolist)  
}
function local(todolist: todolist) {
  localStorage.setItem(todolist.name, JSON.stringify(todolist))
}

onMounted(() => {
  init()
  FirstweekDay()
})

</script>
<style scoped lang="less">
.FirstBox{
  background-image: url('https://safaritime.cn/images/3/36/%E5%8D%9A%E5%B0%94%E8%B5%AB%E6%96%AF%E9%BB%91%E7%99%BD.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
.InputNumber{
  margin-left: 40px;
  display: inline;
  input{
    width: 40px;
  }
button{

  width: 30px;
  margin: 0 ;
  height: 100%;
  border-radius: 0%;
}
}
table {
  transition: .5s linear all;
  width: 100%;
  border-collapse: collapse;
}

table caption {
  font-size: 2em;
  font-weight: bold;
  margin: 1em 0;
}

th,
td,
.td {

  
  border: .0625rem solid #999;
  text-align: center;
  padding: 1.25rem 0;
}

table thead tr {
  transition: .3s linear;
  background-color: #008c8c;
  color: #fff;
}


table tbody tr:hover {
  background-color: #ccc;

  td:hover {

    background: #008c8c;
  }

  .td:hover {

    background-color: rgba(39, 191, 47, 0);

  }
}

table tbody tr td:first-child {
  color: rgb(58, 228, 15);
}



button {
  border-radius: 12px;
  margin-left: .625rem;
  width: 6.25rem;
  height: auto;
  outline: none;
 
  border: 0;
  background: rgb(235, 219, 219, 0);

  &:hover {

    background: #f2f19d;
    cursor: pointer;
  }
}
.todolist{
  
margin-top: 3%;
  left: 50%;
width: 400px;
border-radius: 10px;
padding: 10px;
min-height: 400px;
height: auto;
transform: translate(-50%);
position: absolute;
text-align: center;
background-image: url('https://img.zcool.cn/community/0177c75c60c80ea801213f26ba70ab.jpg@1280w_1l_2o_100sh.jpg');
background-repeat: no-repeat;
background-size: cover;
color: #fff;
font-size: 24px;
h1{
  letter-spacing: 10px;
  color: #a6d1f7;
}
ul{
  
 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;


 li{
  
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  background-color: rgba(237, 159, 159, 0.3);
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.2);
  width: 100%;
  font-size: 100%;
  justify-content:space-between;
  display: flex;
 }
}
.form{
  
 input{
  padding-left: .8125rem;
  outline: none;
  border: #008c8c 1px solid;
 }
 
}
}
.residue{
  text-align: center;
  width: 20px;
 font-size: 10px;
  height: 20px;
  border-radius: 50%;
  background: red;
  color: #fff;
}
/* 下面我们会解释这些 class 是做什么的 */
.list-enter-active, .list-leave-active {
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.list-enter, .list-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
.list-leave-active {
  position: absolute;
}
.list-move {
  transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.list-enter ~ .list-enter, .list-leave ~ .list-leave-to {
  transform: translateX(100%);
}
.completed {
  text-decoration: line-through;
  color: gray;
}
}
</style>
