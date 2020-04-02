<template>
    <div class="topicContainer">
        <div class="hwrapper">
           <div class="header">
               <div class="home">
                   <van-icon name="wap-home-o" />
               </div>
               <div class="toptab">值的买</div>
               <div class="search">
                   <van-icon name="search" />
               </div>
                <div class="cart">
                    <van-icon name="shopping-cart-o" />
                </div>
           </div>
        </div>
        <div class="swiperTab-container">
            <div class="swiperTab-title">
                <img class="title" src="https://m.you.163.com/topic/index/img/topic_logo.c2284970.png" alt="值的买">
                <div class="text">严选好物 用心生活</div>
                <img class="bg" src="https://m.you.163.com/topic/index/img/topic_title_bg.2373a140.png" alt="">
            </div>
            <div class="swiperTab" >
                <swiper  ref="mySwiper" :options="swiperOptions">
                    <swiper-slide v-for="(item,index) in navList" :key="index">
                        <div class="itemInner">
                            <div class="item" v-for="(swiperItem,num) in item" :key="num">
                                <div class="topContainer">
                                    <img :src="swiperItem.picUrl" alt="">
                                </div>
                                <div class="detail">
                                    <div class="mainText">{{swiperItem.mainTitle}}</div>
                                    <div class="descText">{{swiperItem.viceTitle}}</div>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                </swiper>


            </div>



        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll';
    import _ from 'lodash';
    import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
    import 'swiper/css/swiper.css'
    import {Icon} from 'vant';
    import {getTopicData} from "@/utils";
	export default {
		name: "Topic",
        data(){
		    return{
			    navList:[],
			    pagination:[0,1,2,3,4],//小圆点的个数
			    swiperOptions: {
				    pagination: {
					    el: '.swiper-pagination',
                        // type:'fraction',
				    },
				    slidesPerView : 4,
			    }
            }
        },
        components:{
			[Icon.name]:Icon,
	        Swiper,
	        SwiperSlide,

        },
        methods:{
        },
        async mounted(){
			let navListData = await getTopicData();
			if (navListData.code === "200")
                this.navList = navListData.data.navList;
			
                this.navList = _.chunk(this.navList,2)
	        console.log(this.navList)
            // this.$nextTick(() =>{
            //     let swiperTab = this.$refs.swiperTab;
            //     this.scroll = new BScroll(swiperTab,{
            //     	scrollX:true,
	        //         probeType: 3, //除了实时派发 scroll 事件，在 swipe 的情况下仍然能实时派发 scroll 事件
            //     })
            // })

        },
	}
</script>

<style lang="stylus">
.topicContainer
    width 750px
    height 1334px
    background-color #eee
    .hwrapper
        position fixed
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
            .search
                line-height 110px
                margin-right -160px
            .cart
                line-height 110px



    .swiperTab-container
        box-sizing border-box
        padding-top 145px
        width 100%
        height 540px
        position relative
        .swiperTab-title
            position absolute
            top 0
            z-index 1
            .title
                position absolute
                top 30px
                left 20px
                width 130px
                height 68px
            .text
                position absolute
                left 160px
                top 58px
                font-size 30px
                color #fff
            .bg
                height 518px
        .swiperTab
            position relative
            top -10px
            z-index 2
            margin 0 20px
            width 710px
            height 540px
            box-sizing border-box
            border-radius 20px
            overflow hidden
            background-color #fff
            .itemInner
                width 1500px
                overflow hidden
                .item
                    width 168px
                    height 200px
                    margin-right 10px
                    margin-top 40px
                    margin-bottom 16px
                    .topContainer
                        position relative
                        left 34px
                        width 120px
                        height 120px
                        &>img
                            height 100%
                            width 100%
                    .detail
                        width 168px
                        padding-left 5px
                        text-align center
                        margin-top 8px
                        height 72px
                        .mainText
                            width 168px
                            white-space nowrap
                            overflow hidden
                            color #333
                            font-size 30px
                            font-weight bold
                        .descText
                            width 168px
                            font-size 24px
                            line-height 36px
                            white-space nowrap
                            overflow hidden
                            color #999




            .swiper-pagination
                position relative
                bottom -2px
                z-index 9
                width 100%
                height 32px
                line-height 0
                text-align center
                .swiper-pagination-bullet-active
                    background-color #DD1A21
                .swiper-pagination-bullet
                    display inline-block
                    width 40px
                    margin-left 0
                    margin-right 0
                    height 5px
                    border-radius 0


</style>