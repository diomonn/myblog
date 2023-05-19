import Load from './load.vue' ;
import {h, render} from 'vue';
export function creatLoad(){
    const VNode=h(Load)
    const container=document.createElement("div")
    document.body.appendChild(container)
    render(VNode,container)
    setTimeout(()=>{
render(null,container)
    },2000)
}