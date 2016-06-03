<script>
  import Group from 'vux/dist/components/group'
  import XButton from 'vux/dist/components/x-button'
  import XHeader from 'vux/dist/components/x-header'
  import XInput from 'vux/dist/components/x-input'
  import Box from 'vux/dist/components/box'
  export default {
    name: 'Evaluate',
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
  <x-header>学科分析</x-header>
  <group>
    <x-input title="学校" placeholder="请输入学校" type="text"></x-input>
    <x-input title="专业" placeholder="请输入专业"></x-input>
    <x-input title="总分" placeholder="请输入总分" type="text"></x-input>
  </group>
  <box gap="10px 10px">
    <x-button type="primary">提交测评</x-button>
  </box>
</template>
