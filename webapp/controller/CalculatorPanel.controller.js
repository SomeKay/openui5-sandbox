const calculatorResultDialogId = 'calculatorResultDialog';

sap.ui.define(['sap/ui/core/mvc/Controller', 'sap/ui/core/Fragment'], function(
    Controller,
    Fragment
) {
    'use strict';

    return Controller.extend(
        'sap.ui.bojzi.learning.controller.CalculatorPanel',
        {
            onCalculate: function() {
                var oView = this.getView();
                var oModel = oView.getModel();

                var sFirst = oModel.getProperty('/calculator/first');
                var sSecond = oModel.getProperty('/calculator/second');

                var result = String(Number(sFirst) + Number(sSecond));
                oModel.setProperty('/calculator/result', result);

                var calculatorResultDialog = this.byId(
                    calculatorResultDialogId
                );
                if (!calculatorResultDialog) {
                    Fragment.load({
                        id: oView.getId(),
                        name:
                            'sap.ui.bojzi.learning.view.CalculatorResultDialog',
                        controller: this
                    }).then(function(oDialog) {
                        oView.addDependent(oDialog);
                        oDialog.open();
                    });
                } else {
                    calculatorResultDialog.open();
                }
            },
            onCloseDialog: function() {
                this.byId(calculatorResultDialogId).close();
            }
        }
    );
});
