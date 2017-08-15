import Vue from 'vue'
import Vuex from 'vuex'
import overRall from "./modules/overrall"
import puduct from "./modules/puduct.js"
Vue.use(Vuex);
export default new Vuex.Store({
    modules:{
        overRall: overRall,
        puduct: puduct  
    }
})
