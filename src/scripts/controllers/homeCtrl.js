app.controller('homeCtrl', ['$scope',"$state",function($scope,$state){
	$scope.data = {
		"userName":"海燕",
		"fullName":"罗海燕"
	};
	$scope.showExit = false;
	$scope.exit = function (){
		$scope.showExit = true;
	};
	$scope.cancelExit = function (){
		$scope.showExit = false;
	};
	$scope.doExit = function (){
		$scope.showExit = false;
		$state.go("login");
	}
}])