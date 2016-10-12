var React = require('react')
var NoteListBox = require('./NoteListBox')
var NoteCreationBox = require('./NoteCreationBox')
var NoteActions = require('../actions/NoteActions')
var connect = require('react-redux').connect

var NoteApp = React.createClass({
	contextTypes : {
		store: React.PropTypes.object
	},
	componentDidMount:function(){
		var store = this.context.store 
		// console.log(store.subscribe)
		// store.subscribe(this.render)
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
	                    <NoteListBox 
	                    		notes={this.props.notes} 
	                    		currentlyEdited={this.props.currentlyEdited}
	                    		onAdd={this.props.onAdd}
	                    		onprevEdit={this.props.onprevEdit} />
	                    <NoteCreationBox 
	                    		notes={this.props.notes} 
	                    		currentlyEdited={this.props.currentlyEdited}
	                    		onCreate={this.props.onCreate}
	                    		onEdit={this.props.onEdit}  />
	                </div>
	           </div>
		)
	}
})

// NoteApp.contextTypes = {
//   store: React.PropTypes.object
// }

function mapStateToProps(state){
	return {
		notes:state.notes,
		currentlyEdited:state.currentlyEdited
	} 
}

function mapDispatchToProps(dispatch){
	return {
		onAdd:function(){
			dispatch(NoteActions.add)
		},
		onCreate:function(note){
			var action = NoteActions.create 
			action.note = note 
			dispatch(action)
		},
		onprevEdit:function(currentlyEdited){
			var action = NoteActions.prevEdit 
			action.currentlyEdited = currentlyEdited 
			dispatch(action)
		},
		onEdit:function(note){

			var action = NoteActions.edit ;
			action.note = note ;
			dispatch(action)
		}
	}
}

module.exports = connect(
	mapStateToProps,
	mapDispatchToProps
)(NoteApp); 