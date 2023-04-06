var todoViewModel =  function(){
    var self = this;
    self.todoItem = ko.observable();
}

$(document).ready(function(){
    ko.applyBindings(new todoViewModel(), document.getElementById('todoSection'));
})