import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    accountBook:[],
    list:[],
    year:0,
    month:0,
    monthExpend:0,
    monthIncome:0,
  },
  mutations: {
    changeBook(state,data){
      state.accountBook = data
    },
    changeDate(state,data){
      state.year = data.year
      state.month = data.month
    },
    changeMonthInfo(state,data){
      state.monthExpend = data.monthExpend
      state.monthIncome = data.monthIncome
    },
    changeList(state,index){
      state.list = state.accountBook[index]
    }
  },
  actions: {},
  modules: {},
});
