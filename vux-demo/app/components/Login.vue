<script>
  import Group from 'vux/dist/components/group'
  import XButton from 'vux/dist/components/x-button'
  import XHeader from 'vux/dist/components/x-header'
  import XInput from 'vux/dist/components/x-input'
  import Box from 'vux/dist/components/box'
  export default {
    name: 'Login',
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
  <x-header>用户登录</x-header>
  <group>
    <x-input title="用户名：" placeholder="请输入用户名" type="text"></x-input>
    <x-input title="密&emsp;码：" placeholder="请输入密码" :min="6" :max="16" type="password"></x-input>
  </group>
  <box gap="10px 10px">
    <x-button type="primary">登录</x-button>
  </box>
</template>
