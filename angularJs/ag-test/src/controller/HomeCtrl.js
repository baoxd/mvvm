var HomeCtrl = function($scope, $timeout, $location){
	$scope.islogin = $scope.$root.state.islogin;
	$scope.curruser = $scope.$root.state.curruser ;
	console.log($scope)
	
}

module.exports = HomeCtrl