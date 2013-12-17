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

                }


            })
        }


    });