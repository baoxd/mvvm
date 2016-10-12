var React = require('react')
var TextArea = require('./TextArea')

var NoteCreationBox = React.createClass({
	render:function(){
		var id = this.props.currentlyEdited 
		var noteText = '' 
		if(id){
			var _notes = this.props.notes 
			for (var i = 0; i < _notes.length; i++) {
				if (_notes[i]._id === id) {
					note = _notes[i];
					noteText = note.text 
					break ;
				}
			}
		}
		return (
			<div className="col-md-8">
				<TextArea  
					id={id} 
					noteText={noteText}
					onCreate={this.props.onCreate}
	                    	onEdit={this.props.onEdit} />
			</div>
		)
	}
})

module.exports = NoteCreationBox