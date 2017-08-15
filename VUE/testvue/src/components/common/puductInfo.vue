<template>
<div class="item">
    <div class="item-img">
        <img :src= "imgdata | retimgUrl(imgdata)" alt="商品图片"/>
    </div>
    <ul>
        <li><span>商品号：{{model.sid}}</span></li>
        <li>商品名：{{model.name}}</li>
        <li>类别：{{model.groupid}}</li>
        <li>等级：{{model.orderid}}</li>
        <li >截止日期：{{model.lasttime | turnTime(model.lasttime)}}</li>
    </ul>
    <div class="addpuduct">
        <button @click="addpuduct(model)">加入购物车</button>
    </div>
    
</div>

</template>
  
<script>
    import "../../jsdao/date.js"

    export default{
        name:"puductInfo",
        props:['model'],

        filters: {
            turnTime: function(date){
                return new Date(+date).Format("yyyy-MM-dd");
            },
            
            retimgUrl: function(url){
                return "../../static/images/" + url;
            }
        },
        data () {
            return{
                imgdata:"puduct.jpg"
            }
        },
        methods:{
            addpuduct: function(mod){
                this.$store.commit("setModal", mod);
                this.$store.commit("setShow", true);
                
            }
        }
    }
</script>

<style scoped="scoped">
    .item{
        width: 400px;
        
        display: inline-block;
        vertical-align: top;
        border: 1px solid #41B883;
        margin-bottom: 50px;
        box-shadow: 0 5px 5px #2C3E50;
        padding: 20px;
        
    }
    ul{
        padding: 0;
        margin: 0;
        width: 50%;
        display: inline-block;
        vertical-align: top;
        list-style: none;
        color: #fff;
    }
    .item-img{
        width: 150px;
        height: 150px;
        display: inline-block;
        vertical-align: top;
    }
    .addpuduct{
        height: 40px;
        text-align: center;
        
    }
    .addpuduct button{
        outline: none;
        border: 0;
        width: 290px;
        height: 40px;
        background-color: #41B883;
        color: #fff;
        border-radius: 20px;
        font-size: 15px;
    }
    .addpuduct button:hover{
        background-color: #2C3E50;
    }
</style>