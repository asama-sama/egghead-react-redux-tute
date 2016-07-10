import React from 'react';
import VisibleTodoList from './VisibleTodoList';
import Footer from './Footer';
import AddTodo from './AddTodo';

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

module.exports = App;