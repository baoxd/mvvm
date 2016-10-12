var React = require('react')
var NoteList = require('./NoteList')
var NoteStore = require('../stores/NoteStore')

var NoteListBox = React.createClass({
	getInitialState:function(){
		return {notes:NoteStore.getNotes()}
	},
	onChange:function(notes){
		this.setState({notes:notes})
	},
	componentDidMount:function(){
		this.unsubscribe = NoteStore.listen(this.onChange)
	},
	componentWillUnmount:function(){
		this.unsubscribe()
	},
	onAdd:function(e){
		e.preventDefault()
		this.props.onAdd()
		this.refs.noteList.setActiveNote(null)
	},
	render:function(){
		return (
			<div className="col-md-4">
				<div className="centered"><a href="" onClick={this.onAdd}>添加</a></div>
				<NoteList ref="noteList" notes={this.state.notes} onEdit={this.props.onEdit} />
			</div>
        	)
	}
})

module.exports = NoteListBox