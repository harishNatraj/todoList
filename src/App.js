import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="search-bar">
          <SearchBar />
        </div>
      </div>
    )
  }
}

export default App;
