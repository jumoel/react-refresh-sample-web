import ReactRefresh from './hmr.js';
import React from 'react';
import ReactDOM from 'react-dom'
import App from './App';

const root = document.getElementById('root');

function render() {
	ReactDOM.render(<App />, root);
};

render();

if (module.hot) {
	module.hot.accept('./App', () => {
		console.log('Accepting update');
		ReactRefresh.performReactRefresh();
	});
}
