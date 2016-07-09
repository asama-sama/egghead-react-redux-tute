import React from 'react';

const FilterLink = ({currentFilter, children, filter, onClick}) => {

  if(currentFilter) {
    return <span>{children}</span>
  }
  return (
    <a href='#'
      onClick={e => {
        e.preventDefault();
        onClick(filter);
      }} >
      {children}
    </a>
  );

};

module.exports = FilterLink;