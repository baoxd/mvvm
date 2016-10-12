var React = require('../../node_modules/react/dist/react-with-addons.js');

var Login = React.createClass({
	// 双向绑定
	mixins: [React.addons.LinkedStateMixin],
	getInitialState:function(){
		return {
			id:'',
			name:'',
			tel:'137523747',
			age:''
		}
	},
	loginClick:function(){
		var self = this 
		var u = {
			id:self.state.id,
			name:self.state.name,
			tel:self.state.tel,
			age:self.state.age
		} ;
		self.props.methods.login(u)
		this.backClick()
	},
	backClick:function(){
		window.history.go(-1)
	},
	render:function(){

		return (
			<form action="#" className="form-signin">
				<h2 className="form-signin-heading">请登录</h2>
				<input type="text"  className="form-control" placeholder="编号" valueLink={this.linkState('id')}/>
				<input type="text"  className="form-control" placeholder="姓名" required autofocus valueLink={this.linkState('name')}/>
				<input type="tel"  className="form-control" placeholder="电话"valueLink={this.linkState('tel')}/>
				<input type="tel"  className="form-control" placeholder="年龄" valueLink={this.linkState('age')}/>
				<div className="checkbox">
					<label><input type="checkbox" value="remember-me"/>记住密码</label>
				</div>
				<button className="btn btn-primary btn-lg btn-block" type="button" onClick={this.loginClick}>登录</button>
				<button className="btn btn-default  btn-lg btn-block" type="button" onClick={this.backClick}>返回</button>
			</form>
		)
	}
})

module.exports = Login