#### cordova 使用:

- [Cordova](http://cordova.apache.org/docs/en/3.3.0/index.html)
- [Ant](http://ant.apache.org/)


####

- http://plugins.cordova.io/#/search?search=sound
- ngcordova.com


######### Camera API：
	
	1、页面引用cordova.js
	2、cordova plugin add org.apache.cordova.camera

资料： 
	- [xx](http://rensanning.iteye.com/blog/2024988)
	-  [ phonegap入门--4 Camera 摄像头](http://blog.csdn.net/mengxiangyue/article/details/8796254)

### Notification

http://blog.csdn.net/mengxiangyue/article/details/8896890

[Cordova 3.x 基础（7） -- Native API的使用](http://rensanning.iteye.com/blog/2021619)
 
LINK:

- [phonegap入门](http://blog.csdn.net/mengxiangyue/article/category/1351139/2)

- [Cordova 3.x 基础（2） -- 应用图标icon和启动页面SplashScreen](http://rensanning.iteye.com/blog/2017380)



##  命令行

	安装cordova，必须先安装node.js 
	windows: 
	npm install -g cordova 
	
	ios & linux: 
	sudo npm install -g cordova 
	
	Create the App: 
	cordova create DirectoryName com.package.name ProjectName 
	
	Add/Remove/ls Platforms: 
	cd DirectoryName 
	
	cordova platform add android 
	cordova platform add ios 
	cordova platform add amazon-fireos 
	cordova platform add blackberry10 
	cordova platform add firefoxos 
	
	cordova platforms ls 
	
	cordova platform rm android 
	
	
	Build the App: 
	cordova build 
	cordova build ios 
	cordova prepare ios 
	cordova compile ios 
	
	Test the App on an Emulator or Device: 
	cordova emulate android 
	cordova run android 
	
	
	Add Plugin Features: 
	cordova plugin add org.apache.cordova.device 

	cordova plugin add org.apache.cordova.network-information 

	cordova plugin add org.apache.cordova.battery-status 
	cordova plugin add org.apache.cordova.device-motion 
	cordova plugin add org.apache.cordova.device-orientation 
	cordova plugin add org.apache.cordova.geolocation 
	cordova plugin add org.apache.cordova.camera 
	cordova plugin add org.apache.cordova.media-capture 
	cordova plugin add org.apache.cordova.media 
	cordova plugin add org.apache.cordova.file 
	cordova plugin add org.apache.cordova.file-transfer 
	cordova plugin add org.apache.cordova.dialogs 
	cordova plugin add org.apache.cordova.vibration 
	cordova plugin add org.apache.cordova.contacts 
	cordova plugin add org.apache.cordova.globalization 
	cordova plugin add org.apache.cordova.splashscreen 
	cordova plugin add org.apache.cordova.inappbrowser 
	cordova plugin add org.apache.cordova.console 
	
	
	cordova plugin ls 
	
	cordova plugin rm org.apache.cordova.console 
	---or--- 
	cordova plugin remove org.apache.cordova.console 
	
	
	Help Commands: 
	cordova help 
	---or--- 
	cordova 
	
	cordova info 
	
	Updating Cordova and Your Project: 
	cordova -v 
	sudo npm update -g cordova 
	npm info cordova 
	
	cordova platform update android 
	cordova platform update ios 
	...etc.