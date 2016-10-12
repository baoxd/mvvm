var React = require('react')
var UserList = require('./UserList')


var Users = React.createClass({
	getInitialState:function(){
		return {
			userlist:[]
		}
	},
	deleteUser:function(id){
		this.props.methods.deleteUser(id)
	},
	// componentWillReceiveProps:function(nextProps){
	// 	alert(11)
	// 	console.log(nextProps)
	// 	if(nextProps.userlist){
	// 		console.log(nextProps.userlist)
	// 		this.setState({userlist:nextProps.userlist})
	// 	}
	// },
	backClick:function(){
			window.history.go(-1)
	},
	render:function(){
		console.log(this.props)
		var props = {} ;
		// for(var k in this.state){
		// 	if(this.state.hasOwnProperty(k)){
		// 		props[k] = this.state[k]
		// 	}
		// }
		props.userlist = this.props.userlist 
		props['deleteUser'] = this.deleteUser

		return (
			<div>
				<h2>在线人员列表</h2>
				<UserList  {...props}></UserList>
				<button className="btn btn-default " type="button" onClick={this.backClick}>返回</button>
			</div>
		)
	}
})

module.exports = Users 