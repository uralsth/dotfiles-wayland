var employeeViewModel =  function(){
    var self = this;
    self.name = ko.observable();
    self.
}

$(document).ready(function(){
    ko.applyBindings(new employeeViewModel(), document.getElementById('employeeSection'));
})