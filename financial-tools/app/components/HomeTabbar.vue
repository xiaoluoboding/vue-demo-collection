<script>
  import Tabbar from 'vux/dist/components/tabbar'
  import TabbarItem from 'vux/dist/components/tabbar-item'
	export default {
		name: 'HomeTabbar',
	  data() {
      return {
        iconList: {
          star: 'http://o8yu724qs.bkt.clouddn.com/iconfont_tabbar_star.png',
          calc: 'http://o8yu724qs.bkt.clouddn.com/iconfont_tabbar_calc.png',
          user: 'http://o8yu724qs.bkt.clouddn.com/iconfont_tabbar_user.png'
        }
      }
    },
    components: {
    	Tabbar,
    	TabbarItem
    }
	}
</script>
<template>
	<section class="home-tabbar">
    <tabbar>
      <tabbar-item show-dot>
        <img slot="icon" :src="iconList.star">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item selected v-link="{ path: '/home', replace: true }">
        <img slot="icon" :src="iconList.calc">
        <span slot="label">理财小工具</span>
      </tabbar-item>
      <tabbar-item v-link="{ path: '/user', replace: true }">
        <img slot="icon" :src="iconList.user">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </section>
</template>