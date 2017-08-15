<template>
    <div class="userlist">
            <span @click="listclick">菜单<span class="img"></span></span>
            <ul class="inner" v-show="isshow">
                <li>我的信息</li>
                <li>注销</li>
                <li>退出</li>
            </ul>
    </div>
</template>

<script>
    export default{
        name:"userList",
        data () {
            return {
                isshow: false  
            }
          
        },
        methods:{
            listclick: function(){
                this.isshow = !this.isshow;
            }
        }
    }
</script>

<style scoped="scoped">
    .userlist{
        display: inline-block;
        vertical-align: top;
        float: right;
        margin-top: 50px;
        margin-right: -89px;
    }
    .userlist span{
        display: inline-block;
        vertical-align: top;
        cursor: pointer;
        color: #FFF;
    }
    .img{
        background: url(../../assets/cl_sj_up.png) 50% no-repeat;
        width: 7px;
        height: 4px;
        margin-top: 10px;
        margin-left: 5px;
    }
    .userlist ul{
        list-style: none;
        margin: 0;
        padding: 0;
        color: #fff;
        width: 100px;
        padding: 5px;
        margin-top: 8px;
        background-color: #41B883;
        
        
    }
    li{
        cursor: pointer;
    }
    li:hover{
        background-color: #fff;
        color: #41B883;
    }
    .inner{
        border:1px solid #41B883
    }
</style>