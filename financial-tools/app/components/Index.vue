<script>
  import Group from 'vux/dist/components/group'
  import XButton from 'vux/dist/components/x-button'
  import XHeader from 'vux/dist/components/x-header'
  import XInput from 'vux/dist/components/x-input'
  import Box from 'vux/dist/components/box'
  export default {
    name: 'Index',

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
  <div class="index">
    <section class="index-name">
      <h1>登录页</h1>
    </section>
    <section class="index-form">
      <box gap="10px 10px">
        <group>
          <x-input title="用户名：" placeholder="请输入用户名" type="text"></x-input>
          <x-input title="密&emsp;码：" placeholder="请输入密码" :min="6" :max="16" type="password"></x-input>
        </group>
      </box>
    </section>
    <box gap="10px 10px">
      <x-button type="primary">登录</x-button>
      <x-button plain type="primary" v-link="{ path: '/signup' }">注册</x-button>
    </box>
  </div>
</template>
<style media="screen">
  .index {
    position: absolute;

    top: 0;

    right: 0;

    bottom: 0;

    left: 0;

    /* 加载背景图 */
    background-image: url(http://o8yu724qs.bkt.clouddn.com/index_bg.png);

    /* 背景图垂直、水平均居中 */
    background-position: center center;

    /* 背景图不平铺 */
    background-repeat: no-repeat;

    /* 当内容高度大于图片高度时，背景图像的位置相对于viewport固定 */
    background-attachment: fixed;

    /* 让背景图基于容器大小伸缩 */
    background-size: cover;

    /* 设置背景颜色，背景图加载过程中会显示背景色 */
    background-color: #fff;
  }

  .index-name {
    padding: 48px 36px;
  }

  .index .index-name h1, .index .index-name h2 {
    text-align: center;
    color: #2c3e50;
  }

  .index-form .weui_cells {
    background: rgba(245, 245, 245, 0.5);
  }

  .index-form .weui_label {
    color: #2c3e50
  }
</style>
