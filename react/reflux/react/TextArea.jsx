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
		this.props.onSave(this.state.noteText,this.props.id)
		if(!this.props.id){
			// 高版本不建议使用getDOMNode
			// this.refs.textArea.getDOMNode().value = '' 
			this.refs.textArea.value = '' 
			this.setState({noteText:''})
		}
	},
	componentWillReceiveProps:function(nextProps){
		this.setState({
			noteText: nextProps.noteText
		});

		if(!nextProps.id){
			this.refs.textArea.focus();
		}
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