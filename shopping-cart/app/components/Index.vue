<script>
  import { changePrice, changeStyle, addItem, removeItem } from '../vuex/actions'

  export default {
    name: 'Index',

    data() {
      return {
        isShow: false,
        activeStyle: '',
        type: ''
      }
    },

    vuex: {
      getters: {
        iPhone6S: ({ index }) => index.iPhone6S,
        cart: ({ index }) => index.cart
      },
      actions: {
        changePrice,
        changeStyle,
        addItem,
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
    },

    watch: {
      'cart': function(val) {
        if (val.length > 0) {
          this.isShow = true
        }
      }
    }
  }
</script>
<template>
  <div class="container">
    <div class="row">
      <div class="product col-md-8 col-sm-8">
        <div class="row">
          <div class="gallery col-md-6 col-sm-6">
            <img :src="iPhone6S.activeStyleUrl" class="img-responsive" alt="">
          </div>
          <div class="detail col-md-6 col-sm-6">
            <h3 class="name"><span v-text="iPhone6S.name"></span></h3>
            <hr>
            <div class="options">
              <dl class="dl-horizontal">
                <dt>描述：</dt>
                <dd><span v-text="iPhone6S.desc"></span></dd>
              </dl>
              <dl class="price dl-horizontal">
                <dt>价格：</dt>
                <dd class="pomegranage"><strong>￥<span v-text="iPhone6S.price"></span></strong></dd>
              </dl>
              <dl class="option dl-horizontal">
                <dt>外观：</dt>
                <dd>
                  <ul>
                    <li v-for="styleUrl in iPhone6S.style"
                        @click="changeStyle($key, styleUrl)"
                        :class="{active: iPhone6S.activeStyleUrl == styleUrl}"><span v-text="$key"></span></li>
                  </ul>
                </dd>
              </dl>
              <dl class="option dl-horizontal">
                <dt>存储容量:</dt>
                <dd>
                  <ul>
                    <li v-for="price in iPhone6S.storage"
                        @click="changePrice($key, price)"
                        :class="{active: iPhone6S.price == price}"><span v-text="$key"></span></li>
                  </ul>
                </dd>
              </dl>
            </div>
            <hr>
            <button class="btn btn-danger btn-block" @click="addItem()" :disabled="iPhone6S.isSelected">
              <span class="glyphicon glyphicon-shopping-cart"></span> 加入购物车
            </button>
          </div>
        </div>
      </div> <!-- ./product -->
      <div class="cart col-md-4 col-sm-4" v-if="isShow">
        <div class="panel panel-danger">
          <div class="panel-heading">
            <span class="glyphicon glyphicon-shopping-cart"></span> 购物车
            <span class="pull-right"><strong>总计：{{ totalPrice }}</strong></span></span>
          </div>
          <div class="panel-body cart-detail">
            <ul>
              <li v-for="item in cart">
                <a href="#" @click="removeItem(item)"><span class="pomegranage glyphicon glyphicon-remove-circle"></span></a>
                <span>iPhone6s</span>
                <span class="label label-danger" v-text="item.type"></span>
                <span class="badge" v-text="item.count"></span>
                <span class="cart-price pomegranage pull-right"><strong>{{ item.price }}</strong></span>
              </li>
            </ul>
          </div>
          <div class="panel-footer">
            <button class="btn btn-danger btn-block">结算 <span class="glyphicon glyphicon-circle-arrow-right"></span></button>
          </div>
        </div>
      </div>
    </div>
  </div><!-- ./container -->
</template>
<style>
.pomegranage {
  color: #c0392b;
}
.detail dt {
  color: #95a5a6;
  width: 64px;
  padding: 4px 0;
}
.detail dd {
  margin-left: 64px;
  padding: 4px;
}
.option ul {
  padding: 0;
}
.option ul > li {
  float: left;
  list-style: none;
  margin-right: 4px;
  padding: 0 8px;
  border: 2px solid #eee;
}
.option ul > li:hover {
  border: 2px solid #c0392b;
}
.option ul .active {
  border: 2px solid #c0392b;
}
.cart-detail ul {
  padding: 0;
}
.cart-detail ul > li {
  list-style: none;
  padding: 4px 8px;
}
</style>
