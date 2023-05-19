import {  reactive } from 'vue'
import { defineStore } from 'pinia'
import { parse, stringify } from 'zipson'
interface todo{
  id:number,
  text:string,
  checkbox:boolean
}
 const usetodolist = defineStore('todo',()=>{
  
const todolist=reactive([{
  id:1,
  text:'我们继续走',
  checkbox:false,
}])

function addtodolist(todo:todo){
  todolist.push(todo);
}

function filter(){
console.log(todolist.filter(el=>el.checkbox));

}
  return { todolist,  addtodolist,filter}
},{
  persist:true
}
 
)
export default usetodolist