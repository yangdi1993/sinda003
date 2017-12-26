import Vuex from "vuex"
import Vue from "vue"
Vue.use(Vuex)
export default new Vuex.Store({
  state:{ //状态集合
    num:0,
    name:'',
    title:'信达电子商务系统'
  },
  mutations:{ //突变集合
    SET_NUM(state,num){
        state.num=num
    },
    SET_NAME(state,name){
        state.name=name
    },
    SET_TITLE(state,title){
        state.title=title
    }
  },
  actions:{ //操作集合
    setNum({commit},num){
        commit('SET_NUM',num)
    },
    setName({commit},name){
        commit('SET_NAME',name)
    },
    setTitle({commit},title){
        commit('SET_TITLE',title)
    }
  },
  getters:{ //显示集合
    getNum:state=>state.num,  
    getName:state=>{
      if(state.name){
        return state.name;
        // return sessionStorage.getItem('userPhone');
      }else{
        return sessionStorage.getItem('userPhone');
      }
    },
    getTitle:state=>state.title
  }
})

