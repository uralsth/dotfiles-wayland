var employeeViewModel =  function(){
    var self = this;
    self.name = ko.observable();
}

$(document).ready(function(){
    ko.applyBindings(new employeeViewModel(), document.getElementById('employeeSection'));
})