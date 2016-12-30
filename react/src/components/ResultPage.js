import React, { Component } from 'react';

function ResultPage(props){
  let img = props.randomResult.image_url;
  console.log(props.randomResult);
  return(
    <div className='small-12 columns'>
      <p>{props.randomResult.name}</p>
      <img src={img} />
      <a className='button' onClick={props.newSearch}>New Search</a>
      <a className='button' onClick={props.newResult}>New Result</a>
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
