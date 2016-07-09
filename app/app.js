import React from 'react';
import ReactDom from 'react-dom';
import todoStore, {getVisibleTodos} from 'store/todos';
import Todos from './Todos';
import Footer from './Footer';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.nextTodoId = 0;
  }

  addTodo(text) {
    todoStore.dispatch({
      type: 'ADD_TODO',
      text,
      id: this.nextTodoId++
    });
  }

  toggleTodo(id) {
    console.log(id);
    todoStore.dispatch({
      type: 'TOGGLE_TODO',
      id
    });
  }

  setFilter(filter) {
    todoStore.dispatch({
      type: 'SET_VISIBILITY_FILTER',
      filter
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
          toggle={(id) => this.toggleTodo(id)} 
          todos={visibleTodos}
        />
        <Footer 
          onFilterClick={(filter) => this.setFilter(filter)}
          visibilityFilter={visibilityFilter}
        />
      </div>
    );
  }

}