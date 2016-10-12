var React = require('react');
var MyButton = require('./MyButton');
var ListStore = require('../stores/ListStore');
var ButtonActions = require('../actions/ButtonActions');

var MyButtonController = React.createClass({
	getInitialState:function(){
		return {
			items:ListStore.getAll()
		};
	},
	componentDidMount:function(){
		ListStore.addChangeListener(this._onChange);
	},
	_onChange:function(){
		this.setState({
			items:ListStore.getAll()
		}) 
	},
	componentWillUnmount:function(){
		ListStore.removeChangeListener(this._onChange);
	},
	createNewItem:function(){
		ButtonActions.addNewItem('new item');
	},
	render:function(){
		return (
			<MyButton 
				items={this.state.items}
				onClick={this.createNewItem}>
			</MyButton>
		);
	}
}) ;

module.exports = MyButtonController ;