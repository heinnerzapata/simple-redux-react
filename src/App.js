import React, { Component } from 'react';
import logo from './logo.svg';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './App.css';
import ShowComponent from './ShowComponent.js';

const initialState = {
  count : 0
};

const counterReducer = (state = initialState , action) => {
  switch(action.type){
    case 'INCREMENT' :
      return {
        count : state.count + 1
      }
    case 'DECREMENT' :
      return {
        count : state.count - 1
      }
    default:
      return state;
  }
}

const store = createStore(counterReducer);
store.subscribe(() => console.log(store.getState()));

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <ShowComponent />
        </Provider>
      </div>
    );
  }
}

export default App;
