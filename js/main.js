var model = new ViewModel();

$(document).ready(function(){
    model.Initialize();
    ko.applyBindings(model, document.getElementById("contentContainer"));
});