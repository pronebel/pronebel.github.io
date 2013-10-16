define(['jquery',
    'underscore',
    'backbone'],
    function($,_,Backbone){
        return {
            Page : Backbone.Router.extend({
                routes: {
                    "detail/:file":"detail",
                    "index/":"index"

                },

                index : function() {

                },
                detail:function(file){
                    var DetailView = require("blog/views/detail");
                    var detailView = new DetailView();
                    detailView.file = file;
                    detailView.render();
                }

            })
        }


    });