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
		proxy:"http://localhost:3000"
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