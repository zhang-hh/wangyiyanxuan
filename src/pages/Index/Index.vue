<template>
    <div class="indexContainer">
        <div class="indexHd">
            <div class="header">
                <h1 class="logo"></h1>
                <div class="search">
                    <i  class="ico iconfont icon-search1187938easyiconnet"></i>
                    <input @click="$router.replace({path:'/Search',query:{fromPage:'Index'}})" class="placeholder" type="text" placeholder="搜索商品, 共25568款好物">
                </div>
                <div class="loginBtn" @click="$router.replace('/Login')">登录</div>
            </div>
            <div class="tabwrap">
                <div class="tab" v-if="!isShowMask">
                    <header>
                        <div class="inner" ref="tabScroll">
                            <ul class="list">
                                <li :class="{active:tabIndex === index, first:index === 0}"
                                    v-for="(item,index) in tabList"
                                    :key="index"
                                    @click="switchTab(index)"
                                >
                                    {{item}}
                                </li>
                            </ul>
                        </div>
                    </header>
                </div>
                <div class="toggleWrap">
                    <van-icon @click="isShowMask = !isShowMask" class="down" :name="isShowMask ? 'arrow-up': 'arrow-down'"/>
                </div>
                <div class="moreCate" v-if="isShowMask">
                    <div class="cateContainer">
                        <header class="hd">
                            <h3>全部频道</h3>
                        </header>
                        <nav class="list">
                            <a class="item"
                               :class="{highlight:tabIndex === index}"
                               href="##" v-for="(item,index) in tabList"
                               :key="index"
                               @click="switchTab(index)"
                            >
                                {{item}}
                            </a>
                        </nav>
                    </div>
                    <van-overlay z-index="1" class-name="mask" :show="isShowMask"/>
                </div>
            </div>
        </div>
        <div class="indexScroll" ref="indexScroll">
            <div>
                <div style="height: 1px;margin-top: -1px"></div>
                <div>
                    <div>
                        <!--轮播图-->
                        <div class="bannerContainer">
                            <van-swipe @change="onChange"
                                       height="148"
                                       loop
                                       :autoplay="3000"
                            >
                                <!--:autoplay="3000"自动轮播没有加上-->
                                <van-swipe-item v-for="(item, index) in bannerList" :key="index">
                                    <img v-lazy="item.picUrl" />
                                </van-swipe-item>
                                <template #indicator>
                                    <div class="custom-indicator">
                                        <span class="indicator" :class="{active:current === index}" v-for="(item, index) in bannerList" :key="index"></span>
                                    </div>
                                </template>
                            </van-swipe>
                        </div>
                        <!--服务政策-->
                        <div class="indexServicePolicy">
                            <ul class="servicePolicyList">
                                <li  v-for="(item,index) in serviceList" :key="index">
                                    <div class="servicePolicyItem">
                                        <img :src="item.icon" alt="图标">
                                        <span>{{item.desc}}</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <!--分类列表-->
                        <div class="kingKongModule">
                            <ul class="kingKongModuleList">
                                <li class="kingKongModuleItem" v-for="(item,index) in kingKongList" :key="index">
                                    <a :href="item.schemeUrl">
                                        <img :src="item.picUrl" alt="图片">
                                        <span>{{item.text}}</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <!--新人0元购好物-->
                        <div class="indexBigPromotionModule">
                            <div class="floorTop">
                                <img src="https://yanxuan.nosdn.127.net/1076a6fb2c68f802aa7604220327201a.gif" alt="新人领好物">
                                <div class="good">
                                    <img src="https://yanxuan-item.nosdn.127.net/df982186b01140fde36330be228ee62f.png" alt="">
                                </div>
                            </div>
                            <div class="bgFloor">
                                <div class="floorFirst">
                                    <img src="https://yanxuan.nosdn.127.net/c12048a0d85ea67718322341983b964a.png" alt="">
                                </div>
                                <div class="floor">
                                    <img src="https://yanxuan.nosdn.127.net/c460d2471c9b588995e9e42f6ecb8e87.png" alt="">
                                </div>
                                <ul class="goods">
                                    <li class="goodItem">
                                        <img src="https://yanxuan.nosdn.127.net/55987e8ad3b299a925ddcd646e930c71.png" alt="">
                                        <div class="goodsConent">
                                            <img src="https://yanxuan-item.nosdn.127.net/ada3a3b2510019e31fcf195a5051af3c.png" alt="">
                                        </div>
                                    </li>
                                    <li class="goodItem">
                                        <img src="https://yanxuan.nosdn.127.net/55987e8ad3b299a925ddcd646e930c71.png" alt="">
                                        <div class="goodsConent">
                                            <img src="https://yanxuan-item.nosdn.127.net/ada3a3b2510019e31fcf195a5051af3c.png" alt="">
                                        </div>
                                    </li>
                                    <li class="goodItem">
                                        <img src="https://yanxuan.nosdn.127.net/55987e8ad3b299a925ddcd646e930c71.png" alt="">
                                        <div class="goodsConent">
                                            <img src="https://yanxuan-item.nosdn.127.net/ada3a3b2510019e31fcf195a5051af3c.png" alt="">
                                        </div>
                                    </li>
                                </ul>
                                <ul class="goods">
                                    <li class="goodItem">
                                        <img src="https://yanxuan.nosdn.127.net/55987e8ad3b299a925ddcd646e930c71.png" alt="">
                                        <div class="goodsConent">
                                            <img src="https://yanxuan-item.nosdn.127.net/ada3a3b2510019e31fcf195a5051af3c.png" alt="">
                                        </div>
                                    </li>
                                    <li class="goodItem">
                                        <img src="https://yanxuan.nosdn.127.net/55987e8ad3b299a925ddcd646e930c71.png" alt="">
                                        <div class="goodsConent">
                                            <img src="https://yanxuan-item.nosdn.127.net/ada3a3b2510019e31fcf195a5051af3c.png" alt="">
                                        </div>
                                    </li>
                                    <li class="goodItem">
                                        <img src="https://yanxuan.nosdn.127.net/55987e8ad3b299a925ddcd646e930c71.png" alt="">
                                        <div class="goodsConent">
                                            <img src="https://yanxuan-item.nosdn.127.net/ada3a3b2510019e31fcf195a5051af3c.png" alt="">
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <!--新人专享礼-->
                        <div class="freshmanModule">
                            <div class="moduleTitle">
                                <span> ── </span>
                                <span class="txt">新人专享礼</span>
                                <span> ── </span>
                            </div>
                            <div class="content">
                                <div class="imgWrap">
                                    <div class="name">新人专享礼包</div>
                                    <div class="imgInner">
                                        <img src="https://yanxuan.nosdn.127.net/352b0ea9b2d058094956efde167ef852.png" alt="">
                                    </div>
                                </div>
                                <div class="right">
                                    <div class="module" v-for="(item,index) in indexActivityList" :key="index">
                                        <a class="activityItem" :href="item.targetUrl">
                                            <div class="picWrap">
                                                <div class="picInner">
                                                    <img :src="item.picUrl">
                                                </div>
                                                <div :class="{discount:item.activityPrice}">
                                                    <div class="line1">{{item.activityPrice}}</div>
                                                    <div class="line2">{{item.originPrice}}</div>
                                                </div>
                                            </div>
                                            <div class="cnt">
                                                <div class="title">{{item.title}}</div>
                                                <div class="subTitle">{{item.tag}}</div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--类目热销榜-->
                        <div class="categoryHotSellModule">
                            <div class="moduleTitle">类目热销榜</div>
                            <div class="content">
                                <div class="container">
                                    <div class="line1">
                                        <a :href="item.targetUrl" class="item" v-for="(item,index) in hotSellList[0]" :key="index">
                                            <div class="categoryName">{{item.categoryName}}</div>
                                            <img :src="item.showPicUrl" >
                                        </a>
                                    </div>
                                    <div class="line2">
                                        <a :href="item.targetUrl" class="item" v-for="(item,index) in hotSellList[1]" :key="index">
                                            <div class="categoryName">{{item.categoryName}}</div>
                                            <img :src="item.showPicUrl" >
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--限时购-->
                        <div class="flashSaleModule">
                            <div class="moduleTitle">
                                <div class="left">
                                    <span>限时购</span>
                                    <van-count-down class="time" :time="time">
                                        <template v-slot="timeData">
                                            <span class="item">{{ timeData.hours }}</span>
                                            <span class="item-l">:</span>
                                            <span class="item">{{ timeData.minutes }}</span>
                                            <span class="item-l">:</span>
                                            <span class="item">{{ timeData.seconds }}</span>
                                        </template>
                                    </van-count-down>
                                </div>
                                <div class="right">
                                    <span>更多</span>
                                    <van-icon class="more" name="arrow" />
                                </div>
                            </div>
                            <div class="cnt">
                                <div class="cntContainer">
                                    <div class="cntItem" v-for="(item,index) in flashSaleList" :key="index">
                                        <img :src="item.showPicUrl" alt="">
                                        <div class="price">
                                            <span class="activityPrice">￥{{item.activityPrice}}</span>
                                            <span class="originPrice">￥{{item.originPrice}}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <!--新品首发-->
                        <div class="newItemModule">
                            <div class="moduleTitle">
                                <div class="left">新品首发</div>
                                <div class="right">
                                    <span>更多</span>
                                    <van-icon class="more" name="arrow" />
                                </div>
                            </div>
                            <div class="cnt">
                                <div class="cntContainer">
                                    <div class="cntItem" v-for="(item,index) in newItemList" :key="index">
                                        <img :src="item.primaryPicUrl" alt="">
                                        <div class="desc">{{item.name}}</div>
                                        <div class="price">￥{{item.retailPrice}}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--严选超市-->
                        <div class="shoppingGuideModule">
                            <div class="item" v-for="(item, index) in shoppingGuideList" :key="index">
                                <div class="title">{{item.styleItem.title}}</div>
                                <div class="desc">{{item.styleItem.desc}}</div>
                                <div class="pic" v-for="(picUrl,idnex) in item.styleItem.picUrlList" :key="idnex">
                                    <img class="picItem" :src="picUrl" alt="">
                                </div>
                            </div>
                        </div>
                        <!--底部-->
                        <div class="foottWrap">
                            <div class="bd">
                                <div class="goApp">下载APP</div>
                                <div class="goWeb">电脑版</div>
                            </div>
                            <p class="copyright">
                                <span>网易公司版权所有 © 1997-</span>
                                <span>食品经营许可证：JY13301080111719</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
    </div>
        <!--回到顶部的按钮-->
        <div class="goTop" v-if="btnFlag" @click="backTop">
            <van-icon name="arrow-up" />
        </div>
    </div>
</template>

<script>
	import { Icon ,Overlay ,Swipe, SwipeItem,CountDown } from 'vant';
	import {getIndexData} from '@/utils'
	import BScroll from 'better-scroll';
	import _ from 'lodash';
	export default {
		name: "Index",
		data(){
		    return{
			    isShowMask :false,
			    tabList:["推荐","居家生活","服饰鞋包","美食酒水","个护清洁","母婴亲子","运动旅行","数码家电","全球特色"], //轮播上方导航的数据
                tabIndex:0,
                bannerList:[],//轮播图数据
			    current: 0 ,//轮播图小圆点默认的位置
			    serviceList:[],//首页服务政策
			    kingKongList:[],//服务政策先的列表
			    indexActivityList:[],//新人专享礼包,
			    hotSellList:[],//类目热销榜
			    flashSaleList:[],//限时购的数据
			    time: 1 * 60 * 60 * 1000,//倒计时总时长，单位为毫秒,
			    newItemList:[],//新品首发的数据
			    shoppingGuideList:[],//严选超市,
			    btnFlag: false,//回到顶部的按钮是否显示
		    }
		},
        methods:{
	        switchTab(index){
	        	this.tabIndex = index;
            },
	        onChange(index) {
		        this.current = index;
	        },

	        scroll(e){
		        console.log(e)
            },
            /*回到顶部*/
	        backTop(){

		        this.scroll.scrollTo(0,0,500)
            },
        },
        components:{
		    [Icon.name]:Icon,
		    [Overlay.name]:Overlay,
		    [Swipe.name]:Swipe,
		    [SwipeItem.name]:SwipeItem,
            [CountDown .name]:CountDown ,
		},
		async mounted(){
			let tabScrollContainer = this.$refs.tabScroll;
			new BScroll(tabScrollContainer,{
			    click:true,
				scrollX:true
			});

		    let indexData = await getIndexData();
			if (indexData.code === 200)
			this.bannerList = indexData.data.focusList;
			this.serviceList = indexData.data.policyDescList;
			this.kingKongList = indexData.data.kingKongModule.kingKongList;
			this.indexActivityList = indexData.data.indexActivityModule;

			//将类目热销榜分割成两数组
			let hotSellListData = indexData.data.categoryHotSellModule.categoryList;
			let hotSellList_l = _.pullAt(hotSellListData,0,1)
            let hotSellList_r = _.difference(hotSellListData,hotSellList_l);
			this.hotSellList.push(hotSellList_l)
			this.hotSellList.push(hotSellList_r)

            this.flashSaleList = indexData.data.flashSaleModule.itemList;
			this.newItemList = indexData.data.newItemList;
			this.shoppingGuideList = indexData.data.sceneLightShoppingGuideModule;
            this.$nextTick(() =>{
                let indexScroll = this.$refs.indexScroll;
                this.scroll = new BScroll(indexScroll,{
                	click: true,
                    bounce:true, //是否启用回弹动画效果
	                momentum: true,// 当快速滑动时是否开启滑动惯性
                    momentumLimitDistance:5,
                    scrollY:true,
                    scrollbar:{
                        fade:true,
                        interactive:false
                    },
	                probeType: 3, //除了实时派发 scroll 事件，在 swipe 的情况下仍然能实时派发 scroll 事件
                    mouseWheel:true, //允许鼠标滚动
	                HWCompositing: true //是否启用硬件加速
                })
                this.$nextTick(() => {
	                this.scroll.on('scroll',(pos) => {
		                if (pos.y < -800) this.btnFlag = true
		                else this.btnFlag = false
	                })
                })
            })


        },
        beforeDestroy(){
			this.scroll.destroy();
        }
	}
</script>

<style lang="stylus">
.indexContainer
    background-color #eee
    width 100%
    height 100%
    .indexHd
        height 147px
        position flex
        background-color #fff
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
                    overflow hidden
                    .inner
                        overflow hidden
                        width 600px
                        .list
                            position relative
                            width 1300px
                            z-index 4
                            display flex
                            white-space nowrap
                            padding 0 30px
                            .first
                                  margin-left 0
                            &>li
                                margin-left 20px
                                display inline-block
                                padding 0 16px
                                position: relative;
                                &.active::after
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
                box-sizing border-box
                padding-right 30px
                z-index 3
                .down
                    float: right;
                    font-size 37px
                    color #999
                    line-height 60px
        .moreCate
            .cateContainer
                z-index 2
                position absolute
                left 0
                top 0
                width 100%
                box-sizing border-box
                height 375px
                padding-top 0
                margin-bottom 20px
                background-color #fff
                .hd
                    height 60px
                    color #333
                    font-size 28px
                    display flex
                    align-items center
                    padding-left 30px
                .list
                    margin-top 30px
                    .item
                        display inline-block
                        font-size 24px
                        color #333
                        margin-left 30px
                        margin-bottom 40px
                        padding 0 15px
                        width 148px
                        height 54px
                        text-align center
                        line-height 54px
                        box-sizing border-box
                        border-radius 4px
                        border 2px solid #ccc
                        &.highlight
                            border-color #DD1A21
                            color #DD1A21
            .mask
                top 98px
                height 1236px
    .indexScroll
        height 1184px
        overflow: hidden;
        .bannerContainer
            margin-top 4px
            width 750px
            height 296px
            & img
                width 100%
                height 100%
            .custom-indicator
                position relative
                bottom 30px
                width 100%
                height 5px
                display flex
                justify-content center
                .indicator
                    position relative
                    width 40px
                    height 5px
                    background-color #000
                    opacity .4
                    margin-right 10px
                    border-radius 3px
                    &.active
                        background-color #DD1A21
        .indexServicePolicy
            width 100%
            height 72px
            line-height 76px
            background-color #fff
            font-size 24px
            padding 0 30px
            box-sizing border-box
            .servicePolicyList
                display flex
                justify-content space-between
                .servicePolicyItem
                    &>img
                        width 32px
                        height 32px
                        vertical-align middle
                    span
                        vertical-align middle
                        margin-left 8px



        .kingKongModule
            width 100%
            height 372px
            background-color #fff
            .kingKongModuleList
                .kingKongModuleItem
                    float left
                    width 110px
                    height 156px
                    margin 10px 20px
                    font-size 24px
                    text-align center
                    color #333
                    line-height 36px
                    & img
                        width 110px
                        height 110px
        .indexBigPromotionModule
            width 100%
            height 984px
            .floorTop
                height 240px
                position relative
                &>img
                    width 100%
                    height 100%
                .good
                    width 168px
                    height 168px
                    position absolute
                    top 30px
                    left 74px
                    &>img
                        width 100%
                        height 100%
            .bgFloor
                width 100%
                height 744px
                background-color #117e85
                padding 20px
                box-sizing border-box
                .floorFirst
                    height 80px
                    &>img
                        width 100%
                        height 100%
                .floor
                    margin-bottom 10px
                    margin-top 8px
                    width 710px
                    height 160px
                    border-radius 10px
                    &>img
                        width 100%
                        height 100%
                .goods
                    display flex
                    margin-bottom 10px
                    height 220px
                    &>li:last-child
                        margin-right 0
                    .goodItem
                        width 231px
                        height 220px
                        border-radius 10px
                        margin-right 8px
                        position relative
                        &>img
                            width 100%
                            height 100%
                        .goodsConent
                            position absolute
                            top 50%
                            left 50%
                            margin-top -40px
                            margin-left -72px
                            width 144px
                            height 144px
                            &>img
                                width 100%
                                height 100%




        .freshmanModule
            background-color #fff
            width 100%
            height 528px
            margin 20px 0
            padding 30px
            padding-top 0
            box-sizing border-box
            overflow hidden
            .moduleTitle
                text-align center
                font-size 32px
                color #333
                height 90px
                line-height 90px
            .imgWrap
                position relative
                width 343px
                height 432px
                margin-right 4px
                background-color #f9e9cf
                float left
                .name
                    width 313px
                    height 48px
                    padding-top 30px
                    padding-left 30px
                    font-size 32px
                    box-sizing border-box
                .imgInner
                    width 258px
                    height 257px
                    position absolute
                    left 50%
                    top 50%
                    margin-left -129px
                    margin-top -110px
                    &>img
                        width 258px
                        height 257px
            .right
                width 343px
                height 438px
                float right
                display flex
                flex-direction column
                & img
                    width 100%
                    height 100%
                .module
                    width 343px
                    height 212px
                    background-color #fbe2d3
                    margin-bottom 7px
                    box-sizing border-box
                    .activityItem
                        position relative
                        z-index 999
                        padding-top 20px
                        margin-bottom 4px
                        margin-right 4px
                        width 313px
                        height 195px
                        box-sizing border-box
                        padding-left 30px
                        display inline-block
                        .picWrap
                            width 200px
                            height 200px
                            position absolute
                            right -20px
                            top 12px
                            .picInner
                                height 200px
                                width 200px
                                &>img
                                    height 100%
                                    width 100%
                            .discount
                                position absolute
                                top 10px
                                right 20px
                                border-radius 50%
                                background-color #F59524
                                text-align center
                                color #fff
                                opacity .8
                                height 70px
                                width 80px
                                .line2
                                 font-size 12px
                                 text-decoration line-through
                                .line1
                                    line-height 40px
                                    font-size 24px



                        .cnt
                            position relative
                            .title
                                font-size 32px
                            .subTitle
                                position absolute
                                top 50px
                                left -4px
                                background-color #CBB693
                                border-radius 4px
                                color #fff
                                font-size 22px
                                height 32px
                                padding 0 10px
        .categoryHotSellModule
            height 710px
            margin-bottom 20px
            padding 0 30px
            box-sizing border-box
            background-color #fff
            width 750px
            .moduleTitle
                height 100px
                line-height 100px
                font-size 32px
            .content
                padding-bottom 20px
                box-sizing border-box
                height 590px
                font-size 28px
                .container
                    width 760px
                    .line1
                        display flex
                        &>.item
                            height 200px
                            display block
                            margin-bottom 10px
                            margin-right 10px
                            padding-left 20px
                            box-sizing border-box
                            color #333
                            width 340px
                            background-color #f5f5f5
                            position relative
                            line-height 100px
                            &>img
                                position absolute
                                top 25px
                                right -26px
                                width 80%
                                height 80%
                    .line2
                        overflow hidden
                        &>.item
                            float left
                            height 180px
                            width 165px
                            display block
                            margin-bottom 10px
                            color #333
                            text-align center
                            line-height 50px
                            margin-right 10px
                            position relative
                            background-color #f5f5f5
                            &>img
                                position absolute
                                top 36px
                                left 20px
                                width 80%
                                height 80%



        .flashSaleModule
            background-color #fff
            width 750px
            height 700px
            padding 0 30px
            margin-bottom 20px
            box-sizing border-box
            .moduleTitle
                height 100px
                line-height 100px
                font-size 32px
                .left
                    float left
                    display flex
                    .item-l
                        position relative
                        top 34px
                        left 18px
                        font-size 33px
                    .item
                        position relative
                        top 34px
                        left 30px
                        z-index 9
                        display inline-block
                        width 36px
                        height p36x
                        text-align center
                        line-height 40px
                        color #fff
                        margin-right 20px
                        font-size 20px
                        background-color #333
                        border-radius 8px
                .right
                    float right
                    font-size 28px
                    .more
                        margin-left 10px
                        top 4px

            .cnt
                height 600px
                .cntContainer
                    width 780px
                    .cntItem
                        padding-bottom  20px
                        width 216px
                        height 216px
                        float left
                        box-sizing border-box
                        background-color #F5F5F5
                        margin-right 20px
                        margin-bottom 90px
                        text-align center
                        &>img
                            height 216px
                            margin-bottom 12px
                            width 216px
                        .price
                            .activityPrice
                                color #DD1A21
                                font-size 30px
                            .originPrice
                                font-size 20px
                                text-decoration line-through
                                color #7F7F7F




        .newItemModule
            width 750px
            height 1280px
            padding 0 30px
            box-sizing border-box
            margin-bottom 20px
            padding-bottom 26px
            background-color #fff
            .moduleTitle
                height 100px
                line-height 100px
                font-size 32px
                .left
                    float left
                .right
                    float right
                    font-size 28px
                    .more
                        margin-left 10px
                        top 4px
            .cnt
                height 600px
                .cntContainer
                    width 780px
                    .cntItem
                        padding-bottom  20px
                        width 216px
                        height 216px
                        float left
                        box-sizing border-box
                        background-color #F5F5F5
                        margin-right 20px
                        margin-bottom 170px
                        &>img
                            height 100%
                            margin-bottom 12px
                            width 100%
                        .desc
                            line-height 34px
                            font-size 26px
                        .price
                            color #DD1A21
                            line-height 56px
                            font-size 34px



        .shoppingGuideModule
            padding 26px 10px 30px 30px
            margin-bottom 20px
            box-sizing border-box
            background-color #fff
            width 100%
            height 576px
            clear: both;
            .item
                float left
                padding-left 20px
                padding-top 20px
                margin-top 4px
                margin-left 4px
                background-color #F5F5F5
                width 323px
                height 244px
                font-size 32px
                .title
                    color #333
                .desc
                    margin-top 15px
                    color #7f7f7f
                    font-size 24px
                .pic
                    margin-top 10px
                    .picItem
                        float left
                        height 150px
                        width 150px


        .foottWrap
            width 750px
            height 244px
            padding 0 30px
            box-sizing border-box
            border-top 2px solid rgba(0,0,0,.15)
            background-color #414141
            .bd
                position relative
                top 50px
                height 62px
                font-size 24px
                color #fff
                display flex
                justify-content center
                text-align center
                line-height 60px
                .goApp , .goWeb
                    width 170px
                    height 60px
                    border 1px solid #999
                    margin-right 50px
            .copyright
                position relative
                top 70px
                height 64px
                line-height 34px
                text-align center
                color #999
                display flex
                flex-direction column
                font-size 24px
        .bscroll-vertical-scrollbar
            width 8px!important
            margin-right 5px!important
            .bscroll-indicator
                width 8px!important
                margin-right 5px!important
    .goTop
        height 60px
        width 60px
        border-radius 50%
        position fixed
        bottom 100px
        right 15px
        background-color #F5F5F5
        box-shadow 0 0 6px rgba(0,0,0, .2)
        text-align center
        line-height 60px
        color #999
        cursor: pointer
</style>
