<template>
    <div class="container">
        <div class="header">
            <div class="headerContent">
                <i class="iconfont icon-search1187938easyiconnet"></i>
                <span @click="$router.replace({path:'/Search',query:{fromPage:'Search'}})" class="placeholder">搜索商品, 共24802款好物</span>
            </div>
        </div>
        <div class="categoryList" ref="categoryList">
            <div class="categoryScroll">
                <ul class="categoryContent">
                    <li class="categoryItem"
                        :class="{active:NavIndex === index}"
                        v-for="(item,index) in categoryNav"
                        :key="index"
                        @click="switchNav(index)"
                    >
                        {{item.name}}
                    </li>
                </ul>
            </div>
        </div>
        <div class="cateNavDatas" ref="cateNavDatas">
            <div class="cateScroll">
                <div class="banner">
                    <img :src="bannerUrl">
                </div>
                <div class="cateList">
                    <ul class="list" >
                        <li class="cateItem" v-for="(item,index) in cateList" :key="index">
                            <div class="cateImgWrapper">
                                <img :src="item.wapBannerUrl">
                            </div>
                            <div class="name">
                                {{item.name}}
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll';
    import {getCategoryNav,getCategoryList} from "@/utils";

    export default {
		name: "Category",
		data(){
		    return {
			    categoryNav:[],
			    categoryList:[],
			    cateList:[],
                bannerUrl:'https://yanxuan.nosdn.127.net/9f4bcf0d57149499584d59478a606e9e.jpg',
                NavIndex:0
            }
		},
        methods:{
	        switchNav(index){
	        	this.NavIndex = index
	        	this.bannerUrl = this.categoryNav[index].bannerUrl;
	        	if (index < 4) this.cateList = this.categoryList[index].categoryList
                else this.cateList = this.categoryList[index].subCateList
	        },
        },
        async mounted(){
			let categoryNav = await getCategoryNav();
			this.categoryNav = categoryNav.data.categoryL1List;
	        let categoryList = await getCategoryList();
	        this.categoryList  = categoryList.data;
	        this.cateList = this.categoryList[0].categoryList

	        this.$nextTick(() => {
	        	//在这里要做两个的滑动 左侧导航和右侧内容区
		        let categoryListScroll =  this.$refs.categoryList;
		        new BScroll(categoryListScroll,{
		            click:true
		        })
                let cateNavDatasScroll = this.$refs.cateNavDatas;
                new BScroll(cateNavDatasScroll)
             })
        }
	}
</script>

<style scoped lang="stylus">
.container
    .header
        height 88px
        line-height 88px
        display flex
        align-items center
        position: relative;
        padding 0 30px
        &::after
            position absolute
            left 0
            bottom 0
            content ''
            width 100%
            height 1px
            border-bottom 1px solid rgba(0,0,0,.15)
        .headerContent
            display flex
            align-items center
            justify-content center
            width 100%
            height 56px
            border-radius 10px
            background-color #ededed
            color #666
            .iconfont
                font-size 26px
            .placeholder
                margin-left 10px
                font-size 28px

    .categoryList
        float: left;
        width 162px
        height 1148px
        box-sizing border-box
        border-right 1px solid rgba(0,0,0,.15)
        overflow hidden
        .categoryScroll
            height 1334px
            .categoryContent
                padding 40px 0
                width 100%
                .categoryItem
                    position: relative;
                    font-size 28px
                    width 100%
                    height 50px
                    line-height 50px
                    text-align center
                    margin-top 40px
                    color #333
                    &:first-child
                        margin-top 0
                    &.active:before
                        content ''
                        width 6px
                        height 50px
                        position: absolute;
                        top: 0;
                        left: 0;
                        background-color: #ab2b2b

    .cateNavDatas
        width 528px
        height 1097px
        padding 30px
        padding-bottom 21px
        margin-left 162px
        margin-top 30px
        overflow hidden
        .cateScroll
            height 1334px
            .banner
                width 100%
                height 192px
                margin-bottom 39px
                >img
                    width 100%
                    height 100%
            .cateList
                width 528px
                /*height 680px*/
                .list
                    width 534px
                    overflow: hidden;
                    .cateItem
                        width 144px
                        height 216px
                        margin-right 34px
                        float: left;
                        .cateImgWrapper
                            width 144px
                            height 144px
                            >img
                                width 100%
                                height 100%
                        .name
                            font-size 24px
                            text-align center
</style>