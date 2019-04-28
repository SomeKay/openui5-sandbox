sap.ui.define(
    [
        'sap/ui/core/UIComponent',
        'sap/ui/model/json/JSONModel',
        './controller/CalculatorResultDialog'
    ],
    function(UIComponent, JSONModel, CalculatorResultDialog) {
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

                this._calculatorResultDialog = new CalculatorResultDialog(
                    this.getRootControl()
                );
            },

            exit: function() {
                this._calculatorResultDialog.destroy();
                delete this._calculatorResultDialog;
            },

            openCalculatorResultDialog: function() {
                this._calculatorResultDialog.open();
            }
        });
    }
);
