var React = require('react')

var NoteList = React.createClass({
	getInitialState:function(){
		return {activeNoteId:null}
	},
	setActiveNote:function(id){
		this.setState({activeNoteId:id})
	},
	handleClick:function(id,e){
		e.preventDefault()
		this.setActiveNote(id)
		this.props.onEdit(id)
	},
	render:function(){
		var self = this ;
		var notes = this.props.notes.concat().reverse();
		var activeNoteId = this.state.activeNoteId ;

		var noteNodes = notes.map(function(note){
			var className = (activeNoteId === note._id ) ? 'active':'';
			var title = note.text.length >= 20 ? note.text.substring(0,20) : note.text;

			return (
				<a key={note._id} href="#" className={'list-group-item '+className} onClick={self.handleClick.bind(self,note._id)}>{title}</a>
			);
		})

		return (
			<div className="list-group">
				{noteNodes}
			</div>
		)
	}
})

module.exports = NoteList