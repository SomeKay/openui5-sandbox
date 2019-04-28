sap.ui.define(
    [
        'sap/ui/core/mvc/Controller',
        'sap/ui/model/json/JSONModel',
        '../model/formatter',
        'sap/ui/model/Filter',
        'sap/ui/model/FilterOperator'
    ],
    function(Controller, JSONModel, formatter, Filter, FilterOperator) {
        'use strict';

        return Controller.extend(
            'sap.ui.bojzi.learning.controller.SuperheroList',
            {
                formatter: formatter,

                onInit: function() {
                    var oViewModel = new JSONModel({
                        strength: 'Gigawatts'
                    });
                    this.getView().setModel(oViewModel, 'view');
                },

                onFilterSuperheroes: function(oEvent) {
                    var aFilter = [];
                    var sQuery = oEvent.getParameter('query');
                    if (sQuery) {
                        aFilter.push(
                            new Filter('Name', FilterOperator.Contains, sQuery)
                        );
                    }

                    var oList = this.byId('superheroList');
                    var oBinding = oList.getBinding('items');
                    oBinding.filter(aFilter);
                }
            }
        );
    }
);
