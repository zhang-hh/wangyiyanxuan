<template>
    <div class="container">
       <div class="header">
           <div class="cart">购物车</div>
           <div class="right">领券</div>
       </div>
        <ul class="servicePolicy">
            <li class="item">
                <i class="circel"></i>
                <span>30天无忧退货</span>
            </li>
            <li class="item">
                <i class="circel"></i>
                <span>48小时快速退款</span>
            </li>
            <li class="item">
                <i class="circel"></i>
                <span>满99元免邮费</span>
            </li>
        </ul>
        <div class="cartImg">
            <img src="https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png" alt="">
        </div>
        <div>
            <van-button class="btn"
                        color="#DD1A21"
                        to="Profile"
                        block
                        size="large"
            >登录</van-button>
        </div>
    </div>
</template>

<script>
	import { Button } from 'vant';
	export default {
		name: "Cart",
        components:{
			[Button.name]:Button,
        }
	}
</script>

<style scoped lang="stylus">
.container
    width 750px
    height 1334px
    background-color #f4f4f4
    position relative
    .header
        position relative
        padding 16px 30px
        width 100%
        height 88px
        line-height 64px
        background-color #fff
        box-sizing border-box
        font-size 32px
        color #333
        .cart
            font-size 36px
            float left
        .right
            color #DD1A21
            float right
            margin-right 20px
    .servicePolicy
        height 70px
        background-color #eee
        box-sizing border-box
        padding 0 30px
        display flex
        justify-content space-between
        .item
            font-size 24px
            color #666
            display flex
            align-items center
            .circel
                border-radius 50%
                box-sizing border-box
                border 2px solid #999
                margin-right 6px
                width 10px
                background-color rgba(255,255,255,.07)
                height 10px
    .cartImg
        position absolute
        top -5%
        right 0
        left 0
        bottom 0
        margin auto
        width 248px
        height 248px
        &>img
            width 100%
            height 100%
    .btn
        position absolute
        top  60%
        left 50%
        transform translateX(-50%)
        text-align center
        width 480px
        height 92px
        font-size 30px


</style>