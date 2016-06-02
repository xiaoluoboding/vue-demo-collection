<script>
  import Group from 'vux/dist/components/group'
  import XButton from 'vux/dist/components/x-button'
  import XHeader from 'vux/dist/components/x-header'
  import XInput from 'vux/dist/components/x-input'
  import Box from 'vux/dist/components/box'
  export default {
    name: 'Improve',

    data () {
      return {
        list: [{key: 'li', value: '理综'}, {key: 'wen', value: '文综'}]
      }
    },
    
    components: {
      Group,
      XButton,
      XHeader,
      XInput,
      Box
    }
  }
</script>
<template>
  <x-header>信息完善</x-header>
  <group title="分数信息">
    <selector title="文&emsp;理" :options="list"></selector>
    <x-input title="总&emsp;分：" placeholder="请输入分数" is-type="number"></x-input>
    <x-input title="数&emsp;学：" placeholder="请输入分数" is-type="number"></x-input>
    <x-input title="语&emsp;文：" placeholder="请输入分数" is-type="number"></x-input>
    <x-input title="英&emsp;语：" placeholder="请输入分数" is-type="number"></x-input>
    <x-input title="物理/政治：" placeholder="请输入分数" is-type="number"></x-input>
    <x-input title="化学/历史：" placeholder="请输入分数" is-type="number"></x-input>
    <x-input title="生物/地理：" placeholder="请输入分数" is-type="number"></x-input>
  </group>
  <!-- <divider>default</divider> -->
  <box gap="10px 10px">
    <x-button type="primary">提交</x-button>
  </box>
</template>
