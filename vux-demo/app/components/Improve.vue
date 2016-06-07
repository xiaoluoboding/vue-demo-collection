<script>
  import Group from 'vux/dist/components/group'
  import XButton from 'vux/dist/components/x-button'
  import XHeader from 'vux/dist/components/x-header'
  import XInput from 'vux/dist/components/x-input'
  import Box from 'vux/dist/components/box'
  export default {
    name: 'Improve',

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
  <group title="用户信息">
    <x-input title="邮&emsp;箱" :min=6 :max=30 is-type=email :value.sync="value"></x-input>
    <x-input
      title="手机号"
      is-type="china-mobile"
      :show-clear=true
      placeholder="请输入手机号"></x-input>
  </group>
  <!-- <divider>default</divider> -->
  <box gap="10px 10px">
    <x-button type="primary">提交</x-button>
  </box>
</template>
