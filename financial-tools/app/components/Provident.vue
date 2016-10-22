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
				beginSalary: '3500.00',
				isShowClear: false
			}
		},

		computed: {
			taxableIncome () {
				if(parseInt(this.beforeSalary) > 3500) {
					return parseFloat(this.beforeSalary - this.socialInsurance - this.beginSalary).toFixed(2)
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
				if(this.taxableIncome > 0.00) {
					return parseFloat(this.taxableIncome * this.taxRate - this.deduction).toFixed(2)
				}
			},
			salary () {
				if(this.taxableIncome > 0.00) {
					return parseFloat(this.beforeSalary - this.socialInsurance - this.taxes).toFixed(2)
				}
			}
		},

		methods: {

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
  	<x-header :right-options="{showMore: true}">公积金计算</x-header>
  	<group title="输入要素">
		  <x-input type="text" :value.sync="beforeSalary"
		  	title="税前工资："
		  	keyboard=number
		  	placeholder="0.00"
		  	v-ref:input
		  	text-align="right"></x-input>
		  <x-input type="text" :value.sync="socialInsurance"
		  	title="各项社会保险："
		  	keyboard=number
		  	placeholder="0.00"
		  	v-ref:input
		  	text-align="right"></x-input>
		  <x-input :value.sync="beginSalary" title="起征点：" readonly :show-clear=false text-align="right"></x-input>
		  <!-- <cell title="get valid value" :value="'$valid value:' + $refs.input.valid"></cell> -->
		</group>

		<group title="计算结果">
		  <cell title="应纳税所得额：" :value="taxableIncome"></cell>
		  <cell title="适用税率：" :value="taxRate"></cell>
		  <cell title="速算扣除数：" :value="deduction"></cell>
		  <cell title="应缴税款：" :value="taxes"></cell>
		  <cell title="应发工资：">
        <div slot="value">
          <span style="color: green" v-text="salary"></span>
        </div>
      </cell>
		  <!--  -->
		</group>
	  <home-tabbar></home-tabbar>
	</div>
</template>
<style>

</style>
