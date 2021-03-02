<template>
  <!-- 菜单栏 -->
  <nav class="navbar navbar-default navbar-fixed-top">
    <div class="container">
      <div class="navbar-header">
        <a class="navbar-brand">
          <img height="40" src="../assets/logo.png"
        /></a>
        <button
          type="button"
          class="navbar-toggle collapsed"
          data-toggle="collapse"
          data-target=".navbar-collapse"
          aria-expanded="false"
        >
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
      </div>
      <div class="collapse navbar-collapse navbar-right">
        <ul class="nav navbar-nav">
          <li class="add dropdown">
            <a class="create-new dropdown-toggle" data-toggle="dropdown"
              >新建</a
            >
            <ul class="dropdown-menu">
              <li>
                <a @click="showEdit">文本便签</a>
              </li>
            </ul>
          </li>
          <li class="categories dropdown">
            <a class="current-category dropdown-toggle" data-toggle="dropdown">
              {{cateName}}
              <span class="count badge">{{doFilter(-1)}}</span>
            </a>
            <ul class="dropdown-menu">
              <li class="total" @click="changeCurId(-1, '全部')">
                <a>
                  全部
                  <span class="count badge">{{doFilter(-1)}}</span>
                </a>
              </li>
              <li class="divider"></li>
              <li @click="changeCurId(0, '工作')">
                <a>
                  工作
                  <span class="count badge">{{doFilter(0)}}</span>
                </a>
              </li>
              <li @click="changeCurId(1, '生活')">
                <a>
                  生活
                  <span class="count badge">{{doFilter(1)}}</span>
                </a>
              </li>
              <li @click="changeCurId(2, '学习')">
                <a>
                  学习
                  <span class="count badge">{{doFilter(2)}}</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ItemData from "../model/ItemData";
@Component
export default class MenuBar extends Vue {
  cateName:string = '全部'
  showEdit() {
    this.$store.state.transMemo = new ItemData(-1, 0);
    this.$store.state.isShow = true;
  }
  doFilter(cid: number = -1): number {
    if (cid === -1) {
      return this.$store.state.aHelper.memoList.length;
    } else {
      return this.$store.state.aHelper.memoList.filter((ele: any) => {
        return ele.categoryId === cid;
      }).length;
    }
  }
  changeCurId(cid:number, cname:string):void {
    this.$store.state.filterCateId = cid
    this.cateName = cname
  }
}
</script>
<style scoped>
.navbar-brand > img {
  display: inline-block;
}
</style>