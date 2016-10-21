<script>
	import Box from 'vux-components/box'
	import Group from 'vux-components/group'
	import Cell from 'vux-components/cell'
	import XInput from 'vux-components/x-input'
	import XButton from 'vux-components/x-button'
	import XHeader from 'vux-components/x-header'
	import HomeTabbar from './HomeTabbar.vue'

	export default {
		name: 'Insurance',
		data () {
			return {
				defaultAmt: '0.00',
				salary: ''
			}
		},

		computed: {
			yanglao () {
				return this.salary > 0 ? parseFloat(this.salary * 0.08).toFixed(2) : this.defaultAmt
			},
			yiliao () {
				return this.salary > 0 ? parseFloat(this.salary * 0.02 + 3).toFixed(2) : this.defaultAmt
			},
			shiye () {
				return this.salary > 0 ? parseFloat(this.salary * 0.002).toFixed(2) : this.defaultAmt
			},
			gongjijin () {
				return this.salary > 0 ? parseFloat(this.salary * 0.12).toFixed(2) : this.defaultAmt
			},
			heji () {
				return (parseFloat(this.yanglao) + 
								parseFloat(this.yiliao) + 
								parseFloat(this.shiye) + 
								parseFloat(this.gongjijin)).toFixed(2)
			}
		},

	  components: {
	  	Box,
	    Group,
	    Cell,
	    XInput,
	    XButton,
	    XHeader,
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
		
		<group title="个人缴存部分">
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
		  <!--  -->
		</group>
	  <home-tabbar></home-tabbar>
	</div>
</template>
<style>

</style>