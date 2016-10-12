var React = require('react')
var NoteListBox = require('./NoteListBox')
var NoteCreationBox = require('./NoteCreationBox')

var NoteApp = React.createClass({
	getInitialState:function(){
		return {id:null}
	},
	onEdit:function(id){
		this.setState({currentlyEdited:id})
	},
	onAdd:function(){
		this.setState({currentlyEdited:null})
	},
	render:function(){
		return (
			<div className="container">
	                <div className="row header">
	                    <div className="page-header">
	                        <h1>在线记事本</h1>
	                    </div>
	                </div>
	                <div className="row">
	                    <NoteListBox onEdit={this.onEdit} onAdd={this.onAdd}/>
	                    <NoteCreationBox id={this.state.currentlyEdited} />
	                </div>
	           </div>
		)
	}
})

module.exports = NoteApp 