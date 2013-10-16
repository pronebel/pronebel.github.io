define(['jquery',
    'underscore',
    'backbone'],
    function($,_,Backbone){
        return {
            Page : Backbone.Router.extend({
                routes: {
                    "jump/:page":"jump",
                    "index/":"index"

                },

                index : function() {
                    require(["app/noauth"],function(noauth){
                        noauth.render();
                    });
                }
            })
        }


    });