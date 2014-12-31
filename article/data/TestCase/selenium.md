前端测试：


- Jasmine
- mocha

- jslint:

	- http://www.jslint.com/
	- http://jshint.com/docs/reporters/
	- http://www.jshint.com/docs/
	- https://www.npmjs.org/package/grunt-contrib-jshint


##selenium-webdriver

1、安装selenium-webdriver Nodejs版 [doc](http://code.google.com/p/selenium/wiki/WebDriverJs)：

	npm -g install selenium-webdriver
	
- 参考 npmjs的[安装](https://www.npmjs.org/package/selenium-webdriver)
- 下载 一系列包备用，[link](http://docs.seleniumhq.org/download)


2. 设置  ChromeDriver.exe位置到path环境变量。


3.编写测试文件，测试ok

-----
####安装

- npm install -g selenium-standalone http-server phantomjs
-C:\Users\nebel\AppData\Roaming\npm\node_modules










PS:教程
- 中文教程 http://mochacn.github.io/#browser-support

- [初识 mocha in NodeJS](cnodejs.org/topic/516526766d38277306c7d277)

- [自动化测试工具 Selenium WebDriver 入门教程](http://www.open-open.com/lib/view/open1354764154148.html)
- [教程2](http://wenku.baidu.com/link?url=RUN-vcwCsV2kUZxM-CsuGVazbd15EgEhj-xnzVFGDUYBfON6y3X0TtdYpwIj1RiZcKAQCSRApCMt-9MPhC8RDK)
- [selenium之操作ChromeDriver](http://softtest.chinaitlab.com/qita/946806.html)
[Selenium2.0之WebDriver学习总结（1）](http://qa.blog.163.com/blog/static/19014700220122231779/)

- [ruby/python/java全覆盖的Selenium-Webdriver系列教程(1)————快速开始](http://www.cnblogs.com/nbkhic/archive/2013/06/06/3121323.html)

- http://www.leiphone.com/news/201406/5-great-front-end-dev-tools.html
- [测试教程](http://www.cnblogs.com/fnng/)
- 自动化e2e测试 -- WebDriverJS，Jasmine和Protractor http://www.html-js.com/article/1986


----

测试工具：

-  [webdriver](http://webdriver.io/) [doc](https://github.com/webdriverio/webdriverio)

- [selenium-node-webdriver](https://github.com/WaterfallEngineering/selenium-node-webdriver)

- [selenium-standalone](https://github.com/vvo/selenium-standalone)

- [phantomjs](http://phantomjs.org/download.html)







--------
#测试工具

- http://www.oschina.net/translate/funcunit-and-cucumber-a-perfect-combo-for-frontend-testing
- http://www.oschina.net/p/dagger
- 
http://chaijs.com/

- http://www.cnblogs.com/fnng/archive/2011/10/30/2223227.html
- http://www.open-open.com/lib/view/open1354764154148.html
- -https://github.com/WaterfallEngineering/selenium-node-webdriver
- http://simpleprogrammer.com/2014/02/03/selenium-with-node-js/
- http://www.tuicool.com/articles/Ijemay 在WebStorm中集成Karma+jasmine进行前端单元测试 - 刺客之家

https://code.google.com/p/selenium/wiki/WebDriverJs

http://blog.fens.me/nodejs-core-domain/


http://chaijs.com/
http://mochacn.github.io/

-------------------

- [angularjs-organizing-your-code-with-modules](http://www.oschina.net/translate/angularjs-organizing-your-code-with-modules)




-

 关于TDD、BDD和DDD的一些看法

在实际的项目中，我们可能随时面对各种不同的需求，它的各个方面的要素决定了我们所采用的开发模式。

比如，它的复杂度如何？所有的需求是否足够清晰？开发人员对相关的业务是否足够了解？项目的工期是否合理？种种问题，不一而足。这也决定了我们可能面对不同的需求可能需要采用不同的开发模式。下面大概说几种。

 

1. TDD

TDD指的是Test Drive Development，很明显的意思是测试驱动开发，也就是说我们可以从测试的角度来检验整个项目。大概的流程是先针对每个功能点抽象出接口代码，然后编写单元测试代码，接下来实现接口，运行单元测试代码，循环此过程，直到整个单元测试都通过。这一点和敏捷开发有类似之处。

TDD的好处自然不用多说，它能让你减少程序逻辑方面的错误，尽可能的减少项目中的bug，开始接触编程的时候我们大都有过这样的体验，可能你觉得完成得很完美，自我感觉良好，但是实际测试或者应用的时候才发现里面可能存在一堆bug，或者存在设计问题，或者更严重的逻辑问题，而TDD正好可以帮助我们尽量减少类似事件的发生。而且现在大行其道的一些模式对TDD的支持都非常不错，比如MVC和MVP等。

但是并不是所有的项目都适合TDD这种模式的，我觉得必须具备以下几个条件。

首先，项目的需求必须足够清晰，而且程序员对整个需求有足够的了解，如果这个条件不满足，那么执行的过程中难免失控。当然，要达到这个目标也是需要做一定功课的，这要求我们前期的需求分析以及HLD和LLD都要做得足够的细致和完善。

其次，取决于项目的复杂度和依赖性，对于一个业务模型及其复杂、内部模块之间的相互依赖性非常强的项目，采用TDD反而会得不尝失，这会导致程序员在拆分接口和写测试代码的时候工作量非常大。另外，由于模块之间的依赖性太强，我们在写测试代码的时候可能不采取一些桥接模式来实现，这样势必加大了程序员的工作量。

 2. BDD

BDD指的是Behavior Drive Development，也就是行为驱动开发。这里的B并非指的是Business，实际上BDD可以看作是对TDD的一种补充，当然你也可以把它看作TDD的一个分支。因为在TDD中，我们并不能完全保证根据设计所编写的测试就是用户所期望的功能。BDD将这一部分简单和自然化，用自然语言来描述，让开发、测试、BA以及客户都能在这个基础上达成一致。因为测试优先的概念并不是每个人都能接受的，可能有人觉得系统太复杂而难以测试，有人认为不存在的东西无法测试。所以，我们在这里试图转换一种观念，那便是考虑它的行为，也就是说它应该如何运行，然后抽象出能达成共识的规范。如果你用过JBehave之类的BDD框架，你将会更好的理解其中具体的流程。这里我推荐一篇具体阐述的文章。亲身体验行为驱动开发。

另外，关于TDD和BDD之间的关系，还可以参考这篇文章: 虚拟座谈会：代码测试比率、测试驱动开发及行为驱动开发

 3. DDD

DDD指的是Domain Drive Design，也就是领域驱动开发。这是一种非常好的思想，在我们刚开始学习程序，甚至刚开始学习三层架构的时候，我们曾经面临过很多疑惑，比如如何来实现我们的数据层？后来我们开始学习MVC，MVP等架构，如何设计Model层又成了我们的新问题。我们见过太多这种情况，Model变成了单纯的数据容器，也就是我们经常说的贫血模式。DDD实际上也是建立在这个基础之上，因为它关注的是Service层的设计，着重于业务的实现，因此不可避免的以贫血模式为基础而存在。但是它最大的特别是将分析和设计结合起来，不再使他们处于分裂的状态，这对于我们正确完整的实现客户的需求，以及建立一个具有业务伸缩性的模型，是有很大帮助的。
