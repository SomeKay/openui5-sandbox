sap.ui.define(['sap/ui/base/ManagedObject', 'sap/ui/core/Fragment'], function(
    ManagedObject,
    Fragment
) {
    'use strict';

    return ManagedObject.extend(
        'sap.ui.bojzi.learning.controller.CalculatorResultDialog',
        {
            constructor: function(oView) {
                this._oView = oView;
            },

            exit: function() {
                delete this._oView;
            },

            open: function() {
                var oView = this._oView;
                var sCalculatorDialogId = 'calculatorResultDialog';

                if (!oView.byId(sCalculatorDialogId)) {
                    var oFragmentController = {
                        onCloseDialog: function() {
                            oView.byId(sCalculatorDialogId).close();
                        }
                    };

                    Fragment.load({
                        id: oView.getId(),
                        name:
                            'sap.ui.bojzi.learning.view.CalculatorResultDialog',
                        controller: oFragmentController
                    }).then(function(oDialog) {
                        oView.addDependent(oDialog);
                        oDialog.open();
                    });
                } else {
                    oView.byId(sCalculatorDialogId).open();
                }
            }
        }
    );
});
