import Vue from 'vue'
import Vuex from 'vuex'
import ActionHelper from './ActionHelper'
Vue.use(Vuex)

interface MemoInfo {
  title: string
  content: string
  id: number
  categoryId: number
}
const store = new Vuex.Store({
  state: {
    aHelper: new ActionHelper(),
    isShow: false,
    transMemo: null,
    filterCateId: -1
  },
  mutations: {
    saveNew(state: any, newVal: MemoInfo):void {
      if (newVal && newVal.title.trim().length > 0 && newVal.content.trim().length > 0) {
        newVal.id > -1 ? state.aHelper.edit(newVal) : state.aHelper.add(newVal)
        state.isShow = false
      } else {
        window.alert('请输入正确格式')
      }
    },
    showEditMemo(state:any, editVal:MemoInfo):void {
      state.transMemo = editVal
      state.isShow = true
    }
  },
})
export default store