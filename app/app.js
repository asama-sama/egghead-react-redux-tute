import React from 'react';
import ReactDom from 'react-dom';
import todoStore, {getVisibleTodos} from 'store/todos';
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

  addTodo(text) {
    todoStore.dispatch({
      type: 'ADD_TODO',
      text,
      id: this.nextTodoId++
    });
  }

  updateNewTodo(newTodo) {
    this.setState({newTodo});
  }

  componentDidMount() {
    todoStore.subscribe(() => this.forceUpdate());
  }

  render() {
    return (
      <div>
        <AddTodo
          addTodo={(e) => this.addTodo(e)}
          updateNewTodo={val => this.updateNewTodo(val)}
          newTodo={this.state.newTodo}
        />
        <VisibleTodoList />
        <Footer />
      </div>
    );
  }

}