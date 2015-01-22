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
- https://www.npmjs.com/package/nightwatch
-  [webdriverio](http://webdriver.io/) [doc](https://github.com/webdriverio/webdriverio)（以前的webdriverjs更名为 webdriverio）

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





## 测试知识文章

### Web界面测试小结

	测试注意的问题：
	　从事web测试，特别是电子商务网站，现在大部分客户对界面的要求非常高，所以对于测试人员来讲，也必须特别注意界面的一些东西。从前几个项目来看，个人认为界面测试的测试点以及应该注意的问题：
	1.	界面的线条是否一致，每个界面中线条是否对齐，是否一致。（静态页面没有确认的情况下）
	2.	整个系统的界面是否保持一致
	3.	界面中是否存在错别字
	4.	界面所有的按钮样式是否一致
	5.	每个界面是否同原静态页面设计一致（静态页面确认的情况下）
	6.	操作是否友好
	7.	界面所有的按钮、下拉框是否有响应
	8.	界面所有的链接是否正常
	9.	界面所有的输入框是否都进行校验（例如：搜索框、字段输入框）
	10.	界面所有的列表页标题字是否会折行，标题字是否统一居中等，当然也可以居左，这需要同客户沟通（折行的话影响美观）
	11.	界面所有的展示图片是否样式一致
	12.	浏览器的兼容性问题，检查页面在不同浏览器下是否会发生异常
	13.	每个页面的提示字体的颜色、格式是否统一准确
	14.	界面中所有字段后面是否都存在冒号，有冒号，查看是否冒号为统一的中文冒号还是英文冒号。
	15.	界面中的提示说明叙述是否太啰嗦，有时候需要能简化尽量简化，并且字体显示格式一致，颜色统一。
	16.	在web网站，一般经常是后台控制前台的显示，因此在对后台进行数据添加时，查看前台是否有变化，并且查看界面的数据是否溢出框外。
	　　当然，我们在进行界面测试时，必须明确UI测试的目的，它是确保用户界面通过测试对象的功能来为用户提供相应的访问或浏览功能。
	　　确保用户界面符合公司和行业的标准。
	　　通过用户界面测试来核实用户与软件的交互，UI测试的目标在于确保用户界面向用户提供了适当的访问和浏览对象功能的操作，除此之外，UI测试还却表UI功能内部的对象符号预期的要求，并遵循公司和行业的标准。
	　　接下来，具体的分析一下界面测试的依据从哪些方面着手。
	测试目标：
	a)	窗口与窗口之间、字段与字段之间的浏览，以及各种访问方法（tab键、鼠标移动和快捷键）的使用
	b)	窗口的对象和特征（例如：菜单、大小、位置、状态和中心）都符号标准
	　　测试方法：为每个窗口创建或修改测试，以核实各个应用程序窗口和对象都可正确的进行浏览，并处于正常的对象状态。
	　　我们在实际工作当中，针对web应用程序，也就是经常所说的B/S系统，可以从如下方面来进行用户界面测试：
	1）导航测试
	　　导航描述了用户在一个页面内操作的方式，在不同的用户接口控制之间，例如按钮、对话框、列表和窗口等；
	　　不同的链接页面之间，通过考虑下列问题，可以决定一个web应用系统是否易于导航；导航是否直观？web系统的主要部分是否可通过主页存取？web系统是否需要站点地图、搜索引擎或其他的导航帮助
	　　当然，这些同美工以及客户需求有关。我们是根据已经确认的页面进行测试即可。
	2）图形测试
	　　图形包括图片、动画、边框、颜色、字体、背景、按钮等。
		要确保图形有明确的用途，图片或动画不要胡乱的堆在一起，以免浪费传输时间，web应用系统的图片尺寸要尽量地小，并且要能清楚的说明某件事情。一般都链接到某个具体的页面
		验证所有页面字体的风格是否一致
		背景颜色与字体颜色和背景色相搭配
		图片的大小和质量，一般采用jpg或gif压缩，最好能使用图片的大小减小到30k以下
		演示文字回绕是否正确，如果说明文字指向右边的图片，应该确保该图片出现在右边，不要因为使用图片而使窗口和段落排列古怪或者出现骨性。
	3）内容测试
	　　内容测试用来检验Web应用系统提供信息的正确性、准确性和相关性。信息的正确性是指信息是可靠的还是误传的。信息的相关性是指是否在当前页面可以找到与当前浏览信息相关的信息列表或入口，也就是一般Web站点中的所谓"相关文章列表"
	4）表格测试
	　　需要验证表格是否设置正确，用户是否需要向右滚动页面才能看见产品的价格？
	　　把价格放在左边，产品细节放在右边是否更有效？
	　　每一栏的宽度是否足够宽，表格里的文字是否都有折行？
	　　是否因为某一格的内容太多，而将整行的内容拉长？
	5）整体界面测试
	　　整体界面是指整个Web应用系统的页面结构设计，是给用户的一个整体感。例如：当用户浏览Web应用系统时是否感到舒适，是否凭直觉就知道要找的信息在什么地方？整个Web应用系统的设计风格是否一致？
	　　对整体界面的测试过程，其实是一个对最终用户进行调查的过程。一般Web应用系统采取在主页上做一个调查问卷的形式，来得到最终用户的反馈信息。
	　　对所有的用户界面测试来说，都需要有外部人员（与Web应用系统开发没有联系或联系很少的人员）的参与，最好是最终用户的参与。
	
	


###关于TDD、BDD和DDD的一些看法

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
