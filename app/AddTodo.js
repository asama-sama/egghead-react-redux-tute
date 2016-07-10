import React from 'react';
import store from 'store/todos';

export default class AddTodo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {newTodo: ''};
    this.nextTodoId = 0;
  }

  addTodo(text) {
    store.dispatch({
      type: 'ADD_TODO',
      text,
      id: this.nextTodoId++
    });
  }

  updateNewTodo(newTodo) {
    this.setState({newTodo});
  }

  render() {
    return (
      <div>
        <input value={this.state.newTodo} onChange={e => this.updateNewTodo(e.target.value)}/>
        <button onClick={() => {
          this.addTodo(this.state.newTodo);
          this.updateNewTodo('');
        }}>
          Add Todos
        </button>
      </div>
    );
  }
}
