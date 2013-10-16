define([
    'jquery',
    'underscore',
    'backbone',
    'text!blog/templates/menu.html'

], function( $, _, Backbone ,menuTemplate) {

    var AppView = Backbone.View.extend({

        el: '#todoapp',


        menuTempate: _.template(menuTemplate),

        events: {

        },

        initialize: function() {

        },

        render: function() {
              $("#sidebar").html(this.menuTempate({}));
        }



    });

    return AppView;
});
