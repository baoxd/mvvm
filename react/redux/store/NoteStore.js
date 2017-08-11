var createStore = require('redux').createStore

// store处理逻辑
/*
	如何从业务组件中获取数据，是一个问题
*/
function noteReducers(defaultState,action){
	if(!defaultState){
		defaultState = {} 
	}
	var _notes = defaultState.notes || [] ;
	var _currentlyEdited = defaultState.currentlyEdited || '' ;
	_notes = [].concat(_notes)

	switch(action.type){
		case 'add':
			_currentlyEdited = '' ;
			break
		case 'create':
			_currentlyEdited = action.note._id 
			_notes.push(action.note);
			break
		case 'prevEdit':
			_currentlyEdited = action.currentlyEdited
			break 
		case 'edit':
			var note = action.note ;
			_currentlyEdited = note._id 
			for (var i = 0; i < _notes.length; i++) {
				if (_notes[i]._id === _currentlyEdited) {
					_notes[i] = {_id:_currentlyEdited,text:note.text};
					break;
				}
			}
			break
		default:
			return {notes:_notes,currentlyEdited:_currentlyEdited}
	}

	return {notes:_notes,currentlyEdited:_currentlyEdited}
}

module.exports = createStore(noteReducers)

