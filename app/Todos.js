import React from 'react';

const Todos = ({todos, onTodoClick}) => (
  <div>
    <ul>
      {todos.map(todo => {
        return (
          <li
            key={todo.id}
            onClick={() => {
              onTodoClick(todo.id);
            }}
            style={{textDecoration: todo.completed? 'line-through': 'none'}}>
            {todo.text}
          </li>)
      })}
    </ul>
  </div>
);

module.exports = Todos;