<template>
    <div class="gucar">
        <div class="cz-modal">
            <button class="add" @click="add"></button>
            <input type="number" min="1"  v-model="num"/>
            <button class="jian" @click="jian"></button>
        </div>
        <div class="all-money">总金额：{{allMoney*num | chanageType(allMoney, num)}}</div>
    </div>
</template>

<script>
    export default{
        name:"GuCar",
        props:["model"],
        data () {
            return {
                allMoney: this.model,
                num: 1
            }
            
        },
        filters:{
            chanageType: function(Val, num){
                return "￥" + (Val * num) ;
            }
        },
        methods: {
            add: function(){
                var num = this.num;
                this.num = num + 1;
            },
            jian: function(){
                var num = this.num;
                if(num == 1){
                    return;
                }
                this.num = num - 1;
            }
        },
        computed: {
            chanagePice() {
                this.num = 1;
                return this.model;
            },
            
        },
        watch:{
            chanagePice(val) {
                return this.allMoney = val;
            },
            
        },
    }
</script>

<style>
    .add,.jian{
        display: inline-block;
        vertical-align: top;
        width: 30px;
        height: 30px;
        border-radius: 15px;
        cursor: pointer;
    }
    .cz-modal{
        width: 170px;
        border: 2px solid #41B883;
        background-color: #41B883;
        margin: 10px auto;
        border-radius: 15px;
        
    }
    .cz-modal button{
        border-radius: 15px;
        outline: none;
        border:0;
    }
    .add{
        background: url(../../assets/jia.png) 50% no-repeat;
        
    }
    .jian{
        background: url(../../assets/jian.png) 50% no-repeat;
        
    }
    .all-money{
        text-align: right;
        margin-top: 149px;
        padding-right: 40px;
    }
    input[type=number] {  
        -moz-appearance:textfield; 
        outline: none;
        border: 0;
        height: 30px;
        font-size: 18px;
        width: 100px;
        text-align: center;
        color: #41B883;
        
    }  
    input[type=number]::-webkit-inner-spin-button,  
    input[type=number]::-webkit-outer-spin-button {  
        -webkit-appearance: none;  
        margin: 0;  
    }  
</style>