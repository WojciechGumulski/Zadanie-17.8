import { AppContainer } from 'react-hot-loader';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';


if (module.hot) {
  module.hot.accept('./containers/App.js', () => {
    const NextApp = require('./containers/App.js').default;
    ReactDOM.render(
            <AppContainer>
                <NextApp />
            </AppContainer>,
      document.getElementById('app')
    );
  });
}
ReactDOM.render(<App />, document.getElementById('app'));
