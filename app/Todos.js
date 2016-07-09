import React from 'react';

export default class Todos extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <input ref={node => this.input = node} />
        <button onClick={() => {
          this.props.addTodo(this.input.value);
          this.input.value='';
        }}>
        Add Todos
        </button>
        <ul>
          {this.props.todos.map(todo => {
            return (
              <li 
                key={todo.id}
                onClick={() => {
                  this.props.toggle(todo.id);
                }}
                style={{textDecoration: todo.completed? 'line-through': 'none'}}>
                {todo.text}
              </li>)
          })}
        </ul>
      </div>
    );
  }
}