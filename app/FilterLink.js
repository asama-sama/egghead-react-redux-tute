import React from 'react';
import Link from './Link';
import todoStore from 'store/todos';

export default class FilterLink extends React.Component {

  constructor(props) {
    super(props);
    this.store = todoStore;
  }

  componentDidMount() {
    this.unsubscribe = this.store.subscribe(() => {
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const props = this.props;
    const state = this.store.getState();

    return (
      <Link
        active={props.filter === state.visibilityFilter}
        onClick={() => 
          this.store.dispatch({
            type: 'SET_VISIBILITY_FILTER',
            filter: props.filter
          })
        }
      >
        {props.children}
      </Link>
    );
  }

}