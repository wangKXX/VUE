export default{
    state:{
        modal:{
            name:"6666",
            sid:"1",
            groupid:"10",
            orderid:"12",
            lasttime:"1497919736"
        },
        isshow: false
    },
    mutations: {
        setModal (state, modal){
            state.modal.name = modal.name;
            state.modal.sid = modal.sid;
            state.modal.groupid = modal.groupid;
            state.modal.orderid = modal.orderid;
            state.modal.lasttime = modal.lasttime;
        },
        setShow (state, isShow){
            state.isshow = isShow;
        }
    },
    getters: {
        getModal: state => {
            return state.modal;
        },
        getIsShow: state => {
            return state.isshow;
        }
    }
    
}
