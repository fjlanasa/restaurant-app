import React, { Component } from 'react';
import Slider from 'react-rangeslider';

class SearchPage extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
      if(document.getElementById('location-input') != null){
        let siteAutocomplete = new google.maps.places.Autocomplete(
          document.getElementById('location-input'));
      }
  }

  render(){
    let location;
    if(this.props.location !== null) {
      location = <input
                  type='text'
                  id='location-input'
                  className='current-location'
                  name='address'
                  onBlur={this.props.handleChange}
                  onChange={this.props.handleChange}
                  placeholder= "&#xf041;   Current Location"
                  charSet="utf-8"
                />
    } else {
      location = <input
                  type='text'
                  id='location-input'
                  name='address'
                  onBlur={this.props.handleChange}
                  onChange={this.props.handleChange}
                  placeholder= 'Enter a Location'
                  charSet="utf-8"
                  required
                />
    }
    return (
      <div className='small-12 columns'>
        <form className='search-form' onSubmit={this.props.handleSubmit}>
          {location}
          <p>Distance: {this.props.distance}</p>
          <input type='range' name='distance' onChange={this.props.handleChange} min={1} max={25} defaultValue={this.props.distance} />
          <div>
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
          <input type='text' name='searchTerm' onChange={this.props.handleChange} placeholder='Search Query' />
          <input type='submit'/>
        </form>
      </div>
    );
  }
}

export default SearchPage;
