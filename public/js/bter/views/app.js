define([
    'jquery',
    'underscore',
    'backbone'

], function( $, _, Backbone ) {



    var LatestNew = Backbone.View.extend({
        tagName:"div",


        render:function(){

        },
        getData:function(){
            https://bter.com/api/1/ticker/ftc_cny
        }


    })




    var AppView = Backbone.View.extend({

        el: '#J_bterArea',



        events: {

        },

        initialize: function() {

        },

        render: function() {

            this.getTags();
            this.getList();
        },

        getList:function(){

            var that = this;
            $.getJSON('/article/index/date.json', function(data) {
                console.log(data);
                that.listRender(data);
            });

        }



    });

    return AppView;
});
