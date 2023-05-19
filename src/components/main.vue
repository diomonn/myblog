<template>
    <div class="main">
      
        <RouterView class="View"></RouterView>
    </div>
</template>
<script setup lang='ts'>
import Breadcrumb from './breadcrumb.vue';
</script>
<style scoped lang="less">
.main {
    position: relative;
    box-shadow: inset 0 0 10px rgb(246, 227, 227);
    width: 70%;
    height: 100%;
    min-width: 500px;
    display: flex;

    justify-content: start;
    flex-direction: column;
    .Bread {
        width: 80%;
        height: 5%;
    }
    .View {
        width: 100%;
        overflow: auto;
        flex-direction: column;
        height: 95%;
        box-shadow: inset 0 0 10px #f0ff90;

    }
}

@media screen and (max-width: 760px) {
    .main {
        width: 100%;
        height: 100vh;
        min-width: 100%;
    }
}
</style>
