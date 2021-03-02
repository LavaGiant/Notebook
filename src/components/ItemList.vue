<template>
  <div id="memos" class="container">
    <memo-item v-for="item in showMemoList" :key="item.id" :memo="item"/>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator' 
import ItemData from '../model/ItemData'
import MemoItem from './MemoItem.vue'
@Component({
  components: {
    MemoItem
  }
})
export default class ItemList extends Vue {
  memoArr:Array<ItemData> = this.$store.state.aHelper.memoList
  get showMemoList():Array<ItemData> {
    let showId:number = this.$store.state.filterCateId
    if(showId === -1) {
      return this.memoArr
    }else {
      return this.memoArr.filter((item:ItemData) => {
        return item.categoryId === showId
      })
    }
  }
}
</script>

<style>

</style>