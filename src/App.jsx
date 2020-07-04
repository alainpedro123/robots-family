import React, { Component } from 'react';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import http from './services/httpService';
import config from './config.json';

class App extends Component {
  state = {
    robots: [],
    searchfield: ''
  }

  async componentDidMount() {
    const { data: users } = await http.get(config.url)
    this.setState({ robots: users });
  }

  searchingChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }
  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !robots.length ? <h1>Loading...</h1> :
      (
        <div className="app">
          <h1 className="header">Robot friends</h1>
          <SearchBox searchChange={this.searchingChange} />
          <CardList robots={filteredRobots} />
        </div>
      )
  }
}

export default App;