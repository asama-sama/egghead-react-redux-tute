import React from 'react';
import TodoList from './TodoList';
import Footer from './Footer';
import AddTodo from './AddTodo';

const App = () => (
  <div>
    <AddTodo />
    <TodoList />
    <Footer />
  </div>
);

module.exports = App;