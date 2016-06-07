<script>
  import Group from 'vux/dist/components/group'
  import XButton from 'vux/dist/components/x-button'
  import XHeader from 'vux/dist/components/x-header'
  import XInput from 'vux/dist/components/x-input'
  import Box from 'vux/dist/components/box'
  import Divider from 'vux/dist/components/divider'
  import Toast from 'vux/dist/components/toast'
  export default {
    name: 'Signup',

    data() {
      return {
        username: '',
        password: '',
        showToast: false
      }
    },

    methods: {
      submit() {
        localStorage.setItem('username', this.username)
        localStorage.setItem('password', this.password)
        setTimeout(() => {
          this.showToast = true
          this.goHome()
        }, 1500)
      },
      goHome() {
        return this.$route.router.go({path: '/home',replace: true})
      }
    },
    components: {
      Group,
      XButton,
      XHeader,
      XInput,
      Box,
      Divider,
      Toast
    }
  }
</script>
<template>
  <x-header>新用户注册</x-header>
  <group>
    <x-input title="用户名：" placeholder="请输入用户名" type="text" :value.sync="username" v-ref:username></x-input>
    <x-input title="密&emsp;码：" placeholder="6-16个字符" :min="6" :max="16" type="password" :value.sync="password" v-ref:password></x-input>
  </group>
  <box gap="10px 10px">
    <x-button type="primary" @click="submit()"
    v-if="$refs.username.valid && $refs.password.valid">提交注册</x-button>
    <x-button disabled v-else>提交注册</x-button>
  </box>
  <divider><a href="#!" v-link="{ path: '/signin' }">已有账号？</a></divider>
  <toast :show.sync="showToast" >注册成功</toast>
  <!-- {{ $refs.username.valid }} -->
</template>
