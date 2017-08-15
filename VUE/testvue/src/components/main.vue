<template>
    <div class="app">
        <div class="main">
            <div class="header">
                <img src="../assets/logo.png" class="logo"/>
                <span>欢迎您，{{account}}</span>
                <user-list></user-list>
            </div>
            <div class="aside">
                <ul v-for="(menuItem, index) in theModel">
                    <my-tree :model="menuItem" :index="index"></my-tree>
                </ul>
            </div>
            <div class="content">
                   <div v-for="item in puduct" class="item-wrap">
                       <puduct-info :model="item"></puduct-info>
                   </div>
            </div>
           
        </div>
    </div>
</template>

<script>
    import myTree from './common/treeMenu.vue'
    import userList from './common/userList.vue'
    import puductInfo from './common/puductInfo.vue'
    var myData = [{
            'id': '1',
            'menuName': '基础管理',
            'menuCode': '10',
            'children': [{
                    'menuName': '用户管理',
                    'menuCode': '11'
                },
                {
                    'menuName': '角色管理',
                    'menuCode': '12',
                    'children': [{
                            'menuName': '管理员',
                            'menuCode': '121'
                        },
                        {
                            'menuName': 'CEO',
                            'menuCode': '122'
                        },
                        {
                            'menuName': 'CFO',
                            'menuCode': '123'
                        },
                        {
                            'menuName': 'COO',
                            'menuCode': '124'
                        },
                        {
                            'menuName': '普通人',
                            'menuCode': '124'
                        }
                    ]
                },
                {
                    'menuName': '权限管理',
                    'menuCode': '13'
                }
            ]
        },
        {
            'id': '2',
            'menuName': '商品管理',
            'menuCode': ''
        },
        {
            'id': '3',
            'menuName': '订单管理',
            'menuCode': '30',
            'children': [{
                    'menuName': '订单列表',
                    'menuCode': '31'
                },
                {
                    'menuName': '退货列表',
                    'menuCode': '32',
                    'children': []
                }
            ]
        },
        {
            'id': '4',
            'menuName': '商家管理',
            'menuCode': '',
            'children': []
        }
    ]
    
    export default {
        components: {
            myTree,userList,puductInfo
        },
        mounted: function(){
            
            this.$http.post("/getall").then(res => {
                if(res.status == 200)
                this.puduct = res.body.eimdata;
                
            })
        },
        data() {
            return {
                puduct: "[]",
                theModel: myData,
                account: this.$store.getters.getAccount,
            }
        }
    }
</script>

<style scoped="scoped">
    html,
    body {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
    }
    .app{
        height: 100%;
        background: rgba(0,0,0,0.3);
    }
    .main{
        width: 70%;
        height: 100%;
        margin: 0 auto;
        background-color: #003A53;
    }
    .item-wrap{
        width: 50%;
        display: inline-block;
        vertical-align: top;
    }
    
    .header {
        height: 200px;
        border-bottom: 1px solid #FFF;
    }
    
    .header span {
        display: inline-block;
        float: right;
        margin-top: 9%;
        margin-top: 9%;
        margin-right: 100px;
        color: #fff;
    }
    
    .aside ul {
        list-style: none;
        margin: 0;
        padding: 0;
        text-align: left;
        
    }
    
    .aside {
        display: inline-block;
        vertical-align: top;
        min-width: 200px;
        padding-top: 50px;
        padding-left: 20px;
        overflow-x: auto;
    }
    
    .content {
        display: inline-block;
        vertical-align: top;
        width: 1000px;
        height: 629px;
        overflow: auto;
        text-align: left;
    }
    
    .item {
        cursor: pointer;
    }
    
    .header{
        text-align: left;
        margin-bottom: 20px;
    }
    .header img{
        margin-left: 100px;
    }
    .aside{
        border: 1px solid #fff;
        background-color: #2C3E50;
        height: 500px;
        color: #41B883;
        margin-right: 20px;
    }
    .content{
        border-radius: 10px;
        padding-top: 50px;
    }
</style>