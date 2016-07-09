import React from 'react';
import FilterLink from './FilterLink'

const Footer = ({visibilityFilter, onFilterClick}) => (
  <p>
    <FilterLink
      onClick={(e) => onFilterClick(e)}
      currentFilter={visibilityFilter === 'SHOW_ALL'}
      filter='SHOW_ALL'
    >
    All
    </FilterLink>
    <FilterLink
      onClick={(e) => onFilterClick(e)}
      currentFilter={visibilityFilter === 'SHOW_ACTIVE'}
      filter='SHOW_ACTIVE'
    >
    Active
    </FilterLink>
    <FilterLink
      onClick={(e) => onFilterClick(e)}
      currentFilter={visibilityFilter === 'SHOW_COMPLETED'}
      filter='SHOW_COMPLETED'
    >
    Completed
    </FilterLink>
  </p>
);

module.exports = Footer;