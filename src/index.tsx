import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import * as serviceWorker from './serviceWorker';
import { MirageServer } from './Server/MirageServer'
import { Provider } from 'react-redux';
import { ShoeStore } from './Reducer/Store'
import { BrowserRouter as Router } from 'react-router-dom'


MirageServer({ environment: 'development' })

ReactDOM.render(
  <React.StrictMode>

    <Provider store={ShoeStore}>
      <Router>
        <App />
      </Router>
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
