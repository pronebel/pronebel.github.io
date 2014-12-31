# Review Board


### 相关资料

- [Installing on Linux](https://www.reviewboard.org/docs/manual/2.0/admin/installation/linux/)
- [creating-sites](https://www.reviewboard.org/docs/manual/2.0/admin/installation/creating-sites/#creating-sites)

### Install at Ubuntu

Setting up a Server

	I chose to use Apache2 with mod_python, as advised by the Review Board team.
	Apparently there are some issues with running it as fastcgi. 
	To get an apache install capable of serving python pages:
	
	sudo apt-get install apache2
	sudo apt-get install libapache2-mod-python

	sudo apt-get install mysql-server
	sudo apt-get install python-mysqldb



apt-get install python-setuptools
 apt-get install python-dev




	sudo apt-get install memcached
	sudo apt-get install python-memcached





### [ReviewBoard Install](https://www.reviewboard.org/get/instructions/?product=rb&org-type=education&contact-email=&support-level=&contact-last-name=&os=linux-deb&contact-first-name=&org-name=)
	
	First, install all the required dependencies:
	
	sudo apt-get install python-setuptools python-dev memcached patch
	Install support for the revision control systems we support. These are optional.
	
	sudo apt-get install cvs git-core subversion python-svn
	sudo easy_install mercurial P4PythonInstaller
	Install support for your database.
	
	For MySQL:
	
	sudo apt-get install python-mysqldb
	For PostgreSQL:
	
	sudo easy_install psycopg2
	Now you can install Review Board!
	
	sudo easy_install ReviewBoard
	Follow our guide to creating a Review Board site.



### 相关软件安装  

	安装mysql 
	apt-get install mysql-server  中间需要输入root的密码 mysql –uroot –p   输入密码 
	create database reviewboard default charset utf8 collate utf8_general_ci;