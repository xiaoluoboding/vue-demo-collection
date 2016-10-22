<script>
	import Box from 'vux-components/box'
	import Group from 'vux-components/group'
	import Cell from 'vux-components/cell'
	import XInput from 'vux-components/x-input'
	import XButton from 'vux-components/x-button'
	import XHeader from 'vux-components/x-header'
	import Tab from 'vux-components/tab'
	import TabItem from 'vux-components/tab-item'
	import Swiper from 'vux-components/swiper'
	import SwiperItem from 'vux-components/swiper-item'
	import HomeTabbar from './HomeTabbar.vue'

	const list = () => ['个人部分','单位部分']

	export default {
		name: 'Insurance',

		data () {
			return {
				defaultAmt: '0.00',
				list: list(),
				salary: '',
				index: 0
			}
		},

		computed: {
			gr_yanglao () {
				return this.salary > 0 ? parseFloat(this.salary * 0.08).toFixed(2) : this.defaultAmt
			},
			gr_yiliao () {
				return this.salary > 0 ? parseFloat(this.salary * 0.02 + 3).toFixed(2) : this.defaultAmt
			},
			gr_shiye () {
				return this.salary > 0 ? parseFloat(this.salary * 0.002).toFixed(2) : this.defaultAmt
			},
			gr_gongjijin () {
				return this.salary > 0 ? parseFloat(this.salary * 0.12).toFixed(2) : this.defaultAmt
			},
			gr_heji () {
				return (parseFloat(this.gr_yanglao) + parseFloat(this.gr_yiliao) + parseFloat(this.gr_shiye) + parseFloat(this.gr_gongjijin)).toFixed(2)
			},
			dw_yanglao () {
				return this.salary > 0 ? parseFloat(this.salary * 0.2).toFixed(2) : this.defaultAmt
			},
			dw_yiliao () {
				return this.salary > 0 ? parseFloat(this.salary * 0.1).toFixed(2) : this.defaultAmt
			},
			dw_shiye () {
				return this.salary > 0 ? parseFloat(this.salary * 0.01).toFixed(2) : this.defaultAmt
			},
			dw_gongshang () {
				return this.salary > 0 ? parseFloat(this.salary * 0.01).toFixed(2) : this.defaultAmt
			},
			dw_shengyu () {
				return this.salary > 0 ? parseFloat(this.salary * 0.008).toFixed(2) : this.defaultAmt
			},
			dw_heji () {
				return (
					parseFloat(this.dw_yanglao) + parseFloat(this.dw_yiliao) +
					parseFloat(this.dw_shiye) + parseFloat(this.dw_gongshang) +
					parseFloat(this.dw_shengyu) + parseFloat(this.gr_gongjijin)).toFixed(2)
			},
		},

	  components: {
	  	Box,
	    Group,
	    Cell,
	    XInput,
	    XButton,
	    XHeader,
			Tab,
			TabItem,
			Swiper,
			SwiperItem,
	    HomeTabbar
	  }
	}
</script>
<template>
  <div>
  	<x-header :right-options="{showMore: true}">五险计算</x-header>
  	<group title="输入要素">
		  <x-input type="text" :value.sync="salary"
		  	title="税前工资："
		  	keyboard=number
		  	placeholder="0.00"
		  	v-ref:input
		  	text-align="right"></x-input>
		</group>

		<tab :line-width=2 active-color='#fc378c' :index.sync="index">
      <tab-item class="vux-center" :selected="tab1 === item" v-for="item in list" @click="tab1 = item">{{item}}</tab-item>
    </tab>
    <swiper :index.sync="index" height="480px" :show-dots="false">
      <swiper-item>
				<group>
				  <cell title="养老" :value="gr_yanglao"></cell>
				  <cell title="医疗" :value="gr_yiliao"></cell>
				  <cell title="失业" :value="gr_shiye"></cell>
				  <cell title="工伤" :value="gr_gongshang"></cell>
				  <cell title="生育" :value="gr_shengyu"></cell>
				  <cell title="公积金" :value="gr_gongjijin"></cell>
				  <cell title="合计">
		        <div slot="value">
		          <span style="color: green" v-text="gr_heji"></span>
		        </div>
		      </cell>
				</group>
      </swiper-item>
      <swiper-item>
				<group>
				  <cell title="养老" :value="dw_yanglao"></cell>
				  <cell title="医疗" :value="dw_yiliao"></cell>
				  <cell title="失业" :value="dw_shiye"></cell>
				  <cell title="工伤" :value="dw_gongshang"></cell>
				  <cell title="生育" :value="dw_shengyu"></cell>
				  <cell title="公积金" :value="gr_gongjijin"></cell>
				  <cell title="合计">
		        <div slot="value">
		          <span style="color: green" v-text="dw_heji"></span>
		        </div>
		      </cell>
				</group>
      </swiper-item>
    </swiper>

		<!-- <group title="个人缴存部分">
		  <cell title="养老" :value="yanglao"></cell>
		  <cell title="医疗" :value="yiliao"></cell>
		  <cell title="失业" :value="shiye"></cell>
		  <cell title="工伤" :value="gongshang"></cell>
		  <cell title="生育" :value="shengyu"></cell>
		  <cell title="公积金" :value="gongjijin"></cell>
		  <cell title="合计">
        <div slot="value">
          <span style="color: green" v-text="heji"></span>
        </div>
      </cell>
		</group> -->
	  <home-tabbar></home-tabbar>
	</div>
</template>
<style>

</style>
