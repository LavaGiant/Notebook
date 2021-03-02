<template>
  <div id="app">
    <menu-bar/>
    <item-list/>
    <memo-editor v-if="$store.state.isShow"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MenuBar from './components/MenuBar.vue'
import MemoEditor from './components/MemoEditor.vue'
import ItemList from './components/ItemList.vue'
@Component({
  components: {
    MenuBar,
    ItemList,
    MemoEditor
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">

</style>
