import React from 'react';
import FilterLink from './FilterLink'

const Footer = ({visibilityFilter, onFilterClick}) => (
  <p>
    <FilterLink
      onClick={() => onFilterClick('SHOW_ALL')}
      currentFilter={visibilityFilter === 'SHOW_ALL'}
    >
    All
    </FilterLink>
    <FilterLink
      onClick={() => onFilterClick('SHOW_ACTIVE')}
      currentFilter={visibilityFilter === 'SHOW_ACTIVE'}
    >
    Active
    </FilterLink>
    <FilterLink
      onClick={() => onFilterClick('SHOW_COMPLETED')}
      currentFilter={visibilityFilter === 'SHOW_COMPLETED'}
    >
    Completed
    </FilterLink>
  </p>
);

module.exports = Footer;