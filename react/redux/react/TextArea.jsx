var React = require('react')

var TextArea = React.createClass({
	getInitialState:function(){
		return {noteText:''}
	},
	handleChange:function(e){
		var noteText = e.target.value 
		this.setState({noteText:noteText})
	},
	handleSave:function(){
		var id = this.props.id 
		var noteText = this.refs.textArea.value 

		if(id){
			this.props.onEdit({_id:id,text:noteText})
		}else{
			this.props.onCreate({_id:Date.now(),text:noteText})
			this.refs.textArea.value = '' 
		}
	},
	componentWillReceiveProps:function(nextProps){
		if(!nextProps.id){
			this.refs.textArea.focus();
		}
		this.setState({noteText: nextProps.noteText})
	},
	render: function() {
		return (
			<div>
				<textarea className="form-control" ref="textArea" cols="100" rows="20" value={this.state.noteText} onChange={this.handleChange}></textarea><br/>
				<input type="button" className="btn btn-success btn-lg" value="保存" onClick={this.handleSave}/>
			</div>
		)
    }
})

module.exports = TextArea