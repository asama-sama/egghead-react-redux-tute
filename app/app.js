import React from 'react';
import ReactDom from 'react-dom';
import todoStore, {getVisibleTodos} from 'store/todos';
import Todos from './Todos';
import Footer from './Footer';

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

  toggleTodo(id) {
    todoStore.dispatch({
      type: 'TOGGLE_TODO',
      id
    });
  }

  componentDidMount() {
    todoStore.subscribe(() => this.forceUpdate());
  }

  render() {
    const {
      todos,
      visibilityFilter
    } = todoStore.getState();

    const visibleTodos = getVisibleTodos(
      todos,
      visibilityFilter
    );
    return (
      <div>
        <Todos 
          addTodo={(e) => this.addTodo(e)}
          newTodo={this.state.newTodo}
          updateNewTodo={val => this.updateNewTodo(val)}
          toggle={(id) => this.toggleTodo(id)} 
          todos={visibleTodos}
        />
        <Footer />
      </div>
    );
  }

}