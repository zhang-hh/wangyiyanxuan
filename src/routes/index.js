import Index from "@/pages/Index/Index";
import Category from "@/pages/Category/Category";
import Topic from "@/pages/Topic/Topic";
import Cart from "@/pages/Cart/Cart";
import Profile from "@/pages/Profile/Profile";
import Search from '@/pages/Search/Search'
export default [
	{path:'/Index',component:Index},
	{path:'/Category',component:Category},
	{path:'/Topic',component:Topic},
	{path:'/Cart',component:Cart},
	{path:'/Profile',component:Profile},
	{path:'/Search',component:Search},
	{path:'/',redirect:'/Index'}
]