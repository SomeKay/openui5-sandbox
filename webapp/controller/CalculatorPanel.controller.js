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

                var sResult = String(Number(sFirst) + Number(sSecond));
                oModel.setProperty('/calculator/result', sResult);

                this.getOwnerComponent().openCalculatorResultDialog();
            }
        }
    );
});
