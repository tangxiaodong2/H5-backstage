app.controller('changePwdCtrl',["$scope","$state", function($scope,$state){
	
	$scope.goHome =function (){
		$state.go('home');
	}
}])