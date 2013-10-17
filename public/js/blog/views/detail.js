define([
    'jquery',
    'underscore',
    'backbone',
    'text!blog/templates/detail.html'

], function( $, _, Backbone ,detailTemplate) {

    var AppView = Backbone.View.extend({

        el: '#J_blogDetail',


        detailTemplate: _.template(detailTemplate),

        events: {

        },

        initialize: function() {

        },

        render: function(file) {

            var that = this;
            console.log(file);
            $.get('/article/data/'+file, function(data) {
                that.$el.html(that.detailTemplate({
                    article:data,
                    file:file
                }));
            });
        }



    });

    return AppView;
});
