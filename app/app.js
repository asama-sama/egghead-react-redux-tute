import React from 'react';
import ReactDom from 'react-dom';
import VisibleTodoList from './VisibleTodoList';
import Footer from './Footer';
import AddTodo from './AddTodo';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.nextTodoId = 0;
    this.state = {
      newTodo: ''
    }
  }

  render() {
    return (
      <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    );
  }

}