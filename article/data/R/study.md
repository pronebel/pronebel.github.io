###R语言经典入门


#### 2- 基本原理和概念

P2.2 对象的产生
	
	- 删除变量
		rm(变量名)
		rm(list=ls())
		rm(list=ls(pat="^m"))

P2.3

	help('ls')


#### 3-R的数据操作

	
3.1 对象 (p9)
	
	x<-1
	mode(x)
	length(x)


- 数据的对象的类别概览 p10

		- 向量是一个变量，其意思也即人们通常认为的那样；
		- 因子是一个分类变量；
		- 数组是一个k维的数据表；
		- 矩阵是数组的一个特例，其维数k = 2。
		
		注意:
  		- 数组或者矩阵中的所有元素都必须是同一种类型的；
  		- 数据框是由一个或几个向量和（或）因子构成，它们必须是等长的，但可以是不同的数据类型；
  		- “ts”表示时间序列数据，它包含一些额外的属性，例如频率和时间；
  		- 列表可以包含任何类型的对象，包括列表！
  		- 对于一个向量，用它的类型和长度足够描述数据；而对其它的对象则另需一些额外信息，这些信息由外在的属性给出。这些属性中的是表示对象维数的dim，比如一个2行2列的的矩阵，它的dim是一对数值[2,2]，但是其长度是4。


3.2 文件中读取数据

	- getwd
	- setwd

	- read.table
	- scan
	- read.fwf
	-


读取数据框数据 read.table


3.3 存储数据


3.4 生成数据

	- 生成1-30的规则证书序列		
		x<-1:30
	
	- seq(1,5,0.6)
	- seq(length=9, from=1, to=5)
	- c(1,2,3,3.6)
	- z <- scan()
	- rep(1,30)
	- sequence(4:5)
	- sequence(c(10,5))
	- gl(3,5) 生成不同的水平/层次的因子序列数据
	- gl(3, 5, length=30)
	- gl(2, 6, label=c("Male", "Female"))
	- expand.grid(h=c(60,80), w=c(100, 300), sex=c("Male", "Female"))


3.4.2 随机序列  （p18）

- 显著性水平为5%的正太分布的双侧临界值：
	- qnorm(0.025)
	- qnorm(0.975)


3.5 使用对象

	- 向量

	- 因子
		- factor(1:3)
		- factor(1:3, levels=1:5)
		- factor(1:3, labels=c("A", "B", "C"))
		- factor(1:5, exclude=4)


	- 矩阵

		- matrix(1:6, 2, 3, byrow=TRUE)

	- 数据框
		x <- 1:4; n <- 10;
		data.frame(x, n)
		data.frame(A1=x, A2=n)

	- 列表 List
		
		L1 <- list(x, y);
		L2 <- list(A=x, B=y)
	
	- 时间序列 
		- ts(1:10, start = 1959)
		- ts(1:47, frequency = 12, start = c(1959, 2))
		- ts(1:10, frequency = 4, start = c(1959, 2))
		- ts(matrix(rpois(36, 5), 12, 3), start=c(1961, 1), frequency=12)


	- 表达式
		x <- 3; y <- 2.5; z <- 1
		exp1 <- expression(x / (y + exp(z)))


3.5.2 对象的类型转换

3.5.3 运算符

	x <- 1:3; y <- 1:3
	x==y

	identical(x, y)
	all.equal(x, y)

3.5.4 访问一个对象的数值：下标系统