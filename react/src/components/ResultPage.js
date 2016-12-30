import React, { Component } from 'react';

function ResultPage(props){
  let previous = <div></div>;
  let next = <div></div>;
  if(props.index !== 0) {
    previous = <i className="fa fa-chevron-circle-left" aria-hidden="true" onClick={props.previousClick}></i>
  }
  if(props.index !== props.length - 1) {
    next = <i className="fa fa-chevron-circle-right" aria-hidden="true" onClick={props.nextClick}></i>
  }
  return(
    <div className='small-12 columns' id='result'>
      <div className='result-buttons'>
        {previous}
        <div className='result-info'>
          <p>{props.randomResult.name}</p>
        </div>
        {next}
      </div>
      <div>
        <a className='button' onClick={props.newSearch}>New Search</a>
      </div>
    </div>
  );
}

// class ResultPage extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       randomResult: null
//     }
//   }
//
//   componentDidMount() {
//     this.setState({randomResult: this.props.results[Math.floor(Math.random() * this.props.results.length)]})
//   }
//
//   render() {
//     let img;
//     if (this.state.randomResult) {
//       img = this.state.randomResult.image_url
//     }
//     return(
//       <div className='small-12 columns'>
//         <img src={img} />
//         <a className='button' onClick={this.props.newSearch}>New Search</a>
//       </div>
//     );
//   }
// }

export default ResultPage;
