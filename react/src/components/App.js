import React, { Component } from 'react';
import SearchPage from './SearchPage';
import ResultPage from './ResultPage';
import LoadingPage from './LoadingPage';
import NoResultsPage from './NoResultsPage'

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
      resultIndex: 0,
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.geoLocate = this.geoLocate.bind(this)
    this.newSearch = this.newSearch.bind(this)
    this.previousClick = this.previousClick.bind(this)
    this.nextClick = this.nextClick.bind(this)
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
    let location = this.state.location;
    let address = document.getElementById('location-input').value
    if(location || address.trim()){
      this.setState({view: 'loadingPage'});
      $.ajax({
        url: '/api',
        dataType: 'json',
        data: {term: this.state.searchTerm,
          ll: this.state.location,
          address: document.getElementById('location-input').value,
          radius: this.state.distance,
          price: this.state.price}
        }).done((data) => {
          if(data.length !== 0){
            this.setState({view: 'resultPage',
            results: data
          });
        } else {
          this.setState({view: 'noResultsPage'});
        }
      });
    } else {
      toastr.error('Must supply a location');
    }
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
                  searchTerm: null,
                  results: [],
                  resultIndex: 0});
  }

  previousClick() {
    let currentIndex = this.state.resultIndex;
    this.setState({resultIndex: currentIndex - 1});
  }

  nextClick() {
    let currentIndex = this.state.resultIndex;
    this.setState({resultIndex: currentIndex + 1});
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
              index={this.state.resultIndex}
              length={this.state.results.length}
              randomResult={this.state.results[this.state.resultIndex]}
              previousClick={this.previousClick}
              nextClick={this.nextClick}
            />;
    } else if (this.state.view == 'loadingPage') {
      view = <LoadingPage />;
    } else if (this.state.view == 'noResultsPage') {
      view = <NoResultsPage newSearch={this.newSearch} />
    }
    return (
      <div className='small-12 columns'>
        {view}
      </div>
    );
  };
}

export default App;
