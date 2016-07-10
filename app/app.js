import React from 'react';
import VisibleTodoList from './VisibleTodoList';
import Footer from './Footer';
import AddTodo from './AddTodo';

const App = ({store}) => (
  <div>
    <AddTodo store={store}/>
    <VisibleTodoList store={store}/>
    <Footer store={store}/>
  </div>
);

module.exports = App;