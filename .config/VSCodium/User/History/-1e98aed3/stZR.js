var employeeViewModel =  function(){
    var self = this;
    self.name = ko.observable();
    self.address = ko.observable();
    self.email = ko.observable();
    self.phone = ko.observable();
    self.dob = ko.observable();
}

$(document).ready(function(){
    ko.applyBindings(new employeeViewModel(), document.getElementById('employeeSection'));
})