<script>
  import Group from 'vux/dist/components/group'
  import XButton from 'vux/dist/components/x-button'
  import XHeader from 'vux/dist/components/x-header'
  import XInput from 'vux/dist/components/x-input'
  import Box from 'vux/dist/components/box'
  export default {
    name: 'Signup',
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
  <x-header>用户注册</x-header>
  <group title="用户信息">
    <x-input title="用户名：" placeholder="请输入用户名" type="text"></x-input>
    <x-input title="密&emsp;码：" placeholder="6-16个字符" :min="6" :max="16" type="password"></x-input>
    <x-input title="考&emsp;号：" placeholder="请输入考号" type="text"></x-input>
    <x-input title="姓&emsp;名：" placeholder="请输入姓名" is-type="china-name"></x-input>
  </group>
  <box gap="10px 10px">
    <x-button type="primary">注册</x-button>
  </box>
</template>
