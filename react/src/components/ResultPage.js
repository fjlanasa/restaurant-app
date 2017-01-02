import React, { Component } from 'react';

function ResultPage(props){
  let previous = <div></div>;
  let next = <div></div>;
  if(props.index !== 0) {
    previous = <i className="fa fa-chevron-circle-left fa-2x" aria-hidden="true" onClick={props.previousClick}></i>
  }
  if(props.index !== props.length - 1) {
    next = <i className="fa fa-chevron-circle-right fa-2x" aria-hidden="true" onClick={props.nextClick}></i>
  }
  return(
    <div className='small-12 columns' id='result'>
      <div className='result-buttons'>
        {previous}
        <div className='result-info'>
          <p>{props.randomResult.name}</p>
          {/* <iframe
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyD9mAlxkvAm5qO4TCibWRieqEfzlbBeAew
              &q=Space+Needle,Seattle+WA">
          ></iframe> */}
          <div className='yelp-link'>
            <a href={props.randomResult.url} target='_blank'>
              <i className="fa fa-yelp fa-2x" aria-hidden="true"></i>
              Check it out on Yelp!
            </a>
          </div>
        </div>
        {next}
      </div>
      <div>
        <a className='button' onClick={props.newSearch}>New Search</a>
      </div>
    </div>
  );
}

export default ResultPage;
