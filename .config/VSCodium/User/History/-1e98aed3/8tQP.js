function todo(data){
    self.todoItem = data.todoItem;
}


var todoViewModel =  function(){
    var self = this;
    self.todoList = ko.observableArray();
    self.todoItem = ko.observable();
    self.Action = ko.observable('A');

    self.selectedUser=ko.observable();

    self.addData = function() {
        if (self.Action() == 'A'){
            let data={
                todoItem: self.todoItem()
            }
            self.todoList.push(new todo(data));
            self.clearTodoInput();
        }
        else if(self.Action()=='E')
        {
            self.selectedUser().todoItem(self.todoItem());
            self.Action('A');
            self.clearTodoInput();
        }
    }

    self.clearTodoInput = function(){
        self.todoItem(null);
    }
    self.deleteTodo =  function(data){
        self.todoList.remove(data);
    }

    self.selectRow = function(data){
        self.selectedUser(data);
        self.todoItem(data.todoItem());
        self.Action('E');
    }
}


$(document).ready(function(){
    ko.applyBindings(new todoViewModel(), document.getElementById('todoSection'));
})