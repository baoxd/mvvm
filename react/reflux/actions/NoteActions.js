var Reflux = require('reflux')

var NoteActions = Reflux.createActions([
	'createNote',
	'editNote'
])

module.exports = NoteActions