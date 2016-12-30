import React, { Component } from 'react';
import SearchPage from './SearchPage';
import ResultPage from './ResultPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'searchPage',
      location: null,
      address: null,
      distance: 25,
      price: '4',
      searchTerm: null,
      query: null,
      results: [],
      randomResult: null
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.geoLocate = this.geoLocate.bind(this)
    this.newSearch = this.newSearch.bind(this)
    this.newResult = this.newResult.bind(this)
  }

  geoLocate() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) =>{
        let location = `${position.coords.latitude},${position.coords.longitude}`
        this.setState({ location: location });
      });
    }
  }

  handleSubmit(event){
    event.preventDefault();
    $.ajax({
      url: '/api',
      dataType: 'json',
      data: {term: this.state.searchTerm,
             ll: this.state.location,
             address: document.getElementById('location-input').value,
             radius: this.state.distance,
             price: this.state.price}
    }).done((data) => {
      this.setState({view: 'resultPage',
                    results: data.businesses,
                    randomResult: data.businesses[Math.floor(Math.random() * data.businesses.length)]});
    })
  }

  handleBlur(event){
    let nextState={}
    nextState[event.target.name] = event.target.value
    this.setState(nextState)
  }

  handleChange(event){
    let nextState={}
    nextState[event.target.name] = event.target.value
    this.setState(nextState)
  }

  newSearch() {
    this.setState({view: 'searchPage',
                  address: null,
                  price: '4',
                  distance: 25,
                  searchTerm: null});
  }

  newResult() {
    this.setState({randomResult: this.state.results[Math.floor(Math.random() * this.state.results.length)]})
  }

  componentDidMount() {
    this.geoLocate();
  }

  render() {
    let view;
    if(this.state.view == 'searchPage'){
      view = <SearchPage
              distance={this.state.distance}
              handleChange={this.handleChange}
              handleBlur={this.handleBlur}
              handleSubmit={this.handleSubmit}
              location={this.state.location}
            />;
    } else if (this.state.view == 'resultPage') {
      view = <ResultPage
              newSearch={this.newSearch}
              newResult={this.newResult}
              randomResult={this.state.randomResult}/>;
    }
    console.log(this.state);
    return (
      <div className='small-12 columns'>
        {view}
      </div>
    );
  };
}

export default App;
