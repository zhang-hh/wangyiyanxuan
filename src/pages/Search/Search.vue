<template>
    <div class="searchContainer">
        <div class="headerContainer">
            <div class="header">
                <div class="search">
                    <form action="/">
                        <div class="searchContect">
                            <div class="left">
                                <i class="ico iconfont icon-search1187938easyiconnet"></i>
                                <input type="text"
                                       v-model.trim="value"
                                       class="ipt"
                                       placeholder="4.11周年庆省钱卡"
                                       maxlength="30"
                                />
                            </div>
                            <div>
                                <span @click="onCancel" class="btn">取消</span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="searchSuggestions" v-if="isShow">
            <header class="hd">
                <h3>热门搜索</h3>
            </header>
            <nav class="list">
                <a class="item highlight" href="##">新人0元领好物</a>
                <a class="item" href="##">严选爆品榜</a>
                <a class="item" href="##">特价包邮￥19.9起</a>
                <a class="item" href="##">拖鞋</a>
                <a class="item" href="##">猫粮</a>
                <a class="item" href="##">纸巾</a>
                <a class="item" href="##">锅</a>
                <a class="item" href="##">大米</a>
                <a class="item" href="##">咖啡</a>
                <a class="item" href="##">手机壳</a>
                <a class="item" href="##">无骨鸡爪</a>
                <a class="item" href="##">收纳</a>
            </nav>
        </div>
        <div class="mask" v-show="searchList">
            <ul class="maskList">
                <li class="maskItem" v-for="(item,index) in searchList" :key="index">{{item}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
	import {getSearchList} from "@/utils";

	export default {
		name: "Search",
		data() {
			return {
				value: '',
                searchList:[],
                isShow:true,
			};
		},
        watch:{
	         value(curVal, oldVal) {
		        // 实现input连续输入，只发一次请求
		        clearTimeout(this.timeout);
		        this.timeout = setTimeout(async() => {
			        let searchListDate = await getSearchList(curVal);
                    this.searchList = searchListDate.data
                    this.isShow = false
		        }, 200);
	        },
	        searchList(){
	         	if (!this.searchList[0]) this.isShow =true
            }
        },
		methods: {
			onCancel() {
				//this.$router.replace(`/${this.$route.query.fromPage}`)
			}
		},
	}
</script>

<style scoped lang="stylus">
.searchContainer
    width 100%
    height 1334px
    background-color rgba(0,0,0,0.07)
    position relative
    .headerContainer
        box-sizing border-box
        padding 0 30px
        height 88px
        width 100%
        background-color #fff
        .header
            position relative
            width 100%
            height 88px
            .searchContect
                position absolute
                left 0
                top 0
                right 0
                bottom 0
                margin auto
                width 100%
                height 56px
                color #7e8c8d
                font-size 28px
                line-height 56px
                .left
                    width 600px
                    background-color rgba(0,0,0,0.07)
                    border-radius 7px
                    .ico
                        margin 0 15px
                    .ipt
                        width 500px
                        margin-right 30px
                        background-color: transparent
                .btn
                    position: absolute;
                    top 3px
                    right 15px
    .searchSuggestions
        width 100%
        box-sizing border-box
        height 375px
        padding 30px
        padding-top 0
        margin-bottom 20px
        background-color #fff
        .hd
            height 90px
            color #999
            font-size 24px
            display flex
            align-items center
        .list
            .item
                display inline-block
                font-size 24px
                color #333
                margin-right 32px
                margin-bottom 32px
                padding 0 15px
                line-height 45px
                box-sizing border-box
                border-radius 4px
                border 2px solid #000
                &.highlight
                    border-color #DD1A21
                    color #DD1A21


    .mask
        position absolute
        top 88px
        left 0
        width 100%
        padding 0 30px
        background-color #fff
        .maskItem
            width 100%
            height 90px
            line-height 90px
            font-size 28px
            border-bottom: 1px solid #d9d9d9
            &:last-child
                border-bottom none
</style>