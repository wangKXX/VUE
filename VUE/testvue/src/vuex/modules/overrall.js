export default{
    state:{
        account: "111"
    },
    mutations:{
        setAccount(state, acc){
            state.account = acc;
        }
    },
    getters: {
        getAccount: state => {
            return state.account;
        }
    }
}
