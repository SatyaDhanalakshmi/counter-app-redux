import React from 'react';
import store from './Redux/store';
import {Provider} from 'react-redux';
import Counter from './Redux/Counter.jsx';

function App() {
  

  return (
    <Provider store={store}>
       <Counter/>
    </Provider>
  )
}

export default App
