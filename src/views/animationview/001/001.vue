<template>
    <div class="box">
  <canvas class="canvas" width="300" height="300"  ref="canvas" ></canvas>

</div>
</template>
<script setup lang='ts'>
import { ref ,watch,onMounted,computed,reactive} from 'vue';
let canvas=ref<HTMLCanvasElement >();
let ctx:CanvasRenderingContext2D;
interface Point{
x:number,
y:number,
}  

function lineTo(p1: Point,key:boolean) {
ctx.beginPath()
ctx.fillStyle="#000"
ctx.lineWidth=1;
ctx.lineCap
ctx.moveTo(p1.x, p1.y)
if (key) {
ctx.lineTo(p1.x+500, p1.y)
}else{
ctx.lineTo(p1.x, p1.y+500)
}
ctx.stroke()
}
function start(B:Point,key:boolean):Point{
if (key) {
return {
x:B.x+=5,
y:B.y
}
} else{
return {
x:B.x,
y:B.y+=5
}
}
}

let a=reactive({
x:0,
y:0
})
let b=reactive({
x:0,
y:0
})

function startFrame(){
requestAnimationFrame(() => {
// if (a.x<300) {
  lineTo(start(a,false),true)
  lineTo(start(b,true),false)
startFrame()
// }
})
}
onMounted(()=>{

ctx=canvas.value?.getContext('2d') as CanvasRenderingContext2D;
startFrame()

})


</script>
<style scoped lang="less">
.canvas{

    box-shadow:  0 0  110px rgb(252, 254, 230);
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%,-50%);
}
 </style>