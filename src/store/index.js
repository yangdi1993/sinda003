import Vuex from "vuex"
import Vue from "vue"
Vue.use(Vuex)
export default new Vuex.Store({
  state:{ //状态集合
    test:123,
  },
  mutations:{ //突变集合
    SET_NUM(state,num){
        state.num=num
    }
  },
  actions:{ //操作集合
    setNum({commit},num){
        commit('SET_NUM',num)
    }
  },
  getters:{ //显示集合
    getNum:state=>state.num
  }
})