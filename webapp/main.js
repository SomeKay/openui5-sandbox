sap.ui.define(['sap/ui/core/ComponentContainer'], function(ComponentContainer) {
    'use strict';

    new ComponentContainer({
        name: 'sap.ui.bojzi.learning',
        settings: {
            id: 'learning'
        },
        async: true
    }).placeAt('content');
});
