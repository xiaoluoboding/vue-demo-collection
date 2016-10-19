<script>
	import Box from 'vux-components/box'
	import Group from 'vux-components/group'
	import Cell from 'vux-components/cell'
	import XInput from 'vux-components/x-input'
	import XButton from 'vux-components/x-button'
	import XHeader from 'vux-components/x-header'
	import HomeTabbar from './HomeTabbar.vue'
	export default {
		name: 'Provident',
		data () {
			return {
				beforeSalary: '',
				socialInsurance: '',
				beginSalary: '3500'
			}
		},

		computed: {
			taxableIncome () {
				if(parseInt(this.beforeSalary) > 3500) {
					return this.beforeSalary - this.socialInsurance - this.beginSalary + ''
				}
			},
			taxRate () {
				if(this.beforeSalary >= 1500 && this.beforeSalary < 4500) {
					return 0.1 + ''
				} else if(this.beforeSalary >= 4500 && this.beforeSalary < 9000) {
					return 0.2 + ''
				} else if(this.beforeSalary >= 9000 && this.beforeSalary < 35000) {
					return 0.25 + ''
				} else if(this.beforeSalary >= 35000 && this.beforeSalary < 55000) {
					return 0.3 + ''
				} else if(this.beforeSalary >= 55000 && this.beforeSalary < 80000) {
					return 0.35 + ''
				} else if(this.beforeSalary >= 80000) {
					return 0.45 + ''
				} else {
					return 0.03 + ''
				}
			},
			deduction () {
				if(this.beforeSalary >= 1500 && this.beforeSalary < 4500) {
					return 105 + ''
				} else if(this.beforeSalary >= 4500 && this.beforeSalary < 9000) {
					return 555 + ''
				} else if(this.beforeSalary >= 9000 && this.beforeSalary < 35000) {
					return 1005 + ''
				} else if(this.beforeSalary >= 35000 && this.beforeSalary < 55000) {
					return 2755 + ''
				} else if(this.beforeSalary >= 55000 && this.beforeSalary < 80000) {
					return 5505 + ''
				} else if(this.beforeSalary >= 80000) {
					return 13505 + ''
				} else {
					return 0 + ''
				}
			},
			taxes () {
				if(this.taxableIncome > 0) {
					return this.taxableIncome * this.taxRate - this.deduction + ''
				}
			},
			salary () {
				if(this.taxableIncome > 0) {
					return this.beforeSalary - this.socialInsurance - this.taxes + ''
				}
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
  	<x-header :right-options="{showMore: true}">公积金计算器</x-header>
  	<group title="输入要素">
		  <x-input type="text" :value.sync="beforeSalary" title="税前工资：" keyboard=number placeholder="0.00" v-ref:input></x-input>
		  <x-input type="text" :value.sync="socialInsurance" title="各项社会保险：" keyboard=number placeholder="0.00" v-ref:input></x-input>
		  <x-input :value.sync="beginSalary" title="起征点：" readonly></x-input>
		  <!-- <cell title="get valid value" :value="'$valid value:' + $refs.input.valid"></cell> -->
		</group>
		
		<group title="计算结果">
		  <x-input :value.sync="taxableIncome" title="应纳税所得额：" readonly placeholder="0.00"></x-input>
		  <x-input :value.sync="taxRate" title="适用税率：" readonly placeholder="0.00"></x-input>
		  <x-input :value.sync="deduction" title="速算扣除数：" readonly></x-input>
		  <x-input :value.sync="taxes" title="应缴税款：" readonly placeholder="0.00"></x-input>
		  <x-input :value.sync="salary" title="应发工资：" readonly placeholder="0.00"></x-input>
		</group>
	  <home-tabbar></home-tabbar>
	</div>
</template>
<style>
	
</style>