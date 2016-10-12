import Vue from 'vue'
import App from './App'



window.root = new Vue({
	el: 'body',
	components: {
		App
	}
})

var app = root.$children[0];

window.onpopstate = function(event) {
	var state = event.state;
	if (!state || !state.action) {
		app.currentView = 'home' ;
		return ;
	}
	app.currentView = state.action ;
};
window.history.pushState({action:'home'},'home','home') ;
app.currentView = 'home'


