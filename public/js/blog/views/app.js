define([
    'jquery',
    'underscore',
    'backbone',
    'text!blog/templates/menu.html',
    'text!blog/templates/bloglist.html'

], function( $, _, Backbone ,menuTemplate,bloglistTemplate) {

    var AppView = Backbone.View.extend({

        el: '#todoapp',


        menuTemplate: _.template(menuTemplate),
        blogTemplate: _.template(bloglistTemplate),

        events: {

        },

        initialize: function() {

        },

        render: function() {

            this.getTags();
            this.getList();
        },
        getTags:function(){
            $("#sidebar").html(this.menuTemplate({}));
        },

        getList:function(){

            var that = this;
            $.getJSON('/article/index/date.json', function(data) {
                console.log(data);
                that.listRender(data);
            });

        },
        listRender:function(data){
            $("#J_blogList").html(this.blogTemplate({list:data}));

        }



    });

    return AppView;
});
