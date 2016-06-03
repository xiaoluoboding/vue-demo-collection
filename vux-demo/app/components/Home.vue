<script>
  import Box from 'vux/dist/components/box'
  import Flexbox from 'vux/dist/components/flexbox'
  import FlexboxItem from 'vux/dist/components/flexbox-item'
  import Group from 'vux/dist/components/group'
  import Masker from 'vux/dist/components/masker'
  import Tabbar from 'vux/dist/components/tabbar'
  import TabbarItem from 'vux/dist/components/tabbar-item'
  import XHeader from 'vux/dist/components/x-header'
  export default {
    name: 'Home',

    data() {
      return {
        iconList: {
          star: 'http://o85fi69p7.bkt.clouddn.com/iconfont_tabbar_star.png',
          evaluate: 'http://o85fi69p7.bkt.clouddn.com/iconfont_tabbar_evaluate.png',
          user: 'http://o85fi69p7.bkt.clouddn.com/iconfont_tabbar_user.png'
        }
      }
    },

    components: {
      Box,
      Flexbox,
      FlexboxItem,
      Group,
      Masker,
      Tabbar,
      TabbarItem,
      XHeader
    }
  }
</script>
<template>
  <section class="home-header">
    <x-header :left-options="{showBack: false}">首页</x-header>
  </section>
  <section class="home-flexbox">
    <div style="margin: 10px;overflow: hidden;">
      <masker style="border-radius: 2px;" color="e74c3c" :opacity="0.8" v-link="{ path: '/improve' }">
        <div class="m-img"></div>
        <div slot="content" class="m-title">
          完善资料
        </div>
      </masker>
    </div>
    <div style="margin: 10px;overflow: hidden;" v-link="{ path: '/evaluate' }">
      <masker style="border-radius: 2px;" color="3498db" :opacity="0.8">
        <div class="m-img"></div>
        <div slot="content" class="m-title">
          我要测评
        </div>
      </masker>
    </div>
    <div style="margin: 10px;overflow: hidden;" v-link="{ path: '/hisevaluate' }">
      <masker style="border-radius: 2px;" color="2ecc71" :opacity="0.8">
        <div class="m-img"></div>
        <div slot="content" class="m-title">
          历史测评
        </div>
      </masker>
    </div>
    <div style="margin: 10px;overflow: hidden;" v-link="{ path: '/about' }">
      <masker style="border-radius: 2px;" color="9b59b6" :opacity="0.8">
        <div class="m-img"></div>
        <div slot="content" class="m-title">
          关于我们
        </div>
      </masker>
    </div>
  </section>
  <section class="home-tabbar">
    <tabbar>
      <tabbar-item show-dot>
        <img slot="icon" :src="iconList.star">
        <span slot="label">推荐</span>
      </tabbar-item>
      <tabbar-item selected v-link="{ path: '/home', replace: true }">
        <img slot="icon" :src="iconList.evaluate">
        <span slot="label">测评</span>
      </tabbar-item>
      <tabbar-item v-link="{ path: '/user', replace: true }">
        <img slot="icon" :src="iconList.user">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </section>
</template>
<style>
.m-img {
  padding-bottom: 33%;
  display: block;
  position: relative;
  max-width: 100%;
  background-size: cover;
  background-position: center center;
  cursor: pointer;
  border-radius: 2px;
}
.m-title {
  color: #fff;
  text-align: center;
  text-shadow: 0 0 2px rgba(0, 0, 0, .5);
  font-weight: 500;
  font-size: 20px;
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  text-align: center;
  top: 50%;
  transform: translateY(-50%);
}
.m-time {
  font-size: 12px;
  padding-top: 4px;
  border-top: 1px solid #f0f0f0;
  display: inline-block;
  margin-top: 5px;
}
</style>
