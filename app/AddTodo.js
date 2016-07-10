import React from 'react';

export default class AddTodo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {newTodo: ''};
    this.nextTodoId = 0;
  }

  addTodo(text) {
    const { store } = this.context;
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
    const { store } = this.context;
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

AddTodo.contextTypes = {
  store: React.PropTypes.object
};
