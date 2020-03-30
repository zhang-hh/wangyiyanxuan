//发送所有的请求

import axios from "@/utils/myAxios";
//请求分类左侧数据
export const getCategoryNav = () => axios.get('/cateNavDatas');
export const getCategoryList = () => axios.get('/cateLists');