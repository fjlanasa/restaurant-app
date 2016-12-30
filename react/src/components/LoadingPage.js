import React from 'react';

function LoadingPage(props) {
  return (
    <div className='loading'>
      <h1>Finding your results</h1>
      <i className="fa fa-spinner fa-spin fa-5x" aria-hidden="true"></i>
    </div>
  );
}

export default LoadingPage;
