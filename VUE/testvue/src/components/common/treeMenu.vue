<template>
    <li>
        <span @click="toggle" class="title">
            <i class="icon" v-show="isFolder" name="add" index="index">></i>
            <i class="icon" v-show="!isFolder"></i>
             {{ model.menuName }}
         </span>
         <transition name="list">
            <ul v-show="open" v-if="isFolder">
                <tree-menu v-for="item in model.children" :model="item"></tree-menu>
            </ul>
        </transition>
    </li>
</template>
<script>
    export default {
        name: 'treeMenu',
        props: ['model','index'],
        data() {
            return {
                open: false,
                isFolder: true
            }
        },
        computed: {
            isFolderP: function() {
                return this.isFolder = this.model.children && this.model.children.length;
            }
        },
        watch:{
            isFolderP: function(val) {
                this.isFolder = val;
            }
        },
        methods: {
            hasClass: function(obj, cls) {  
                return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));  
            },
            
            removeClass: function(obj, cls) {  
                if (hasClass(obj, cls)) {  
                    var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');  
                    obj.className = obj.className.replace(reg, ' ');  
                }  
            }, 
            
            toggle: function(event) {
                var $el = event.currentTarget;
                if(this.isFolder) {
                    this.open = !this.open;
                    if(!this.$options.methods.hasClass($el.firstChild, "chanage")){
                        $el.firstChild.classname += "chanage";
                        //$el.firstChild.innerText = "v";
                    } else{
                        this.$options.methods.removeClass($el.firstChild, "chanage");
                         $el.firstChild.innerText = ">";
                    }
                    
                }
            }
            
        }
    }
</script>
<style scoped="scoped">
    ul {
        list-style: none;
    }
    
    i.icon {
        display: inline-block;
        width: 15px;
        height: 15px;
        background-repeat: no-repeat;
        vertical-align: middle;
        font-weight: bolder;
        transition: all 1s;
    }
    i.icon.chanage{
        transform: rotate(90deg) scale(1.1);
        -webkit-transform: rotate(90deg) scale(1.1);
        -moz-transform: rotate(90deg) scale(1.1);
        -o-transform: rotate(90deg) scale(1.1);
        -ms-transform: rotate(90deg) scale(1.1);
    }
    .tree-menu li {
        line-height: 1.5;    
    }
    li ul{
        margin: 0;
        padding: 10px;
        background-color: #003a53;
    }
    .title{
        cursor: pointer;
    }
    .list-enter-active, .list-leave-active {
      transition: all 0.3s;
    }
    .list-enter, .list-leave-active {
      opacity: 0;
      transform: translateY(15px);
    }
</style>