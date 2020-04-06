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
			//值得买接口
			'/topic': {
				target: 'https://m.you.163.com/topic/v1/know/navWap.json',
				changeOrigin: true, //允许跨域
				pathRewrite:{
					"^/topic":""
				}
			},
			//值得买瀑布流第一屏
			'/recManual': {
				target: 'https://m.you.163.com/topic/v1/find/recManual.json',
				changeOrigin: true, //允许跨域
				pathRewrite:{
					"^/recManual":""
				}
			},
			//值得买瀑布流触底加载
			'/recAuto': {
				target: `https://m.you.163.com/topic/v1/find/recAuto.json`,
				changeOrigin: true, //允许跨域
				pathRewrite:{
					"^/recAuto":""
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