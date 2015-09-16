/*
 * 图片延迟加载
 *
 */
var imageload = (function () {
	var imgload = {
		init: function (options) {
			var me = this;
			me.options = options;
			me.$parent = $('.e-imageload');
			if (me.$parent.length) me.bindEvent()
		},
		bindEvent: function () {
			var me = this;

			me.scroll();
			$(window).on('scroll', function () {me.scroll()})
		},
		scroll: function () {
			var me = this;
			var list = $('.e-imageload img[realsrc]');
			var len = list.length;
			if (len) {
				var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;

				var clientHeight = document.documentElement.clientHeight;
				var arr = []
				for (var i = 0; i < len; i++) {
					var img = list.eq(i);
					var offsetTop = img.offset().top;
					var offsetY = me.options.offsetY || 100;

					var offsetBottom = -(scrollTop + clientHeight + offsetY - offsetTop);
					if (offsetBottom < 1) {
						arr.push(img);
					}
				}
				me.srcChange(arr)
			}
		},
		srcChange: function (imgs) {
			var len = imgs.length;
			for (var i = 0; i < len; i++) {
				var img = imgs[i];
				var src = img.attr('realsrc');
				img.removeAttr('realsrc');
				img.attr('src', src);
			}
		}

	}

	return imgload
})();
