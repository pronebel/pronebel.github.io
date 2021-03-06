[Ubuntu安装配置Mysql](http://www.cnblogs.com/wuhou/archive/2008/09/28/1301071.html)  
三种安装方式：

　　1. 从网上安装 sudo apt-get install mysql-server。装完已经自动配置好环境变量，可以直接使用mysql的命令。

　　　　注：建议将/etc/apt/source.list中的cn改成us，美国的服务器比中国的快很多。

　　2. 安装离线包，以mysql-5.0.45-linux-i686-icc-glibc23.tar.gz为例。

　　3. 二进制包安装：安装完成已经自动配置好环境变量，可以直接使用mysql命令

网上安装和二进制包安装比较简单，重点说安装离线包。

　　1. groupadd mysql

　　2. mkdir /home/mysql

　　3. useradd -g mysql -d /home/mysql mysql

　　4. copy mysql-5.0.45-linux-i686-icc-glibc23.tar.gz到/usr/local目录

　　5. 解压：tar zxvf mysql-5.0.45-linux-i686-icc-glibc23.tar.gz

　　6. ln -s mysql-5.0.45-linux-i686-icc-glibc23 mysql

　　7. cd /usr/local/mysql

　　8. chown -R mysql .

　　9. chgrp -R mysql .

　　10. scripts/mysql_install_db --user=mysql (一定要在mysql目录下执行，注意输出的文字，里边有修改root密码和启动mysql的命令）

　　11. 为root设置密码： ./bin/mysqladmin -u root password 'passw0rd'

 

配置和管理msyql：

　　1. 修改mysql最大连接数：cp support-files/my-medium.cnf ./my.cnf，vim my.cnf，增加或修改max_connections=1024

　　关于my.cnf：mysql按照下列顺序搜索my.cnf:/etc,mysql安装目录，安装目录下的data。/etc下的是全局设置。

　　2. 启动mysql：/usr/local/mysql/bin/mysqld_safe --user=mysql &

　　　　查看mysql版本：mysqladmin -u root -p version

　　　　注：网上安装或者二进制安装的可以直接使用如下命令启动和停止mysql: /etc/init.d/mysql start|stop|restart

　　3. 停止mysql：mysqladmin -uroot -ppassw0rd shutdown 注意，u,p后没有空格

　　4. 设置mysql自启动：把启动命令加入/etc/rc.local文件中

　　5. 允许root远程登陆：

　　　　1）本机登陆mysql：mysql -u root -p （-p一定要有）；改变数据库：use mysql;

　　　　2）从所有主机：grant all privileges on *.* to root@"%" identified by "passw0rd" with grant option;

　　　　3）从指定主机：grant all privileges on *.* to root@"192.168.11.205" identified by "passw0rd" with grant option; flush privileges;

　　　　4)  进mysql库查看host为%的数据是否添加：use mysql; select * from user;

　　6. 创建数据库，创建user：

　　　　1)  建库：create database test1;

　　　　2)  建用户，赋权：grant all privileges on test1.* to user_test@"%" identified by "passw0rd" with grant option;

　　　　3）删除数据库：drop database test1;

　　7. 删除权限：

　　　　1) revoke all privileges on test1.* from test1@"%";

　　　　2) use mysql;

　　　　3) delete from user where user="root" and host="%";

　　　　4) flush privileges;

　　8. 显示所有的数据库：show databases; 显示库中所有的表：show tables;

　　9. 远程登录mysql：mysql -h ip -u user -p

　　10. 设置字符集（以utf8为例）：

　　　　1） 查看当前的编码：show variables like 'character%';

　　　　2)　修改my.cnf，在[client]下添加default-character-set=utf8

　　　　3） 在[server]下添加default-character-set=utf8，init_connect='SET NAMES utf8;'

　　　　4） 重启mysql。

　　　　注：只有修改/etc下的my.cnf才能使client的设置起效，安装目录下的设置只能使server的设置有效。

　　　　　　二进制安装的修改/etc/mysql/my.cnf即可

 　　11. 旧数据升级到utf8（旧数据以latin1为例）：

　　　　1） 导出旧数据：mysqldump --default-character-set=latin1 -hlocalhost -uroot -B dbname --tables old_table >old.sql

　　　　2） 转换编码(Linux和UNIX)：iconv -t utf-8 -f gb2312 -c old.sql > new.sql

　　　　　　这里假定原表的数据为gb2312，也可以去掉-f，让iconv自动判断原来的字符集。

　　　　3） 导入：修改new.sql，在插入或修改语句前加一句话："SET NAMES utf8;"，并修改所有的gb2312为utf8，保存。

　　　　　　mysql -hlocalhost -uroot -p dbname < new.sql

　　　　　　如果报max_allowed_packet的错误，是因为文件太大，mysql默认的这个参数是1M，修改my.cnf中的值即可（需要重启mysql)。

　　12. 支持utf8的客户端：Mysql-Front,Navicat,PhpMyAdmin，Linux Shell（连接后执行SET NAMES utf8;后就可以读写utf8的数据了。10.4设置完毕后就不用再执行这句话了）

　　13. 备份和恢复

　　　　备份单个数据库：mysqldump -uroot -p -B dbname > dbname.sql

　　　　备份全部数据库：mysqldump -uroot -p --all-databases > all.sql

　　　　备份表： mysqldump -uroot -p -B dbname --table tablename > tablename.sql

　　　　恢复数据库：mysql -uroot -p < name.sql

　　　　恢复表：mysql -uroot -p dbname < name.sql (必须指定数据库) 

　　14. 复制

　　　　Mysql支持单向的异步复制，即一个服务器做主服务器，其他的一个或多个服务器做从服务器。复制是通过二进制日志实现的，主服务器写入，从服务器读取。可以实现多个主　　　　服务器，但是会碰到单个服务器不曾遇到的问题（不推荐）。

　　　　1). 在主服务器上建立一个专门用来做复制的用户：grant replication slave on *.* to 'replicationuser'@'192.168.0.87' identified by 'iverson';

　　　　2). 刷新主服务器上所有的表和块写入语句：flush tables with read lock; 然后读取主服务器上的二进制二进制文件名和分支：SHOW MASTER STATUS;将File和Position的值记录下来。记录后关闭主服务器：mysqladmin -uroot -ppassw0rd shutdown

　　　　　　如果输出为空，说明服务器没有启用二进制日志，在my.cnf文件中[mysqld]下添加log-bin=mysql-bin，重启后即有。

　　　　3). 为主服务器建立快照（snapshot）

　　　　　　需要为主服务器上的需要复制的数据库建立快照，Windows可以使用zip格式，Linux和Unix最好使用tar命令。然后上传到从服务器mysql的数据目录，并解压。

　　　　　　cd mysql-data-dir

　　　　　　tar cvzf mysql-snapshot.tar ./mydb

　　　　　　注意：快照中不应该包含任何日志文件或*.info文件，只应该包含要复制的数据库的数据文件（*.frm和*.opt）文件。

　　　　　　可以用数据库备份(mysqldump)为从服务器做一次数据恢复，保证数据的一致性。

　　　　4). 确认主服务器上my.cnf文件的[mysqld]section包含log-bin选项和server-id，并启动主服务器：

　　　　　　[mysqld]

　　　　　　log-bin=mysql-bin

　　　　　　server-id=1

　　　　5). 停止从服务器，加入server-id，然后启动从服务器：

　　　　　　[mysqld]

　　　　　　server-id=2

　　　　　　注：这里的server-id是从服务器的id，必须与主服务器和其他从服务器不一样。

　　　　　　可以在从服务器的配置文件中加入read-only选项，这样从服务器就只接受来自主服务器的SQL，确保数据不会被其他途经修改。

　　　　6). 在从服务器上执行如下语句，用系统真实值代替选项：

　　　　　　change master to MASTER_HOST='master_host', MASTER_USER='replication_user',MASTER_PASSWORD='replication_pwd',

　　　　　　　　MASTER_LOG_FILE='recorded_log_file_name',MASTER_LOG_POS=log_position;

　　　　7). 启动从线程：mysql> START SLAVE; 停止从线程：stop slave;（注意：主服务器的防火墙应该允许3306端口连接）

　　　　验证：此时主服务器和从服务器上的数据应该是一致的，在主服务器上插入修改删除数据都会更新到从服务器上，建表，删表等也是一样的。

以下是几个有用的连接：

http://publish.it168.com/2006/0203/20060203001301.shtml?cChanNel=11&cpositioncode=296&hezuo=107

分类: Ubuntu, mysql