var React = require('react')
var NoteList = require('./NoteList')

var NoteListBox = React.createClass({
	handleClick:function(e){
		e.preventDefault()
		this.props.onAdd()
	},
	// contextTypes : {
	// 	store: React.PropTypes.object
	// },
	// componentDidMount:function(){
	// 	var store = this.context.store 
	// 	// console.log(store.subscribe)
	// 	// store.subscribe(this.render)
	// },
	render:function(){
		return (
			<div className="col-md-4">
				<div className="centered"><a href="" onClick={this.handleClick}>添加</a></div>
				<NoteList  
						currentlyEdited={this.props.currentlyEdited}
	                    		notes={this.props.notes}
	                    		onprevEdit={this.props.onprevEdit}/>
			</div>
        	)
	}
})

module.exports = NoteListBox