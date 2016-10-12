var React = require('react')

var UserList = React.createClass({
	deleteUser:function(id){
		if(!id) return 
		this.props.deleteUser(id)
	},
	render:function(){
		var self = this
		var userlist = this.props.userlist
		var list = [] 
		
		if(userlist.length){
			for(var i = 0 ; i < userlist.length ; i++){
				var user = userlist[i]
				list.push(<tr key={user.id}>
			        <td>{ user.id }</td>
			            <td>{ user.name }</td>
			            <td>{ user.tel }</td>
			            <td>{ user.age }</td>
			            <td><button type="button" className="btn btn-danger" onClick={self.deleteUser.bind(self,user.id)} >删除</button></td>
			      </tr>)
			}
		}

		return (
			<table className="table">
			      <tbody>
			      	<tr>
			      	  <td>编号</td>
			      	  <td>姓名</td>
			      	  <td>电话</td>
			      	  <td>年龄</td>
			      	  <td>操作</td>
			      	</tr>
			      	{ list }
			      </tbody>
			</table>
		)
	}
})

module.exports = UserList 