import React from 'react';
import ComA from './pages/ComA';
import ComB from './pages/ComB';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (<Provider store={store}>
    <div className="App">
      <ComA />
      <ComB />
    </div>
  </Provider>);
}

export default App;
