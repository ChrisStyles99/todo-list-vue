const app = new Vue({
  el: '#app',
  data: {
    todos: [],
    todoInp: '',
    editData: ''
  },
  methods: {
    addTodo: function() {
      if(this.todoInp !== '') {
        this.todos.push({
          id: new Date(),
          name: this.todoInp,
          isDone: false,
          edit: false
        });
        this.todoInp = '';
      } else {
        alert('Please fill the input');
      }
    },
    deleteTodo: function(id) {
      this.todos.splice(id, 1);
    },
    done: function(id) {
      this.todos.forEach(todo => {
        if(todo.id === id) {
          todo.isDone = true;
        }
      });
    },
    undo: function(id) {
      this.todos.forEach(todo => {
        if(todo.id === id) {
          todo.isDone = false;
        }
      })
    },
    clearTodos: function() {
      this.todos = [];
    },
    editTodo: function(id) {
      this.todos.forEach(todo => {
        if(todo.id === id) {
          todo.edit = true;
        }
      });
    },
    saveEditedTodo: function(id) {
      this.todos.forEach(todo => {
        if(todo.id === id) {
          todo.name = todo.name;
          todo.edit = false;
        }
      })
    }
  },
});