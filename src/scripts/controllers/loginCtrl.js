app.controller('loginCtrl', ["$scope","$state", function($scope,$state){
	
	$scope.loading =function (){
		$state.go('home');
	}
}])