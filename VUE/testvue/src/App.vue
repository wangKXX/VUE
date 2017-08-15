<template>
    <div id="app">
        <router-view></router-view>
        <confirm :modal="modal"></confirm>
        
    </div>
</template>

<script>
    import confirm from "./components/common/addPuductDialog.vue"
    export default {
        name: 'app',
        components: {
            confirm
        },
        data (){
            return {
                modal: this.$store.state.modal
            }
            
        }
    }
</script>

<style>
    html,
    body {
        width: 100%;
        height: 100%;
        overflow: hidden;
        margin: 0;
        padding: 0;
        
    }
    
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;
        
    }
    
</style>