import React from 'react';
import { connect } from 'react-redux';

class AddTodo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {newTodo: ''};
    this.nextTodoId = 0;
  }

  addTodo(text) {
    const { dispatch } = this.props;
    dispatch({
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

// does not subscribe to store, just passes dispatch as prop
AddTodo = connect()(AddTodo);

export default AddTodo;
