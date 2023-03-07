import React from 'react';
import axios from 'axios';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.css';
import Main from './Main';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchInput: '',
      cityName: '',
      latitude: 0,
      longitude: 0,
      errorMessage: '',
      cityMapUrl: '',
    }
  }

  handleSearchInput = (e) => {
    this.setState({
      searchInput: e.target.value
    });
  }

  searchSubmit = async (e) => {
    e.preventDefault();

    try {
      let cityData = await axios.get(`https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.searchInput}&format=json`);

      this.setState({
        cityName: cityData.data[0].cityName,
        latitude: cityData.data[0].lat,
        longitude: cityData.data[0].lon,
        cityMapUrl: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${cityData.data[0].lat},${cityData.data[0].lon}&zoom=13`,
        errorMessage: '',
      });

    } catch (error) {
      this.setState({
        cityName: '',
        latitude: '',
        longitude: '',
        cityMapUrl: '',
        errorMessage: error.message,
      });
    }
  }

  render() {
    return (
      <>
        <Header
          searchSubmit={this.searchSubmit}
          searchInput={this.handleSearchInput}
        />
        <Main
          data={this.state}
        />
      </>
    );
  }
}

export default App;
