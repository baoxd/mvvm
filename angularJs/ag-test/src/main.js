var app = angular.module('userAdmin',['ngRoute']);

// 注册controller
// app.controller('HomeCtrl', require('./controller/HomeCtrl'));

app.config(function( $routeProvider ){
	$routeProvider
		.when('/' , {
			templateUrl: 'tpl/home.html',
			controller: require('./controller/HomeCtrl')
		})
		.when('/login' , {
			templateUrl: 'tpl/login.html',
			controller: require('./controller/LoginCtrl')
		})
		.when('/users',{
			templateUrl: 'tpl/user.html',
			controller: require('./controller/UserCtrl')
		})
		.otherwise({
			redirectTo: '/'
		});
})

app.run(function($rootScope) {
	// 定义全局scope
	$rootScope.state = {
		islogin:false,
		curruser:null,
		userlist:[]
	};

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
	$rootScope.state.userlist = ret ;

	$rootScope.login = function(user){
		var state = {} ;
		var userlist = $rootScope.state.userlist ;

		userlist.push(user)
		state.userlist = userlist ;
		state.islogin = true ;
		state.curruser = user ;
		
		$rootScope.state = state ;

		// console.log($rootScope.state)

	}

	$rootScope.deleteUser = function(id){

		var userList = $rootScope.state.userlist;
		var curruser = $rootScope.state.curruser;

		if (!userList || !userList.length) {
			return
		}

		for (var i = 0; i < userList.length; i++) {
			var u = userList[i]
			if (u.id == id) {
				userList.splice(i, 1)
				break
			}
		}
		if (curruser && curruser.id == id) {
			$rootScope.state.curruser = null
			$rootScope.state.islogin = false 
		}
	}

	$rootScope.back = function(){
		window.history.go(-1)
	}

});

function bootstrap() {
	angular.element(document).ready(function() {
		angular.bootstrap(document, ['userAdmin']);
	});
}

bootstrap();

