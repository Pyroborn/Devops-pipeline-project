<!-- App.vue -->
<template>
  <div id="app">
    <h1 class="title">To Do List</h1>
    <div class="input-container">
      <input data-testid="taskInput" type="text" v-model="newTodo" class="input-field" placeholder="Enter a new task">
      <button data-testid="taskButton" @click="addTodo" class="add-button">Add</button>
    </div>
    <ul data-testid="taskList" class="todo-list">
      <li v-for="todo in reversedTodos" 
          :key="todo.id" 
          :id="todo.id" 
          @click="toggleCompleted(todo)" 
          :class="{ completed: todo.marked }" 
          class="todo-item">
        <span :class="{ completed: todo.marked }" class="todo-text">{{ todo.description }}</span>
        <button @click.stop="deleteTodo(todo)" class="delete-button">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodo: '',
      todos: [],
      nextId: 1
    };
  },
  created() {
    this.loadTodos();
  },
  computed: {
    reversedTodos() {
      return [...this.todos].reverse();
    }
  },
  methods: {
    loadTodos() {
      const savedTodos = localStorage.getItem('todos');
      const savedNextId = localStorage.getItem('nextId');
      this.todos = savedTodos ? JSON.parse(savedTodos) : [];
      this.nextId = savedNextId ? parseInt(savedNextId) : 1;
    },
    saveTodos() {
      localStorage.setItem('todos', JSON.stringify(this.todos));
      localStorage.setItem('nextId', this.nextId.toString());
    },
    addTodo() {
      if (this.newTodo.trim() !== '') {
        const todo = {
          id: this.nextId++,
          description: this.newTodo,
          marked: false
        };
        this.todos.push(todo);
        this.newTodo = '';
        this.saveTodos();
      }
    },
    toggleCompleted(todo) {
      todo.marked = !todo.marked;
      this.saveTodos();
    },
    deleteTodo(todo) {
      this.todos = this.todos.filter(t => t.id !== todo.id);
      this.saveTodos();
    }
  }
};
</script>


<style>
body {
  font-family: Arial, sans-serif;
  color: #fff;
}

.title {
  text-align: center;
  margin-bottom: 20px;
}

.input-container {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.input-field {
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.add-button {
  margin-left: 10px;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.add-button:hover {
  background-color: #0056b3;
}

.todo-list {
  list-style-type: none;
  padding: 0;
  border-radius: 8px;
}

.todo-item {
  display: flex;
  align-items: center;
  background: #404040;
  padding: 0.5rem;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
  cursor: pointer;
}

.completed{
  background: #186b2d;
}

.todo-text {
  flex: 1;
}

.todo-text.completed {
  text-decoration: line-through;
}

.delete-button {
  padding: 5px 10px;
  background-color: #dc3545;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.delete-button:hover {
  background-color: #c82333;
}
</style>
