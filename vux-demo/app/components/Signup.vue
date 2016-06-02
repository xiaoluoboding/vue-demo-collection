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
        examnum: '',
        realname: '',
        showToast: false
      }
    },

    computed: {
      isSubmit() {
        if(this.username != '' && this.password != ''
        && this.examnum != '' && this.realname != '') {
          return true
        } else {
          return false
        }
      }
    },

    methods: {
      submit() {
        localStorage.setItem('username', this.username)
        localStorage.setItem('password', this.password)
        localStorage.setItem('examnum', this.examnum)
        localStorage.setItem('realname', this.realname)
        setTimeout(() => {
          this.showToast = true
        }, 1500)
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
    <x-input title="用户名：" placeholder="请输入用户名" type="text" :value.sync="username"></x-input>
    <x-input title="密&emsp;码：" placeholder="6-16个字符" :min="6" :max="16" type="password" :value.sync="password"></x-input>
    <x-input title="考&emsp;号：" placeholder="请输入考号" type="text" :value.sync="examnum"></x-input>
    <x-input title="姓&emsp;名：" placeholder="请输入真实姓名" is-type="china-name" :value.sync="realname"></x-input>
  </group>
  <box gap="10px 10px">
    <x-button disabled v-if="!isSubmit">提交注册</x-button>
    <x-button type="primary" @click="submit()" v-else>提交注册</x-button>
  </box>
  <divider><a href="#!" v-link="{ path: '/signin' }">已有账号？</a></divider>
  <toast :show.sync="showToast" >注册成功</toast>
  <!-- {{ $data | json }} -->
</template>
