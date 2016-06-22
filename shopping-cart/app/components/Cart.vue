<script>
  import {
    removeItem
  } from '../vuex/actions'

  export default {
    name: 'Cart',

    vuex: {
      getters: {
        cart: ({
          index
        }) => index.cart
      },
      actions: {
        removeItem
      }
    },

    computed: {
      'totalPrice': function() {
        let totalPrice = 0
        for (let i in this.cart) {
          totalPrice += this.cart[i].price
        }
        return totalPrice
      }
    }
  }
</script>

<template>
  <div id="cart" class="cart col-md-offset-2 col-sm-offset-2 col-md-8 col-sm-8">
    <div class="panel panel-danger" v-if="cart.length">
      <div class="panel-heading">
        <span class="glyphicon glyphicon-shopping-cart"></span> 购物车
        <span class="pull-right"><strong>总计：{{ totalPrice }}</strong></span></span>
      </div>
      <div class="panel-body cart-detail">
        <ul>
          <li v-for="item in cart">
            <span class="pomegranage glyphicon glyphicon-remove-circle" @click="removeItem(item)"></span>
            <span>Apple/苹果 iPhone6s</span>
            <span class="label label-success" v-text="item.type"></span>
            <span class="badge text-danger" v-text="item.count"></span>
            <span class="cart-price pomegranage pull-right"><strong>{{ item.price }}</strong></span>
          </li>
        </ul>
      </div>
      <div class="panel-footer">
        <button class="btn btn-danger btn-block">结算 <span class="glyphicon glyphicon-circle-arrow-right"></span></button>
      </div>
    </div>
    <div class="cart-empty" v-else>
      <div id="content"><span class="pomegranage"><strong>购物车空空如也</strong></span></div>
    </div>
  </div>
  <!-- ./cart -->
</template>

<style>
  .cart ul {
    padding: 0;
  }

  .cart ul> li {
    list-style: none;
    padding: 4px 8px;
  }

  .popover {
    min-width: 320px;
  }

  .cart-empty {
    padding: 100px;
    border-radius: 4px;
    border: 2px dashed rgb(170, 170, 170);
  }

  #content {
    top: 50%;
    width: 100%;
    text-align: center;
    left: 0;
  }
</style>
