<template>
    <div id="app">
        <div v-wechat-title="$route.meta.title"></div>
        <router-view :key="$route.fullPath"></router-view>
    </div>
</template>
    
<style lang="stylus">
    
</style>