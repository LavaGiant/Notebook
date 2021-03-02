import DataHelper from './DataHelper'
import ItemDate from '@/model/ItemData'
import Category from '@/model/CateEnum'
class ActionHelper {
  dataHelper: DataHelper = new DataHelper('memoData', 'id')
  memoList: Array<ItemDate>
  constructor() {
    this.memoList = this.readData()
  }
  readData(): Array<ItemDate> {
    let arrObj = this.dataHelper.readData()
    let arrItem = arrObj.map((ele: any) => {
      let item: ItemDate = new ItemDate()
      // item = {...ele}
      item.id = ele.id
      item.categoryId = ele.categoryId
      item.title = ele.title
      item.content = ele.content
      item.createTime = ele.createTime
      return item
    })
    return arrItem
  }
  add(item: ItemDate): number {
    item.id = this.dataHelper.addData(item)
    this.memoList.push(item)
    this.dataHelper.saveData(this.memoList)

    return item.id
  }
  getCategoryName(cateId: Category): string {
    const arrNames = ['工作', '生活', '学习']
    return arrNames[cateId]
  }
  edit(item: ItemDate): void {
    let editItem: ItemDate | undefined = this.memoList.find((ele) => {
      return ele.id == item.id
    })
    if(editItem) {
      editItem.categoryId = item.categoryId
      editItem.title = item.title
      editItem.content = item.content
      this.dataHelper.saveData(this.memoList)
    }
  }
  remove(id: number):void {
    let index:number = this.memoList.findIndex((ele) => {
      return ele.id == id
    })
    if(index > -1) {
      this.memoList.splice(index, 1)
      this.dataHelper.saveData(this.memoList)
    }
  }
}

export default ActionHelper