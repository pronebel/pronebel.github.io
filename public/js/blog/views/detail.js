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

        render: function() {

            var that = this;
            $.get('/article/data/'+this.file, function(data) {
                that.$el.html(data);
            });
        }



    });

    return AppView;
});
