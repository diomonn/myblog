<template>
    <div class="box">
  <canvas class="canvas" width="300" height="300"  ref="canvas" >
    current stock price: $3.15 +0.15

  </canvas>

</div>
</template>
<script setup lang='ts'>
import { ref ,watch,onMounted,computed,reactive} from 'vue';
let canvas=ref<HTMLCanvasElement >();
let ctx:CanvasRenderingContext2D;
let x=ref<number>(0);
let x_y=reactive({
  x:0,
  y:0
})
function draw(text:string,point:point) {
  ctx.fillText(text,point.x,point.y ,300)
   ctx.filter
}
interface point {
  x:number,
  y:number
}
function startdraw(point:point){
  point.x= Math.floor(Math.random() * 300);	
  point.y=Math.floor(Math.random() * 300);	
x.value++;
  requestAnimationFrame(()=>{
    if (x.value<100) {
      
    startdraw(point)
    draw("2000-12",point)
    }
  })
}

onMounted(()=>{
   
ctx=canvas.value?.getContext('2d') as CanvasRenderingContext2D;

   
startdraw(x_y)
}
)


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