var todoViewModel =  function(){
    var self = this;
    self.todoItem = ko.observable();
    self.Action = ko.observable('A');

    self.addData = function() {
        if (self.Action() == 'A'){
            let todo={
                todoItem: self.
            }
        }
    }

}

$(document).ready(function(){
    ko.applyBindings(new todoViewModel(), document.getElementById('todoSection'));
})