## react + redux + react-router + webpack项目脚手架

移动端项目脚手架，项目所使用的工具如下：

> Node version v4.6.0

- webpack
- npm scripts

## 安装依赖包
- npm install ( 推荐使用cnpm，获取更快的下载速度以及防止node-sass未下载的情况 参考 [淘宝npm镜像](http://npm.taobao.org/) )


## 开发与上线
- npm run dev 启动webpack-dev-server和dev构建环境
- npm run build 启动webpack product构建可发布的资源

## 模块化

js使用es6模块化规范来组织

##目录结构

<pre>

	|__ .eslintignore 	#eslint忽略
	|__ .eslintrc 	#eslint配置
	|__ .gitignore 	#git忽略
	|__ index.html 	#入口模板
	|__ package.json 	#项目配置
	|__ README.md 	#项目说明
	|__ src
	  |__ actions 	#redux - actions
	    |__ home.js
	  |__ api   #统一接口配置
	    |__ video.js
	  |__ assets  #静态资源
	    |__ images
	    |__ scripts
	    |__ styles
	  |__ components 	#组件
	  |__ config
	    |__ antd-mobile-theme.less 	#antd-mobile皮肤配置
	    |__ config.js 	#参数配置
	  |__ constants
	    |__ ActionTypes.js 	#redux - ActionTypes
	  |__ containers 	#容器组件
	  |__ main.js 	#入口js
	  |__ mixins 	#高阶函数
	  |__ reducers 	#redux - reducers
	  |__ redux.js  #redux入口配置
	  |__ routers.js 	#路由配置
	  |__ server.js 	#服务器端渲染
	|__ build 	#构建配置目录
	  |__ alias.js 		#别名配置
	  |__ antd-mobile-theme.js 	#antd-mobile获取皮肤vars功能函数
	  |__ server.js
	  |__ webpack.config.base.js 	#基础配置
	  |__ webpack.config.dev.js 	#开发环境配置
	  |__ webpack.config.product.js 	#生产环境配置

</pre>