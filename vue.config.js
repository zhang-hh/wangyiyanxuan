const path = require('path');
const px2rem = require('postcss-px2rem');
const postcss = px2rem({
	remUnit: 75   //设计稿的宽度 /10
})
//__dirname是当前文件所在目录 vue_project
function resolve(dir){
	return path.join(__dirname,dir)
}
module.exports = {
	lintOnSave:false,//关闭eslint语法检查
	devServer:{
		open:true,  //自动打开浏览器
		//proxy:"http://localhost:3000"
		proxy:{
			//请求是可以找到4000服务器 可是4000服务没有对应的接口  devserve会主动返回index.html
			'/3000': {
				target: 'http://localhost:3000',
				changeOrigin: true, //允许跨域
				pathRewrite:{
					"^/3000":""
				}
			},
			'/search': {
				target: 'https://m.you.163.com/xhr/search/searchAutoComplete.json',
				changeOrigin: true, //允许跨域
				pathRewrite:{
					"^/search":""
				}
			},
		}
	},
	configureWebpack:{
		resolve:{
			// 别名配置
			alias:{
				'@':resolve('src'),
				'components':resolve('src/components'),
				'pages':resolve('src/pages')
			}
		}
	},
	css: {
		loaderOptions: {
			postcss: {
				plugins: [
					postcss
				]
			}
		}
	}
}