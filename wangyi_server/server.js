const express = require('express');
const app = express(); //实例express
let index = require('./data/index');
let cateNavDatas = require('./data/cateNavDatas');
let cateLists = require('./data/cateLists');
let indexCateModule = require('./data/indexCateModule');

//创建路由
app.get('/', function(req, res){
    res.send("ok");
});
app.get('/index', function(req, res){
    res.send({
        code:200,
        data:index
    });
});
//分类左侧导航数据
app.get('/cateNavDatas', function(req, res){
    res.send({
        code:200,
        data:cateNavDatas
    });
});
//分类右侧内容数据
app.get('/cateLists', function(req, res){
    res.send({
        code:200,
        data:cateLists
    });
});
//主页nav对应模块数据
app.get('/indexCateModule', function(req, res){
    res.send({
        code:200,
        data:indexCateModule
    });
});
//监听端口
app.listen(3000, function(){
    console.log('3000 listening.....');
});