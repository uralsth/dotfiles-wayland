function todo(data){
    self.todoItem = data.todoItem;
}


var todoViewModel =  function(){
    var self = this;
    self.todoList = ko.observableArray();
    self.todoItem = ko.observable();
    self.Action = ko.observable('A');

    self.addData = function() {
        // if (self.Action() == 'A'){
            let data={
                todoItem: self.todoItem
                
            }
            self.todoList.push(new todo(data));
            self.clearTodoInput();
        // }
    }

    function clearTodoInput(){
        self.todoItem(null);
    }
}


$(document).ready(function(){
    ko.applyBindings(new todoViewModel(), document.getElementById('todoSection'));
})