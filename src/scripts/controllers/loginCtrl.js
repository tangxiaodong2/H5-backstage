app.controller('loginCtrl', ["$scope","$state", function($scope,$state){
	
	$scope.goHome =function (){
		$state.go('home');
	}
}])