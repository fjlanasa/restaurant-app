import React, { Component } from 'react';

function NoResultsPage(props){
  return (
    <div className='no-results'>
      <h3>Sorry, that search produced no results</h3>
      <div>
        <a className='button' onClick={props.newSearch}>New Search</a>
      </div>
    </div>
  );
}

export default NoResultsPage;
