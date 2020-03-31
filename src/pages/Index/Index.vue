<template>
    <div class="indexContainer">
        <div class="indexHd">
            <div class="header">
                <h1 class="logo"></h1>
                <div class="search">
                    <i  class="ico iconfont icon-search1187938easyiconnet"></i>
                    <input class="placeholder" type="text" placeholder="搜索商品, 共25568款好物">
                </div>
                <div class="loginBtn">登录</div>
            </div>
            <div class="tabwrap">
                <div class="tab">
                    <header>
                        <div class="inner">
                            <ul class="list">
                                <li class="active first">推荐</li>
                                <li>居家生活</li>
                                <li>居家生活</li>
                                <li>居家生活</li>
                                <li>居家生活</li>
                                <li>居家生活</li>
                                <li>推荐</li>
                                <li>居家生活</li>
                                <li>推荐</li>
                                <li>居家生活</li>
                                <li>推荐</li>
                                <li>居家生活</li>
                                <li>推荐</li>
                                <li>居家生活</li>
                                <li>推荐</li>
                                <li>居家生活</li>
                            </ul>
                        </div>
                    </header>
                </div>
                <div class="toggleWrap">
                    <van-icon @click="isShowMask = !isShowMask" class="down" :name="isShowMask ? 'arrow-up': 'arrow-down'"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
	import { Icon } from 'vant';
	export default {
		name: "Index",
		data(){
		    return{
			    isShowMask :false,
			    tabList:[],
		    }
		},
		components:{
		    [Icon.name]:Icon
		}
	}
</script>

<style scoped lang="stylus">
.indexContainer
    .indexHd
        height 147px
        .header
            position relative
            display flex
            align-items center
            padding 16px 30px
            width 100%
            height 88px
            box-sizing border-box
            .logo
                width 138px
                height 40px
                margin-right 20px
                background url("./image/logo.png") 0 0 no-repeat
                background-size 138px 40px
            .search
                display flex
                align-items center
                justify-content center
                height 56px
                width 443px
                background-color #ededed
                border-radius 8px
                font-size 28px
                color #666
                .ico
                    width 28px
                    height 28px
                    margin-right 10px
                .placeholder
                    background-color transparent
                    font-size 26px
            .loginBtn
                width 72px
                height 38px
                line-height 38px
                color #DD1A21
                border-radius 8px
                border 2px solid #DD1A21
                margin-left 16px
                text-align center
                font-size 24px

        .tabwrap
            position relative
            margin-top 10px
            color #333
            height 60px
            width 100%
            line-height 60px
            box-sizing border-box
            .tab
                width 590px
                height 60px
                margin-right 160px
                font-size 26px
                &>header
                    display flex
                    position relative
                    .inner
                        overflow hidden
                        position relative
                        .list
                            display flex
                            white-space nowrap
                            padding 0 30px
                            &>li
                                margin-left 20px
                                display inline-block
                                padding 0 16px
                            .first
                                margin-left 0
                                &.active
                                   color  #DD1A21
                                   position relative
                                &::after
                                    content ''
                                    position absolute
                                    left 0
                                    bottom 0
                                    width 100%
                                    height 4px
                                    background-color #DD1A21

            .toggleWrap
                position absolute
                right 0
                top 0
                width 160px
                height 60px
                background-color pink
                box-sizing border-box
                padding-right 30px
                .down
                    float: right;
                    font-size 37px
                    color #999
                    line-height 60px
</style>