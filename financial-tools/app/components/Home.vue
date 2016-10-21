<script>
  import Box from 'vux/dist/components/box'
  import Flexbox from 'vux/dist/components/flexbox'
  import FlexboxItem from 'vux/dist/components/flexbox-item'
  import Group from 'vux/dist/components/group'
  import Masker from 'vux/dist/components/masker'
  import XHeader from 'vux/dist/components/x-header'
  import HomeTabbar from './HomeTabbar.vue'
  export default {
    name: 'Home',

    components: {
      Box,
      Flexbox,
      FlexboxItem,
      Group,
      Masker,
      XHeader,
      HomeTabbar
    }
  }
</script>
<template>
  <section class="home-header">
    <x-header :left-options="{showBack: false}">首页</x-header>
  </section>
  <section class="home-flexbox">
    <div style="margin: 10px;overflow: hidden;">
      <masker style="border-radius: 2px;" color="e74c3c" :opacity="0.8" v-link="{ path: '/insurance' }">
        <div class="m-img"></div>
        <div slot="content" class="m-title">
          五险计算
        </div>
      </masker>
    </div>
    <div style="margin: 10px;overflow: hidden;" v-link="{ path: '/provident' }">
      <masker style="border-radius: 2px;" color="3498db" :opacity="0.8">
        <div class="m-img"></div>
        <div slot="content" class="m-title">
          公积金计算
        </div>
      </masker>
    </div>
    <div style="margin: 10px;overflow: hidden;" v-link="{ path: '/' }">
      <masker style="border-radius: 2px;" color="2ecc71" :opacity="0.8">
        <div class="m-img"></div>
        <div slot="content" class="m-title">
          房贷计算
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
  <home-tabbar></home-tabbar>
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
