var React = require('react')

var Home = React.createClass({
	componentDidMount:function(){
		// console.log(this)
	},
	render:function(){
		return (
			<div>
				<h2>Demo of React-router</h2>
				<div>
					{this.props.islogin && <h2 >当前用户:{this.props.curruser.name} </h2>}
					{!this.props.islogin && <a role="button" v-show="!islogin" className="btn btn-primary btn-lg" href="#/login">登录</a>}&nbsp; &nbsp;    
					<a role="button" className="btn btn-primary btn-lg" href="#/users">人员管理</a>
			  	</div>
			</div>
		)
	}
})

module.exports = Home 