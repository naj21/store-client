import React, { Component } from 'react';
import {Provider} from 'react-redux';
import store from './reducers/store';
import './App.css';
import Main from './components/main.js';
import FlashMessageList from './components/flash/FlashMessagesList';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Main/>
          <FlashMessageList/>
        </div>
      </Provider>
    );
  }
}

export default App;
