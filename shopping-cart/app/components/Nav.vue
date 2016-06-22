<script>
  export default {
    name: 'nav',

    vuex: {
      getters: {
        cart: ({ index }) => index.cart
      }
    },

    computed: {
      'totalItem': function() {
        return this.cart.length
      }
    }
  }
</script>
<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <a class="navbar-brand" href="#" v-link="{ path: '/' }">Shopping Cart</a>
      </div>
      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
          <li v-link="{ path: '/index', activeClass: 'active' }"><a href="#!"> iPhone 6S <span class="sr-only">(current)</span></a></li>
          <li v-link="{ path: '/cart', activeClass: 'active' }"><a href="#!"> 购物车 <span class="badge text-danger" v-text="totalItem" v-if="totalItem"></span></a></li>
        </ul>
      </div>
      <!-- /.navbar-collapse -->
    </div>
    <!-- /.container-fluid -->
  </nav>
</template>

<style media="screen">
  .text-danger {
    color: #fff;
    background-color: #d9534f;
  }
</style>
