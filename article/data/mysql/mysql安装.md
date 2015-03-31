

## mysql 安装


mysql 的zip安装包

	建议用这种，重装系统之后稍微配置即可以用

path环境变量配置

	C:\Program Files\MySQL\MySQL Server 5.6\bin 

修改配置文件

	mysql-5.6.1X默认的配置文件是在C:\Program Files\MySQL\MySQL Server 5.6\my-default.ini，或者自己建立一个my.ini文件，
	[mysqld] 
	basedir=C:\Program Files\MySQL\MySQL Server 5.6（mysql所在目录） 
	datadir=C:\Program Files\MySQL\MySQL Server 5.6\data （mysql所在目录\data）

以管理员身份运行cmd
	
	进入mysql的bin文件夹(不管有没有配置过环境变量，也要进入bin文件夹，否则之后启动服务仍然会报错误2)

	输入mysqld -install

安装成功后

	安装成功后就要启动服务了，继续在cmd中输入:net start mysql（如图）,服务启动成功！

使用mysql

	登录用户：mysql -u root -p
	

注意：
	
	注意：这个时候经常会出现错误2和错误1067。
	如果出现“错误2 系统找不到文件”，检查一下是否修改过配置文件或者是否进入在bin目录下操作，如果配置文件修改正确并且进入了bin文件夹，需要先删除mysql（输入 mysqld -remove）再重新安装（输入 mysqld -install）


## 常用的mysql命令

	登录：mysql -u root -p 

 	修改密码：
	mysql> use mysql; 
	mysql> update user set password=password('new_password') where user='root'; 

	停止MYSQL net stop mysql 
	开始MYSQL net start mysql