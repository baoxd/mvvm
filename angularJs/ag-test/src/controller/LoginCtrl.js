var LoginCtrl = function( $scope ){
	var self = this ;
	$scope.loginTrigger = function(){
		var u = {
			id:$scope.id,
			name:$scope.name,
			age:$scope.age,
			tel:$scope.tel
		}
		// console.log( u )
		// console.log($scope.login)
		$scope.login(u);
		$scope.back();
	}

	$scope.back = function(){
		window.history.go(-1)
	}
}

module.exports = LoginCtrl