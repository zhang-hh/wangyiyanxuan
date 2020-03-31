//发送所有的请求

import axios from "@/utils/myAxios";
import qs from 'qs';
//请求分类左侧数据
export const getCategoryNav = () => axios.get('/3000/cateNavDatas');
export const getCategoryList = () => axios.get('/3000/cateLists');
export const getSearchList = (keyword) =>
	axios.post('/search',qs.stringify({keywordPrefix:keyword}));
export const getTndexData = () => axios.get('/3000/index');