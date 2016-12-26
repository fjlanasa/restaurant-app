import React, { Component } from 'react';
import Slider from 'react-rangeslider';

class SearchPage extends Component {
  
  render(){
    return (
      <div>
        <form className='search-form' onSubmit={this.props.handleSubmit}>
          <input type='text' name='searchTerm' onChange={this.props.handleChange} placeholder='Search Query'/>
          <p>Distance: {this.props.distance}</p>
          <input type='range' name='distance' onChange={this.props.handleChange} min={1} max={25} defaultValue={this.props.distance} />
          <div>
            <input type='radio' className='dollar' id='dollar-5' name='price' value="5" onChange={this.props.handleChange} />
            <label className='dollar' htmlFor='dollar-5'>
              <i className="fa fa-usd" aria-hidden="true"></i>
            </label>
            <input type='radio' className='dollar' id='dollar-4' name='price' value="4" onChange={this.props.handleChange} />
            <label className='dollar' htmlFor='dollar-4'>
              <i className="fa fa-usd" aria-hidden="true"></i>
            </label>
            <input type='radio' className='dollar' id='dollar-3' name='price' value="3" onChange={this.props.handleChange} />
            <label className='dollar' htmlFor='dollar-3'>
              <i className="fa fa-usd" aria-hidden="true"></i>
            </label>
            <input type='radio' className='dollar' id='dollar-2' name='price' value="2" onChange={this.props.handleChange} />
            <label className='dollar' htmlFor='dollar-2'>
              <i className="fa fa-usd" aria-hidden="true"></i>
            </label>
            <input type='radio' className='dollar' id='dollar-1' name='price' value="1" onChange={this.props.handleChange} />
            <label className='dollar' htmlFor='dollar-1'>
              <i className="fa fa-usd" aria-hidden="true"></i>
            </label>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchPage;
