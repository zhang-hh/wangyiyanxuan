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
        <div ref="scroll" class="scroll">
            <div>
                <div style="height: 1px;margin-top: -1px"></div>
                <div>
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
                    <div class="wrappers">
                        <waterfall :col='2'
                                   :gutterWidth="gutterWidth"
                                   :width="itemWidth"
                                   :data="waterData"
                                   @loadmore="loadmore"
                        >
                            <template >
                                <div class="cell-item" v-for="(item,index) in waterData" :key="index">
                                    <div>
                                        <img class="cell-item-img" :class="{radius:!item.avatar}" v-if="item.picUrl" :lazy-src="item.picUrl" alt="">
                                        <div class="title" :class="{noPadding:!item.avatar}">{{item.title}}</div>
                                        <div v-if="item.avatar" class="detail">
                                            <img :src="item.avatar" class="avatar" alt="">
                                            <div class="username">{{item.nickname}}</div>
                                            <van-icon class="icon" color="#7f7f7f" size="16" name="eye-o" />
                                            <div class="text">{{Math.floor(item.readCount/1000)}}k</div>
                                        </div>
                                    </div>
                                </div>
                            </template>
                        </waterfall>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import BScroll from 'better-scroll';
    import _ from 'lodash';
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
    import 'swiper/css/swiper.css'
    import {Icon} from 'vant';
    import {getTopicData,getTopicRecManual,getTopicRecAuto} from "@/utils";
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
			    },
			    waterData:[], //瀑布流的数据
			    isbottom:false,//判断是否已经到底了
                isrefresh :true,
                page:0,//页码
                per_page:6,//每页加载几个
            }
        },
		computed:{
			itemWidth(){
				return (340 * 0.5*(document.documentElement.clientWidth/375)) //#rem布局 计算宽度
			},
			gutterWidth(){
				return (20 * 0.5*(document.documentElement.clientWidth/375))	//#rem布局 计算x轴方向margin(y轴方向的margin自定义在css中即可)
			}
		},
        components:{
			[Icon.name]:Icon,
	        Swiper,
	        SwiperSlide,

        },
        methods:{
            //滚动时触发
	        scroll(scrollData){
                //this.loadmore()
	        },
	        switchCol(col){
		        // this.col = col
		        // console.log(this.col)
	        },
            //加载更多
	        loadmore(){
		        if (this.isbottom) {
			        let page = this.page;
			        this.page += 1;
			        this.isbottom = false
                    this.getMorelist(page + 1);
                }
	        },
	        //获取数据
	        async getMorelist(page) {
                let moreList = await getTopicRecAuto(page,this.per_page);
                let dataArr = []
                for (let i=0;i<moreList.data.result[0].topics.length;i++){
	                dataArr.push(moreList.data.result[0].topics[i])
                }
		        this.waterData.push(...dataArr)//这里报错 是不是不能这的写 这里循环添加进去现在只是拿的第一项
	        },
            //进行数据处理
	        refresh(result){
	        	let dataArr = []
                dataArr.push(...result.data);
		        for (let i = 0; i <dataArr.length ; i++) {
			        if (dataArr[i].ad){
				        this.waterData.push(dataArr[i].ad)
			        }else if (dataArr[i].topics[0]){
				        this.waterData.push(...dataArr[i].topics)
			        }
		        }
            }
        },
        async mounted(){
			let navListData = await getTopicData();
			if (navListData.code === "200")
                this.navList = navListData.data.navList;
                this.navList = _.chunk(this.navList,2);//每2个变为一个数组

                //加载首屏瀑布流的数据

            let result = await getTopicRecManual();
            this.refresh(result);
            this.$nextTick(() =>{
                let scroll = this.$refs.scroll;
	            this.scroll =  new BScroll(scroll,{
	                scrollY:true,
	                scrollbar:{
		                fade:true,
		                interactive:false
	                },
	                probeType: 3, //除了实时派发 scroll 事件，在 swipe 的情况下仍然能实时派发 scroll 事件
	                mouseWheel:true, //允许鼠标滚动
	                HWCompositing: true ,//是否启用硬件加速
                    maxScrollY:-300
                })
	            this.scroll.on('scroll',(pos) => {
		            // console.log(pos.y)
		            // console.log(this.scroll.maxScrollY)
		            if (pos.y <= this.scroll.maxScrollY+200) {
			            this.isbottom = true
                        this.timer && clearTimeout(this.timer)
			            this.timer = setTimeout(()=>{
				            this.loadmore()
                        },100)
		            }
	            })
            })
        },
	}
</script>

<style lang="stylus">
.topicContainer
    width 750px
    height 1334px
    background-color #eee
    .hwrapper
        width 100%
        position fixed
        box-sizing border-box
        padding-left 24px
        padding-right 26px
        height 100px
        z-index 9
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



    .scroll
        width 100%
        height 100%
        overflow hidden
        .swiperTab-container
            box-sizing border-box
            padding-top 145px
            width 100%
            height 540px
            position relative
            margin-top 100px
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


        .wrappers
            width 750px
            background-color #eee
            margin-top 160px
            padding 0 20px
            box-sizing border-box
            .vue-waterfall
                overflow hidden
                .cell-item
                    border-radius 20px
                    overflow hidden
                    margin-bottom 20px
                    background-color #fff
                    .cell-item-img
                        display block
                        width 100%
                        &.radius
                            border-radius 20px
                    .title
                        padding 0 16px
                        font-size 30px
                        color #333
                        line-height 42px
                        padding-top 20px
                        background-color #fff
                        width 311px
                        &.noPadding
                            padding-top 0
                    .detail
                        padding 0 16px
                        padding-bottom 24px
                        display flex
                        justify-content space-between
                        font-size 18px
                        padding-top 17px
                        width 311px
                        line-height 36px
                        color #7f7f7f
                        .avatar
                            border-radius 50%
                            box-sizing border-box
                            border 2px solid #d9d9d9
                            height 44px
                            width 44px
                        .username
                            font-size 17px
                            white-space nowrap
                            text-overflow ellipsis
                            overflow hidden
                            margin-left 6px
                            line-height 36px
                        .icon
                            margin-left 60px
                            line-height 36px
                        .text
                            max-width 40px
                            font-size 21px
                            padding-right 16px
                            margin-left 2px

        .bscroll-vertical-scrollbar
            width 8px!important
            margin-right 5px!important
            .bscroll-indicator
                width 8px!important
                margin-right 5px!important
</style>