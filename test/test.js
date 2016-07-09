import {expect} from 'chai';

import todos from '../app/store/todos';

describe('TodosStore', () => {

  describe('addTodos', () => {
    
    it('should add a todo', () => {
      const stateBefore = [];
      const action = {
        type: 'ADD_TODO',
        id: 0,
        text: 'learn redux'
      }
      const stateAfter = [
        {
          id: 0,
          text: 'learn redux',
          completed: false
        }
      ];
      todos.dispatch(action);

      expect(
        todos.getState().todos
      ).to.eql(stateAfter);
    });

    it('should toggle a todo', () => {
      const action = {
        type: 'TOGGLE_TODO',
        id: 0,
      };
      const stateAfter = [
        {
          id: 0,
          text: 'learn redux',
          completed: true
        }
      ];

      todos.dispatch(action);
      expect(
        todos.getState().todos
      ).to.eql(stateAfter);
    });

  });


})