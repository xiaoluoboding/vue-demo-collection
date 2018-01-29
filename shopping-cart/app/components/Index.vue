<script>
  import { mapState, mapActions } from 'vuex'

  export default {
    name: 'Index',

    computed: {
      ...mapState({
        iPhone6S: state => state.cart.iPhone6S
      }),
    },

    methods: {
      ...mapActions([
        'changePrice',
        'changeStyle',
        'addItem',
      ]),
    }
  }
</script>
<template>
  <div class="container">
    <div class="row">
      <div class="product col-md-offset-2 col-sm-offset-2 col-md-8 col-sm-8">
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
                    <li v-for="(value, key) in iPhone6S.style"
                        @click="changeStyle(key)"
                        :class="{active: iPhone6S.activeStyleUrl == value}">
                        <span v-text="key"></span>
                    </li>
                  </ul>
                </dd>
              </dl>
              <dl class="option dl-horizontal">
                <dt>存储容量:</dt>
                <dd>
                  <ul>
                    <li v-for="(value, key) in iPhone6S.storage"
                        @click="changePrice(key)"
                        :class="{active: iPhone6S.price == value}"><span v-text="key"></span></li>
                  </ul>
                </dd>
              </dl>
            </div>
            <hr>
            <button class="btn btn-danger btn-block" @click="addItem" :disabled="iPhone6S.isSelected">
              <span class="glyphicon glyphicon-shopping-cart"></span> 加入购物车
            </button>
          </div>
        </div>
      </div> <!-- ./product -->
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
</style>
