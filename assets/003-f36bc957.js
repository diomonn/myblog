import{d as l,i as r,h as d,q as f,c as i,a as u,o as x,_ as v}from"./index-5c8d04d2.js";const h={class:"box"},m=l({__name:"003",setup(p){let s=r(),a,c=r(0),_=d({x:0,y:0});function n(e,t){a.fillText(e,t.x,t.y,300),a.filter}function o(e){e.x=Math.floor(Math.random()*300),e.y=Math.floor(Math.random()*300),c.value++,requestAnimationFrame(()=>{c.value<100&&(o(e),n("2000-12",e))})}return f(()=>{var e;a=(e=s.value)==null?void 0:e.getContext("2d"),o(_)}),(e,t)=>(x(),i("div",h,[u("canvas",{class:"canvas",width:"300",height:"300",ref_key:"canvas",ref:s}," current stock price: $3.15 +0.15 ",512)]))}});const M=v(m,[["__scopeId","data-v-2e01de4a"]]);export{M as default};