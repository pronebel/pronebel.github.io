- Study
	- http://www.cnblogs.com/hanyonglu/archive/2012/02/13/2349827.html

	- ["selected"](http://blog.csdn.net/shakespeare001/article/details/7788400/)

- Android SDK

	- 注意点： 
		- 天朝强的网络问题，更改dl.google.com的HOST配置
	- 真机调试的问题
		- 留意弹出的窗口中提示的mini API的版本要求，低于这个版本的是不会在设备选择窗口显示的，但可以在这个窗口即时插拔数据线，会在设备中显示出来。

	- Andrid Devices出现“unknown,offline”状态，到Devices窗口，进行["reset ADB"](http://samplecode4u.com/reset-android-debug-bridge-adb/)操作



### Lib

#### Gallery :	

- http://www.cnblogs.com/hanyonglu/archive/2012/04/07/2435589.html

- http://my.oschina.net/zhoulc/blog/139991

-  [源码下载：74个Android开发开源项目汇总](http://mobile.51cto.com/aprogram-396015.htm)
-  http://blog.csdn.net/zjbpku/article/details/18732295
- [Androidannotations——开源框架简介&简易使用准备](http://blog.csdn.net/linjf2009/article/details/17118575)


###GestureDetector


	随着Android SDK的升级，以前的某些接口可能有更好、更安全的接口来代替。Android开发团队会把过时的接口标识成deprecated, 然后在开发文档中提示使用最新的代替接口。
	你用到的GestureDetector的构造函数在4.1版本中已经过时，可以使用推荐的:
	mGestureDetector = new GestureDetector(this, this);
	// 注意前一个this代表的是一个Context,后一个this代表的是一个OnGestureListener。
	// Activity继承自Context, 而你的activity应该实现了(implements)OnGestureListener接口。