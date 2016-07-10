import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from 'actions/actions';

class AddTodo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {newTodo: ''};
  }

  updateNewTodo(newTodo) {
    this.setState({newTodo});
  }

  render() {
    const { dispatch } = this.props;
    return (
      <div>
        <input value={this.state.newTodo} onChange={e => this.updateNewTodo(e.target.value)}/>
        <button onClick={() => {
          dispatch(addTodo(this.state.newTodo));
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
