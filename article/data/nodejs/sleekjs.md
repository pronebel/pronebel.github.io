# Sleekjs开发杂记

	sleekjs在国内似乎用的不多。其设计模式在日常开发中是有所应用的常见的模式，这个框架不在于其内涵，主要是实现了node上面的这种模式的应用，开发方式相对是你比较灵活的，而且框架容易看懂，如果想自己进行二次开发相对容易。
	
	但当前已经一年没人维护了。好在不难，需要的话自行进行学习更改还是一个不错的选择。

开发环境

	- nodejs 0.12.0
	- mongodb 



### 安装

	npm install -g sleek.js
	npm create xxx_project_name
	npm install //install依赖
	grunt		// run project



### install mongodb

安装 mongodb:

	- （http://www.mongodb.org/downloads）下载最新版的 mongodb,解压
	- 设置环境变量： 在path增加  d:\mongodb\bin
	- 创建数据存储目录
	- 启动mongodb： mongod -dbpath “d:\mongodb\blog”


mongo驱动：mongodb  vs mongoose

	mongodb驱动： 语法更为接近mongodb数据库自身的东西，用这个方便以后理解在命令行进行芒果数据库的管理

	mongoose：相当于包装了一层orm外衣，语法和使用方法容易些，但可能用了这个之后，不去学习芒果数据库的语法的话，在命令行还是一窍不通




### mysql配置

	sequelize：
		https://github.com/sequelize/express-example/tree/master/config


	sqlite：
		- firefox sqlite管理插件