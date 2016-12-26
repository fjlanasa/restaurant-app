import React, { Component } from 'react';
import SearchPage from './SearchPage';
import ResultPage from './ResultPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: null,
      distance: 25,
      price: null,
      searchTerm: null,
      query: null
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.geoLocate = this.geoLocate.bind(this)
    this.test = this.test.bind(this);
  }

  test(position){
    console.log(position);
  }

  geoLocate() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) =>{
        this.setState({location: `${position.coords.latitude}, ${position.coords.longitude}`});
      });
    }
  }

  handleSubmit(event){
    event.preventDefault();
    alert('submit!');
  }

  handleChange(event){
    let nextState={}
    nextState[event.target.name] = event.target.value
    this.setState(nextState)
  }

  componentDidMount() {
    this.geoLocate();
  }

  render() {
    console.log(this.state);
    return (
      <SearchPage
        distance={this.state.distance}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  };
}

export default App;
