import{d as v,i as c,x as H,c as n,a,C as I,F as h,m,k as E,o as r,t as S,p as g,f as x,_ as y}from"./index-5c8d04d2.js";const G=t=>(g("data-v-46ab23bc"),t=t(),x(),t),M={class:"A"},b=G(()=>a("h1",null,"虚拟列表",-1)),L=v({__name:"005",setup(t){const _=Math.ceil(7.5),i=c(_),p=c(0),o=c(),u=[],T=H(()=>u.slice(p.value,i.value));for(let e=0;e<120;e++)u.push(`lalalalalala-${e}`);const f=e=>{const d=e.currentTarget.scrollHeight-300;let s=e.currentTarget.scrollTop,l=Math.floor(s/40);p.value=l,i.value=l+_,o.value&&(o.value.style.transform=`translateY(${l*40}px)`),d-s<20&&console.log(12)};return(e,d)=>(r(),n("div",M,[b,a("div",{class:"my-ul",onScroll:f},[a("div",{class:"phantom",style:I({height:`${120*40}px`})},[a("div",{ref_key:"divRef",ref:o},[(r(!0),n(h,null,m(E(T),s=>(r(),n("li",null,S(s),1))),256))],512)],4)],32)]))}});const F=y(L,[["__scopeId","data-v-46ab23bc"]]);export{F as default};