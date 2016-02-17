"use strict";

var ViewModel = function(){
    var self = this;

    self.Views = ko.observableArray();
    self.CurrentView = ko.observable(null);
    self.UpdateView = function(selectedView){
        self.CurrentView(selectedView);
    };

    self.Initialize = function(){
        self.Views.push("Home");
        self.Views.push("Career");
        self.Views.push("Hero");
        self.Views.push("Item");
        self.CurrentView("Home");
    };
};