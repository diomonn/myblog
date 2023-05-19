<template>
  
    <canvas ref="canvas" :width="canvasWidth" :height="canvasHeight"></canvas>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  
  export default defineComponent({
    name: 'CanvasLoader',
  
    data() {
      return {
        canvasWidth: 200,
        canvasHeight: 200,
        radius: 20,
        angle: 0,
        speed: 0.005
      }
    },
  
    mounted() {
      this.draw()
    },
  
    methods: {
      draw() {
        const canvas = this.$refs.canvas as HTMLCanvasElement
        const ctx = canvas.getContext('2d')!
  
        const centerX = this.canvasWidth / 2
        const centerY = this.canvasHeight / 2
  
        ctx.clearRect(0, 0, canvas.width, canvas.height)
  
        ctx.beginPath()
        ctx.arc(centerX, centerY, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = '#000'
        ctx.fill()
  
        this.angle += this.speed
        ctx.beginPath()
        ctx.arc(centerX-10 + Math.cos(this.angle) * 50+Math.random()*100, centerY + Math.sin(this.angle) * Math.random()*100, this.radius / 2, 0, Math.PI * 2)
        ctx.fillStyle = '#bbc1cb'
        ctx.fill()
        ctx.beginPath()
        ctx.arc(centerX + Math.cos(this.angle) * 50, centerY + Math.sin(this.angle) * 50, this.radius / 2, 0, Math.PI * 2)
        ctx.fillStyle = '#bbc1cb'
        ctx.fill()
        ctx.beginPath()
        ctx.arc(centerX+10 + Math.cos(this.angle) * 50, centerY+10 + Math.sin(this.angle) * 50, this.radius / 2, 0, Math.PI * 2)
        ctx.fillStyle = '#873318'
        ctx.fill()
      
       
  
        requestAnimationFrame(this.draw)
      
      }
    }
  })
  </script>
  <style lang="less" scoped>
  canvas{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: 1000;
  }
</style>