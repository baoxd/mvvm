var React = require('react') ,
	ReactDOM = require('react-dom'),
	Router = require('react-router').Router,
	Route = require('react-router').Route,
	// 这种方式history会自定义_key
	// hashHistory = require('react-router').hashHistory,
	createHistory = require('history').createHashHistory ,
	IndexRoute= require('react-router').IndexRoute,
	Redirect=require('react-router').Redirect,
	IndexLink=require('react-router').IndexLink;

var history = createHistory({
	queryKey: false //禁止history自定义_key
});

var Home = require('./components/Home')
var Login = require('./components/Login')
var Users = require('./components/Users')
var App = React.createClass({
	getInitialState:function(){
		return {
			currentView: 'home',
			islogin:false,
			curruser:null,
			userlist:[]
		}
	},
	componentDidMount: function() {
	},
	methods:function(){
		var self = this
		return {
			login:function(user){
				// console.log(user)
				self.state.userlist.push(user) 
				console.log([].concat(self.state.userlist))
				self.setState({userlist:[].concat(self.state.userlist)})
				self.state.islogin = true 
				self.state.curruser = user ;
			},
			deleteUser: function(id) {

				var userList = self.state.userlist;
				var curruser = self.state.curruser;
				if (!userList || !userList.length) {
					return
				}

				for (var i = 0; i < userList.length; i++) {
					var u = userList[i]
					if (u.id == id) {
						userList.splice(i, 1)
						self.setState({userlist:[].concat(userList)})
						break
					}
				}
				if (curruser && curruser.id == id) {
					self.state.curruser = null
					self.state.islogin = false
				}
			}
		}
	},
	render:function(){

		var self = this 
		if(!self.state.userlist.length){
			var ret = []
			for (var i = 0; i < 9; i++) {
				var u = {
					id: (i + 1),
					name: 'name' + (i + 1),
					age: (20 + i),
					tel: '1375237475' + i
				}
				ret.push(u)
			}
			this.state.userlist = ret ;
		}
		

		var props = {} ;
		for(var k in self.state){
			if(self.state.hasOwnProperty(k)){
				props[k] = self.state[k]
			}
		}
		props['methods'] = this.methods()
		
		return(<div className="container">{self.props.children && React.cloneElement(self.props.children,props)} </div>);
	}
})

ReactDOM.render(
	<Router history={history}>
		<Route path="/" component={App}>
			<IndexRoute component={Home}></IndexRoute>
			<Route path="login" component={Login}></Route>
			<Route path="users" component={Users}></Route>
		</Route>
	</Router>,
	document.querySelector('#app')
)
