<script>
  import Blur from 'vux/dist/components/blur'
  import Box from 'vux/dist/components/box'
  import Cell from 'vux/dist/components/cell'
  import Group from 'vux/dist/components/group'
  import XHeader from 'vux/dist/components/x-header'
  import HomeTabbar from './HomeTabbar.vue'
  export default {
    name: 'User',

    data() {
      return {
        user_bg: 'http://o8yu724qs.bkt.clouddn.com/user_bg.png'
      }
    },

    components: {
      Blur,
      Box,
      Cell,
      Group,
      XHeader,
      HomeTabbar
    }
  }
</script>
<template>
  <x-header :left-options="{showBack: false}">我的</x-header>
  <blur :blur-amount=40 :url="user_bg">
    <p class="center"><img :src="user_bg"></p>
  </blur>
  <group>
    <cell title="关于我们" is-link></cell>
    <cell title="意见反馈" is-link></cell>
  </group>
  <home-tabbar></home-tabbar>
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
