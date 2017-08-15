<template>
    <div class="loginwrap">
        
        <div class="can-bg"></div>
        <div class="login">
            <h1>{{msg}}</h1>
            <div class="account">
                            账号
                <span></span>
                <input type="text" placeholder="手机号/邮箱" v-model="account"/>
            </div>
            <div class="pwd">
                            密码
                <span></span>
                <input type="password" placeholder="请输入您的密码"  v-model="pwd"/>
            </div>
            <div class="loginbtn">
                <button @click="submitval">立即登录</button>
                <router-link to="zhuce">去注册>></router-link>
            </div>
        </div>
    </div>
</template>

<script>
    
    export default {
        name: 'login',
        
        data() {
            return {
                msg: '用户登录',
                account:"",
                pwd:""
            }
        },
        methods: {
            submitval:function(){
                var account = this.account;
                var passwd = this.pwd;
                this.$http.post("/login",{'name':account, 'pwd': passwd}).then(res => {
                    console.log(res);
                    if(res.body == "ok"){
                        this.$store.commit("setAccount", account);
                        this.$router.push({
                            path: "/main"
                        });
                    } else if(res.body == "fail"){
                        alert("登录失败，请核对账号密码后再试");
                    }
                    
                    
                },res => {
                    console.log(res);
                });
            }
        }
    }
</script>

<style scoped>
    .loginwrap{
        width: 100%;
        height: 100%;
        background-color: #2C3E50;
        position: absolute;
        z-index: 10;

    }
    .login {
        background: rgba(0, 0, 0, 0.3);
        width: 424px;
        min-height: 348px;
        font-family: "微软雅黑";
        margin: 0 auto;
        border-radius: 5px;
        padding: 20px 60px;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -252px;
        margin-top: -184px;
        
    }
    .login:hover{
        -webkit-animation-name: buzz-out;
        -webkit-animation-duration: 0.75s;
        -webkit-animation-timing-function: linear;
        -webkit-animation-iteration-count: 3;
        -webkit-animation-direction:alternate;
    }
    
    @-webkit-keyframes buzz-out {
          0% {
            -webkit-transform: rotateY(30deg);
          }
          100% {
            -webkit-transform: rotateY(-30deg);
          }
    }
    h1 {
        color: #fff;
        margin-bottom: 30px;
        margin-top: 40px;
    }
    
    .account span,
    .pwd span {
        display: inline-block;
        vertical-align: top;
    }
    
    .account input,
    .pwd input {
        outline: none;
        border: 0;
        width: 300px;
        height: 40px;
        font-size: 20px;
    }
    
    .account span {
        width: 20px;
        height: 21px;
        background: url(../assets/dialog-account.png) 50% no-repeat;
        background-color: #fff;
        display: inline-block;
        vertical-align: top;
        height: 43px;
        
    }
    .account{
        margin-bottom: 20px;
        background-color: #fff;
        color: #41B883;
        font-size: 20px;
        font-weight: 400;
        border-radius: 5px;
    }
    .pwd{
        background-color: #fff;
        margin-bottom: 30px;
        color: #41B883;
        font-size: 20px;
        font-weight: 400;
        border-radius: 5px;
    }
    .pwd span {
        width: 20px;
        height: 16px;
        background: url(../assets/dialog-pwd.png) 50% no-repeat;
        
        display: inline-block;
        vertical-align: top;
        height: 43px;
    }
    .loginbtn button{
        outline: none;
        border: 0;
        background-color: #35495E;
        width: 100%;
        height: 43px;
        font-size: 26px;
        color: #fff;
        border-radius: 5px;
    }
    a{
        text-decoration: none;
        color: #fff;
        display: block;
        text-align: right;
        margin-top: 20px;
    }
    .router-link-active {
        text-decoration: none;
    }
    .can-bg{
        width: 10px;
        height: 10px;
        position: absolute;
        top: 0;
        right: 0;
        border-radius: 50%;
        background-color: #FFFFFF;
        -webkit-animation-name: fly-out;
        -webkit-animation-duration: 1s;
        -webkit-animation-timing-function: linear;
        -webkit-animation-iteration-count: infinite;
        
    }
    
    @-webkit-keyframes fly-out {
          from {
            top:0;
            right: 0; 
          }
          to {
            top:100%;
            right:100%; 
          }
    }
</style>