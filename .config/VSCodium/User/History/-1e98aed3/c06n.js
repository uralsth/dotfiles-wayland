var todoViewModel =  function(){
    var self = this;
    self. = ko.observable();
}

$(document).ready(function(){
    ko.applyBindings(new todoViewModel(), document.getElementById(''));
})