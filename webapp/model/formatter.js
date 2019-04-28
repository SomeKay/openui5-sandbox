sap.ui.define([], function() {
    'use strict';
    return {
        statusText: function(sStatus) {
            var resourceBundle = this.getView()
                .getModel('i18n')
                .getResourceBundle();
            switch (sStatus) {
                case 'A':
                    return resourceBundle.getText('superheroStatusFullyActive');
                case 'B':
                    return resourceBundle.getText('superheroStatusInTraining');
                default:
                    return sStatus;
            }
        }
    };
});
