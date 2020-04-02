import Index from "@/pages/Index/Index";
import Category from "@/pages/Category/Category";
import Topic from "@/pages/Topic/Topic";
import Cart from "@/pages/Cart/Cart";
import Profile from "@/pages/Profile/Profile";
import Login from "@/pages/Login/Login";
import Search from '@/pages/Search/Search'
export default [
	{path:'/Index',component:Index,meta:{showTabbar:true}},
	{path:'/Category',component:Category,meta:{showTabbar:true}},
	{path:'/Topic',component:Topic,meta:{showTabbar:true}},
	{path:'/Cart',component:Cart,meta:{showTabbar:true}},
	{path:'/Profile',component:Profile,meta:{showTabbar:false}},
	{path:'/Login',component:Login,meta:{showTabbar:true}},
	{path:'/Search',component:Search,meta:{showTabbar:false}},
	{path:'/',redirect:'/Index'}
]