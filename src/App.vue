<template>
  <div id="app">
    <router-view></router-view>
    <van-tabbar class="tabbar" route fixed active-color="#ab2b2b">
      <van-tabbar-item class="tabbarItem" replace to="/Index">
        <van-icon name="wap-home-o" size="20"/>
        <div>首页</div>
      </van-tabbar-item>
      <van-tabbar-item class="tabbarItem" replace to="/Category">
        <van-icon name="apps-o" size="20"/>
        <div>分类</div>
      </van-tabbar-item>
      <van-tabbar-item class="tabbarItem" replace to="/Topic">
        <van-icon name="photo-o" size="20"/>
        <div>值得买</div>
      </van-tabbar-item>
      <van-tabbar-item class="tabbarItem" replace to="/Cart">
        <van-icon name="cart-o" size="20"/>
        <div>购物车</div>
      </van-tabbar-item>
      <van-tabbar-item class="tabbarItem" replace to="/Profile">
        <van-icon name="contact" size="20"/>
        <div>个人</div>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  import { Tabbar, TabbarItem ,Icon} from 'vant';
export default {
  name: 'App',
  data() {
    return {
      active: 0
    }
  },
  components:{
    [Tabbar.name]:Tabbar,
    [TabbarItem.name]:TabbarItem,
    [Icon.name]:Icon
  },
}
</script>

<style lang="stylus">
.tabbar
  box-sizing border-box
  border-top 1px solid rgba(0,0,0,.15)
  height 98px
  .tabbarItem
    display flex
    flex-direction column
    text-align center
    height 100%
    font-size 18px
</style>
