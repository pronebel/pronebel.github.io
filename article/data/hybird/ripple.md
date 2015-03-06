http://ripple.incubator.apache.org/










Cordova 3.x 基础（3） -- 调试工具Debug   http://rensanning.iteye.com/blog/2018417

博客分类： Cordova
CordovaPhoneGap 
（1）Ripple Emulator 
是基于Google Chrome的移动应用模拟器，已经捐赠给了ASF。Apache Ripple：http://ripple.incubator.apache.org/ 

Chrome Webstore安装地址： 
https://chrome.google.com/webstore/detail/geelfhphabnejjhdalkjhgipohgpdnoc 

安装Ripple Emulator 
引用
npm install -g ripple-emulator


创建Android测试工程app1 
引用
cordova create app1 
cd app1 
cordova platform add android


启动Ripple 
引用
ripple emulate


启动Chrome浏览器 
http://localhost:4400/?enableripple=cordova-3.0.0 
 

iOS工程也一样，但是默认Ripple进入Android模拟器，所以会报错，在左侧的Devices那里选择iPhone5 或者 iPad切换设备即可。 

http://www.raymondcamden.com/index.cfm/2013/2/6/Using-Ripple-for-PhoneGap-Development 
http://www.raymondcamden.com/index.cfm/2014/1/17/Installing-and-Using-Ripple-for-Cordova-Development-A-Video 

（2）weinre 
Web Inspector Remote、是基于WebKit（比如Chrome、Safari）的调试工具。 
安装 
引用
npm install weinre

启动 
引用
node node_modules\weinre\weinre

访问 
http://localhost:8080 
 

**Windows下的安装路径在： 
C:\Documents and Settings\RenSanNing\node_modules\weinre 

修改www/index.html，添加以下代码： 
Html代码  收藏代码
<script src="http://localhost:8080/target/target-script-min.js#HelloCordova"></script>  


访问以下URL后，Targets有了文件连接后，切换到Elements后就能调试页面了。 
http://localhost:8080/client/#HelloCordova 
 

要是Targets为none的话，换个IP和端口： 
引用
node node_modules\weinre\weinre --boundHost 192.168.21.198 --httpPort 9090


（3）GapDebug 
Genuitec开发的本地调试Cordova应用（iOS&Android）的工具，免费。Genuitec可能没几个人知道，不过他们开发的MyEclipse没人不知道吧。 
https://www.genuitec.com/products/gapdebug/ 

 

详细可以参考这篇文章。 

（4）PhoneGap Developer App 
不需要编译就能在真机上测试应用，GapReload和LiveReload一起使用也可以做到相同的事。通过phonegap serve指令起一个服务器，通过WiFi与一台移动设备上的PhoneGap配对。这台服务器监控代码的变动，并把它们自动地发送到那台设备上，而不用执行本地编译。 
http://app.phonegap.com 
 
com.adobe.phonegap.app-v1.3.0.rar (682.7 KB)
下载次数: 9
查看图片附件