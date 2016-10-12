var React = require('react');
var ReactDOM = require('react-dom')
var NoteApp = require('../react/NoteApp');
var store = require('../store/NoteStore')
var Provider = require('react-redux').Provider


ReactDOM.render(
	<Provider store={store}>
		<NoteApp />
	</Provider>,
	document.querySelector('#app')
) ;