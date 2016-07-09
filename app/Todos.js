import React from 'react';

const Todos = ({todos, newTodo, updateNewTodo, addTodo, toggle}) => (
  <div>
    <input value={newTodo} onChange={e => updateNewTodo(e.target.value)}/>
    <button onClick={() => {
      addTodo(newTodo);
      updateNewTodo('');
    }}>
    Add Todos
    </button>
    <ul>
      {todos.map(todo => {
        return (
          <li
            key={todo.id}
            onClick={() => {
              toggle(todo.id);
            }}
            style={{textDecoration: todo.completed? 'line-through': 'none'}}>
            {todo.text}
          </li>)
      })}
    </ul>
  </div>
);

module.exports = Todos;