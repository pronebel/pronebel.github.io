<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8"/>
    <title>艺术</title>

    <meta name="description" content="overview &amp; stats"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

    <!-- basic styles -->

    <link rel="stylesheet" href="<?php echo PATH_ASSETS ?>css/bootstrap.min.css"/>
    <link rel="stylesheet" href="<?php echo PATH_ASSETS ?>css/bootstrap-theme.min.css"/>
    <link rel="stylesheet" href="<?php echo PATH_ASSETS ?>css/style.css"/>

    <!--[if lt IE 9]>
    <script src="<?php echo PATH_ASSETS ?>js/html5shiv.js"></script>
    <script src="<?php echo PATH_ASSETS ?>js/respond.min.js"></script>
    <![endif]-->
    <!--[if lte IE 7]>
    <script type="text/javascript">
        if(!navigator.userAgent.match(/MSIE 10/)){
            document.location.replace('browser.html')
        }
    </script>
    <![endif]-->

    <script>


    </script>

    <?php include $TPL_InlineCSS; ?>



</head>

<body>

    <div id="header">
        <a id="join_member" href="javascript:;"><span>加入收藏夹协会</span></a>
        <div class="login-menu">
            <a href="javascript:;">注册</a> <span>|</span>
            <a href="javascript:;">登录</a>

            <a href="javascript:;" class="ship-car">购物车: 0</a>
        </div>
        <div id="logo"><a href="javacript:;"></a></div>

        <div id="page-menu">
            <a class="broadcast" href="#"><span>传播艺术</span></a>
            <a class="life" href="#"><span>品味生活</span></a>
        </div>
    </div>
    <div id="banner">
        <div class="banner-content">
            <div class="banner-img"><img src="assets/images/banner_demo.png"></div>
            <div class="banner-desc">
                <h3>[主题艺术小镇]</h3>
                <p>
                    基于艺术跨界、联合、混搭的国际先锋理念，打造世界与中国、传统与现代、文化与艺术、度假与休闲全面包容的前沿商业模式。
                </p>
            </div>
        </div>
        <div class="banner-slider">
            <a href="javascript:;"></a>
            <a class="current" href="javascript:;"></a>
            <a href="javascript:;"></a>
            <a href="javascript:;"></a>
        </div>
    </div>

    <div id="wrapper">
        <div id="content">
    <?php include $TPL_PageContent; ?>
        </div>
    </div>


<div id="footer" class="clearfix">
    <div class="weixin">
        <h3>关注微信公众号</h3>
        <a href="#"><img src="assets/images/weixin_icon.png"></a>
    </div>
    <div class="weibo">
        <h3>关注官方微博</h3>
        <a href="#"> <img src="assets/images/weibo_icon.png" /></a>
    </div>
    <div class="copyright">
        <div class="copyright-menu">
            <a href="#">联系我们</a>
            <a href="#">友情链接</a>
            <a href="#">隐私声明</a>
            <a href="#">新手上路</a>
        </div>
        <p>
            Copyright ©2012-2014京ICP备13021479号-2    上海中艺网络科技有限公司
        </p>
    </div>
</div>


<script src='<?php echo PATH_ASSETS ?>js/jquery/jquery.min.js'></script>
<script src="<?php echo PATH_ASSETS ?>js/bootstrap/bootstrap.min.js"></script>


<?php include $TPL_InlineJS; ?>


</body>
</html>
