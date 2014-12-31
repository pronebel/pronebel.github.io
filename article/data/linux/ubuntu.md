打开系统监视器，可以查看系统详情。 
还有命令：查看版本： 
可以在终端输入命令： lsb_release -a 

查看操作系统位数： 
可以在终端输入命令：getconf LONG_BIT 



 
#####添加PATH环境变量

，第1种方法：
[root@lx_web_s1 ~]# export PATH=/usr/local/webserver/mysql/bin:$PATH
再次查看：
[root@lx_web_s1 ~]# echo $PATH         
/usr/local/webserver/mysql/bin:/usr/local/webserver/mysql/bin/:/usr/kerberos/sbin:/usr/kerberos/bin:/usr/local/sbin:/usr/local/bin:/sbin:/bin:/usr/sbin:/usr/bin:/root/bin
说明添加PATH成功。
上述方法的PATH 在终端关闭 后就会消失。所以还是建议通过编辑/etc/profile来改PATH，也可以修改家目录下的.bashrc(即：~/.bashrc)。
 
第2种方法： 
# vim /etc/profile
在最后，添加:
export PATH="/usr/local/webserver/mysql/bin:$PATH"
保存，退出，然后运行：
#source /etc/profile


#### 修改hosts

sudo gedit /etc/hosts


