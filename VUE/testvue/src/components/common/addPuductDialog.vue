<template>
    <div class="modal" v-show="show" transition="fade">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <slot name="header">
                        <p class="title">{{modal.sid}}</p>
                    </slot>
                    <a  class="close" @click="close" href="javascript:void(0)"></a>
                </div>
                <div class="modal-body">
                    <div class="item-img">
                        <img :src= "imgdata | retimgUrl(imgdata)" alt="商品图片"/>
                    </div>
                    <slot name="body">
                        <div class="modal-body-right">
                        	<p class="notice">品名：{{modal.name}}</p>
                            <p class="notice">类别：{{modal.groupid}}</p>
                            <p class="notice">单价：{{modal.orderid}}</p>
                            <p class="notice">截止日期：{{modal.lasttime | turnTime(modal.lasttime)}}</p>
                        </div>    
                    </slot>
                    <guCar :model="modal.orderid"></guCar>
                </div>
                <div class="modal-foot">
                    <button class="sure">确认</button><button class="sure" @click="close">取消</button>
                </div>
            </div>
        </div>
    </div>
</template> 

<script>
    import guCar from "./gucar.vue"
    export default{
        name: "puductDialog",
        components: {
            guCar
        },
        
        data() {
            return {
                modal:this.$store.getters.getModal,
                show: this.$store.getters.getIsShow,  
                imgdata:"puduct.jpg"
            };
        },
        filters: {
            turnTime: function(date){
                return new Date(+date).Format("yyyy-MM-dd");
            },
            retimgUrl: function(url){
                return "../../static/images/" + url;
            }
        },
        computed: {
            getUserIsShow() {
                return this.$store.getters.getIsShow;
            },
            getUserModal() {
                return this.$store.getters.getModal;
            }
        },
        watch:{
            getUserIsShow(val) {
                return this.show = val;
            },
            getUserModal(modal) {
                this.modal = modal;
            }
        },
        methods: {
            close: function() {
                this.$store.commit("setShow", false);
            },
            
        },
        

    }
</script>

<style scoped="scoped">
    .modal{
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: rgba(0,0,0,0.3);
    }
    .modal-dialog{
        width: 500px;
        background-color: #fff;
        position: relative;
        left: 40%;
        top: 30%;
        height: 500px;
        
    }
    .modal-header{
        background-color: #41B883;
        height: 50px;
    }
    .modal-content{
        margin-top: -17px;
    }
    .close{
        display: inline-block;
        vertical-align: top;
         float: right;
         overflow: hidden;
         background: url(../../assets/dialog-close-btn.png) 50% no-repeat;
         width: 37px;
         height: 37px;
         margin-top: 7px;
         margin-right: 10px;
         transition: All 0.4s ease-in-out;
        -webkit-transition: All 0.4s ease-in-out;
        -moz-transition: All 0.4s ease-in-out;
        -o-transition: All 0.4s ease-in-out;
        
    }
    .close:hover{
        transform: rotate(360deg) scale(1.1);
        -webkit-transform: rotate(360deg) scale(1.1);
        -moz-transform: rotate(360deg) scale(1.1);
        -o-transform: rotate(360deg) scale(1.1);
        -ms-transform: rotate(360deg) scale(1.1);
    }
    .modal-header .title{
        display: inline-block;
        vertical-align: top;
        margin-left: 15px;
        float: left;
        overflow: hidden;
        font-size: 18px;
        font-weight: bold;
        color: #fff;
       
    }
    .modal-foot{
        position: absolute;
        bottom: 0;
    }
    .modal-foot button{
        width: 250px;
        height: 50px;
        border: 0;
        outline: none;
        background-color: #41B883;
        color: #fff;
        font-size: 18px;
        cursor: pointer;
    }
    .modal-foot button:hover{
        background-color: #2C3E50;
    }
    .modal-foot button:first-child{
        border-right: 1px solid white;
    }
    .item-img{
        width: 150px;
        height: 150px;
        display: inline-block;
        vertical-align: top;
        margin-top: 15px;
        
    }
    /*.item-img img{
        transition: All 0.4s ease-in-out;
        -webkit-transition: All 0.4s ease-in-out;
        -moz-transition: All 0.4s ease-in-out;
        -o-transition: All 0.4s ease-in-out;
    }
    .item-img img:hover{
        transition: scale(1.2);
        -webkit-transition: scale(1.2);
        -moz-transition: scale(1.2);
        -o-transition: scale(1.2);
    }*/
    .modal-body-right{
        width: 290px;
        text-align: left;
        display: inline-block;
        vertical-align: top;
        margin-left: 10px;
    }
    
</style>