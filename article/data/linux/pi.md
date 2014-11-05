http://nodejs.org/dist/v0.11.12/

####  树莓派账户

	debian里root账户默认没有密码，但账户锁定。
	
	当需要root权限时，由默认账户经由sudo执行，Raspberry pi 系统中的Raspbian
	
	默认用户是pi 密码为raspberry
	
	重新开启root账号，可由pi用户登录后，在命令行下执行
	
	sudo passwd root
	执行此命令后系统会提示输入两遍的root密码，输入你想设的密码即可，然后在执行
	
	sudo passwd --unlock root
	这样就可以解锁root账户了。



####  编译Node
	树莓派编译Node
	
	1、安装基本环境
	        apt-get install python g++ make;
	
	2、在树莓派上一键编译NodeJS
	        mkdir ~/nodejs && cd $_;wget -N http://nodejs.org/dist/node-latest.tar.gz;tar xzvf node-latest.tar.gz && cd `ls -rd node-v*`;./configure;make install
	
	3、2小时后你应该差不多编译完了
	
	如果不想自己编译2小时，请下我编译后的，你下回去后解开，然后make install，然后10秒不到就安装完了
	http://t.cn/zjjWBSi


### linux 安装 nodejs

	  注意看好你下载的是什么文件！！！对应的安装方式不同啊，亲。

（一） 编译好的文件

    简单说就是解压后，在bin文件夹中已经存在node以及npm，如果你进入到对应文件的中执行命令行一点问题都没有，不过不是全局的，所以将这个设置为全局就好了。

?
1
2
3
cd node-v0.10.28-linux-x64/bin
ls
./node -v
    这就妥妥的了，node文件夹具体放在哪，叫什么名字随你怎么定。然后设置全局：

?
1
2
ln -s /home/kun/mysofltware/node-v0.10.28-linux-x64/bin/node /usr/local/bin/node
ln -s /home/kun/mysofltware/node-v0.10.28-linux-x64/bin/npm /usr/local/bin/npm
    这里/home/kun/mysofltware/这个路径是你自己放的，你将node文件解压到哪里就是哪里。

（二）通过源码编译

    这种方式你下载的文件是Source code，我不太喜欢这种方式。。。主要是麻烦
	
	
	#  tar xvf node-v0.10.28.tar.gz 
	#  cd node-v0.10.28 
	#  ./configure 
	# make 
	# make install 
	# cp /usr/local/bin/node /usr/sbin/ 
	 
	查看当前安装的Node的版本 
	# node -v 
	 
	v0.10.28
	（三）apt-get
	
	    还有一种就是shell提示的apt-get方式，我之前就被这种方式坑了。。。强烈不推荐啊
	
	sudo apt-get install nodejs
	sudo apt-get install npm
	    这么装完你会发现,node命令好使，nodejs命令可以用。。。

### 删除文件

	删除文件夹实例：
	rm -rf /var/log/httpd/access
	将会删除/var/log/httpd/access目录以及其下所有文件、文件夹
	2
	删除文件使用实例：
	rm -f /var/log/httpd/access.log
	将会强制删除/var/log/httpd/access.log这个文件



### 环境变量

三种添加环境变量的方法，在fedora使用jena时都试过了：
1、直接使用export命令：
比如：
export PATH=$PATH:/home/lm/apache-jena-2.7.4/bin
export CLASSPATH=.:/home/liaomeng/apache-jena-2.7.4/lib
命令export可以查看各个系统变量和路径，发现系统变量中PATH中多了设置的路径，增加了CLASSPATH变量，则设置成功
也可单个变量输出查看：
echo $CLASSPATH
echo $PATH
 
2. 修改/etc/profile文件
在/etc/profile文件末尾添加：
export JENAROOT=/home/liaomeng/apache-jena-2.7.4
export PATH=$JENAROOT/bin:$PATH             ##在已有的PATH变量前面添加jena路径，其中的冒号为分隔符
export CLASSPATH=.:$JENAROOT/lib/jena-core-2.7.4.jar        ##使用*.jar好像不好使，试了很多次，如果有多个jar包需要添加，也用冒号分隔
  www.2cto.com  
source /etc/profile使修改生效，不必重启系统
有人说也可以在/etc/profile.d/文件夹中添加个sh文件，/etc/profile文件似乎会自动读取/etc/profile.d/文件夹中的各个脚本文件，我还没试过。
另外需要注意：
CLASSPATH中当前目录“.”不能丢，把当前目录丢掉也是常见的致命错误。
在设置环境变量时特别要注意不能把原来的值给覆盖掉了，这是一种常见的错误。
软件越装越多，环境变量越添越多，为了避免造成混乱，所以建议所有语句都添加在文件结尾，按软件的安装顺序添加。
 
3. 修改主目录下的隐藏文件./bashrc
修改方式与修改/etc/profile文件相同
source .bashrc使修改生效
 
个人觉得重点是要理解linux的环境变量在程序运行时的作用，再就是添加时格式一定要正确，一般就不会错了



### http://node-arm.herokuapp.com/
http://weworkweplay.com/play/raspberry-pi-nodejs/

Step 1: Download
v0.10.33 (1271 downloads)
v0.10.32 (6254 downloads)
v0.10.31 (4845 downloads)
Total Downloads: 26830
To Download via command line
* wget http://node-arm.herokuapp.com/node_latest_armhf.deb

Other options are
* http://node-arm.herokuapp.com/node_0.10.32_armhf.deb
* http://node-arm.herokuapp.com/node_0.10.31_armhf.deb
Step 2: Install
sudo dpkg -i node_latest_armhf.deb
# Check installation
node -v