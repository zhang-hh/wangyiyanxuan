<template>
    <div class="container">
        <div class="header">
            <div class="hwrapper">
                <div class="header">
                    <div class="home" @click="$router.push('/Index')">
                        <van-icon name="wap-home-o" />
                    </div>
                    <div class="toptab">
                        <img src="./image/logo.png" alt="">
                    </div>
                    <div class="search" @click="$router.replace({path:'/Search',query:{fromPage:'Profile'}})">
                        <van-icon name="search" />
                    </div>
                    <div class="cart">
                        <van-icon name="shopping-cart-o" />
                    </div>
                </div>
            </div>
        </div>
        <div class="loginTypesWrap">
            <div class="cont">
                <div class="logoWrap">
                    <img src="http://yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png" alt="">
                </div>
                <div class="btnWrap">
                    <van-button class="btn"
                                color="#DD1A21"
                                icon="phone-o"
                                text="手机号快捷登录"
                                size="large"
                                block
                    ></van-button>
                    <van-button class="btn"
                                plain
                                block
                                type="danger"
                                size="large"
                                icon="envelop-o"
                                text="邮箱帐号登录"
                    ></van-button>
                </div>
            </div>
        </div>
        <div class="thirdWrap">
            <div class="itemWrap">
                <div class="item">
                    <i class="ico iconfont icon-weixin"></i>
                    <span class="name">微信</span>
                </div>
                <div class="item">
                    <i class="ico icon-qq iconfont"></i>
                    <span class="name">QQ</span>
                </div>
                <div class="item">
                    <i class="ico icon-weibo iconfont"></i>
                    <span class="name">微博</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {Icon,Button} from 'vant';
	export default {
		name: "Profile",
        components:{
	        [Icon.name]:Icon,
	        [Button.name]:Button,
        }
	}
</script>

<style scoped lang="stylus">
.container
    position relative
    .hwrapper
        box-sizing border-box
        padding-left 24px
        padding-right 26px
        height 100px
        background-color #fafafa
        .header
            width 100%
            font-size 46px
            line-height 100px
            display flex
            justify-content space-between
            color #333
            height 100px
            .home
                line-height 110px
            .toptab
                width 172px
                height 54px
                line-height 90px
                &>img
                    width 100%
                    height 100%
                    vertical-align middle
            .search
                line-height 110px
                margin-right -160px
            .cart
                line-height 110px


    .loginTypesWrap
        height 1264px
        padding 0 40px
        box-sizing border-box
        background-color #fff
        .logoWrap
            width 100%
            height 480px
            line-height 480px
            text-align center
            &>img
                width 268px
                height 90px
        .btnWrap
            width 670px
            height 220px
            text-align center
            .btn
                height 94px
                margin-bottom 32px
                font-size 30px
                border-radius 8px
                border 2px solid #DD1A21
    .thirdWrap
        display flex
        width 750px
        height 40px
        position absolute
        bottom 10%
        left 0
        font-size 24px
        color #7F7F7F
        display flex
        justify-content center
        &::before
            position absolute
            left 284px
            content ''
            display inline-block
            background-color #7F7F7F
            width 4px
            height 40px
        &::after
            position absolute
            left 460px
            content ''
            display inline-block
            background-color #7F7F7F
            width 4px
            height 40px
        .itemWrap
            display flex
            .item
                width 92px
                padding 0 40px
                line-height 40px
                margin-right 2px
                height 40px
                .ico
                    margin-right 5px


</style>