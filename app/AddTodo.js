import React from 'react';

const AddTodo = ({updateNewTodo, addTodo, newTodo}) => (
  <div>
    <input value={newTodo} onChange={e => updateNewTodo(e.target.value)}/>
    <button onClick={() => {
      addTodo(newTodo);
      updateNewTodo('');
    }}>
    Add Todos
    </button>
  </div>
)

module.exports = AddTodo;