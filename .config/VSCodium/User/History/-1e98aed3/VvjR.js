var todoViewModel =  function(){
    var self = this;
    self.todoItem = ko.observable();
    self.Action = ko.observable();

    self.addData = function() {
        if self.Action
    }

}

$(document).ready(function(){
    ko.applyBindings(new todoViewModel(), document.getElementById('todoSection'));
})