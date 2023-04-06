var todoViewModel =  function(){
    var self = this;
    self.todoList = ko.observable();
    self.todoItem = ko.observable();
    self.Action = ko.observable('A');

    self.addData = function() {
        if (self.Action() == 'A'){
            let todo={
                todoItem: self.todoItem;
            }
            s
        }
    }

}

$(document).ready(function(){
    ko.applyBindings(new todoViewModel(), document.getElementById('todoSection'));
})