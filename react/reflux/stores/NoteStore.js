var Reflux = require('reflux')
var NoteActions = require('../actions/NoteActions')

var _notes = [
	// {_id:1,text:1}
] ;

var NoteStore = Reflux.createStore({
	init:function(){
		// 监听action动作
		this.listenTo(NoteActions.createNote,this.onCreate)
		this.listenTo(NoteActions.editNote,this.onEdit)
	},
	onCreate:function(note){
		_notes.push(note);
		this.trigger(_notes)
	},
	onEdit: function(note) {
		for (var i = 0; i < _notes.length; i++) {
			if (_notes[i]._id === note._id) {
				_notes[i].text = note.text;
				this.trigger(_notes);
				break;
			}
		}
	},
	getNotes:function(){
		return _notes 
	},
	getNote: function(id) {
		for (var i = 0; i < _notes.length; i++) {
			if (_notes[i]._id === id) {
				return _notes[i];
			}
		}
	}
})

module.exports = NoteStore 

