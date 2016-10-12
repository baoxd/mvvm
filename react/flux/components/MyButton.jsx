var React = require('react');

var MyButton = React.createClass({
	render:function(){
		console.info(this.props)
		var items = this.props.items;
		var itemHtml = items.map(function(listItem, i) {
			return <li key = {i} > {listItem} < /li>;
		});
		return (
			<div>
				<ul>{itemHtml}</ul>
				<button onClick={this.props.onClick}>add New Item</button>
			</div>
		)
	}
})

module.exports = MyButton ;