app.controller('delProcurementCtrl', ['$scope','$state','$ionicHistory',function($scope,$state,$ionicHistory){
	$scope.item = {
				"name":"三七",
				"size":"120头",
				"price":"320.00元/公斤",
				"area":"云南昆明",
				"date":"2017/03/06"
	};
	$scope.cancelDel = function (){
		$state.go("procurementDetail")
		// $ionicHistory.goBack()
	};
	$scope.doDel = function (){
		$state.go("procurement")
	}
}])