

## 静态资源（css，js,img）目录


IMG-SRC图片：
	
	- images
	
源代码：

	- js
	- sass

目标：

	- css
		~ img
		~ css
	- dist


## 参考TraviLight的grunt过程

Grunt项目流程
	- clean:dist
	- compile:js
	- compile:css
	- compile:html
	- copy:dist

**compile:css**

	clean:css  -->  compass:compile

######
	
**compile:js的compile流程:**

	clear:dist -->  templateEmbed --> uglify --->  conact
	
TODO:

	JS:整理JS的项目目录



	
 



### 校验
	
	- jshint: 
		grunt jshint --no-color --force >> grunt-report/jshint.lst
 	
	- csshint:
 	

