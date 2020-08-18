const app = new Vue({
  el: '#app',
  data: {
    todos: [],
    todoInp: '',
  },
  methods: {
    addTodo: function() {
      if(this.todoInp !== '') {
        this.todos.push({
          id: this.todos.length + 1,
          name: this.todoInp,
          isDone: false
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
      this.todos = this.todos.map(todo => {
        if(todo.id === id) {
          todo.isDone = true;
        }
        return todo
      });
    },
    undo: function(id) {
      this.todos = this.todos.map(todo => {
        if(todo.id === id) {
          todo.isDone = false;
        }
        return todo
      });
    },
    clearTodos: function() {
      this.todos = [];
    }
  },
});