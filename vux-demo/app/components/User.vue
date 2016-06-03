<script>
  import Blur from 'vux/dist/components/blur'
  import Box from 'vux/dist/components/box'
  import Cell from 'vux/dist/components/cell'
  import Group from 'vux/dist/components/group'
  import Tabbar from 'vux/dist/components/tabbar'
  import TabbarItem from 'vux/dist/components/tabbar-item'
  import XHeader from 'vux/dist/components/x-header'
  export default {
    name: 'User',

    data() {
      return {
        iconList: {
          star: 'http://o85fi69p7.bkt.clouddn.com/iconfont_tabbar_star.png',
          evaluate: 'http://o85fi69p7.bkt.clouddn.com/iconfont_tabbar_evaluate.png',
          user: 'http://o85fi69p7.bkt.clouddn.com/iconfont_tabbar_user.png'
        },
        url: 'http://o85fi69p7.bkt.clouddn.com/user_bg.png'
      }
    },

    components: {
      Blur,
      Box,
      Cell,
      Group,
      Tabbar,
      TabbarItem,
      XHeader
    }
  }
</script>
<template>
  <x-header :left-options="{showBack: false}">我的</x-header>
  <blur :blur-amount=40 :url="url">
    <p class="center"><img :src="url"></p>
  </blur>
  <group>
    <cell title="关于我们" is-link></cell>
    <cell title="意见反馈" is-link></cell>
  </group>
  <tabbar>
    <tabbar-item show-dot>
      <img slot="icon" :src="iconList.star">
      <span slot="label">推荐</span>
    </tabbar-item>
    <tabbar-item v-link="{ path: '/home', replace: true }">
      <img slot="icon" :src="iconList.evaluate">
      <span slot="label">测评</span>
    </tabbar-item>
    <tabbar-item selected v-link="{ path: '/user', replace: true }">
      <img slot="icon" :src="iconList.user">
      <span slot="label">我的</span>
    </tabbar-item>
  </tabbar>
</template>
<style scoped>
.center {
  text-align: center;
  padding-top: 40px;
  color: #fff;
  font-size: 18px;
}
.center img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 4px solid #ececec;
}
</style>
