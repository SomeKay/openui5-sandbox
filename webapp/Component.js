sap.ui.define(
    ['sap/ui/core/UIComponent', 'sap/ui/model/json/JSONModel'],
    function(UIComponent, JSONModel) {
        'use strict';

        return UIComponent.extend('sap.ui.bojzi.learning.Component', {
            metadata: {
                manifest: 'json'
            },
            init: function() {
                UIComponent.prototype.init.apply(this, arguments);

                var oData = {
                    calculator: {
                        first: 0,
                        second: 0
                    }
                };
                var oModel = new JSONModel(oData);
                this.setModel(oModel);
            }
        });
    }
);
