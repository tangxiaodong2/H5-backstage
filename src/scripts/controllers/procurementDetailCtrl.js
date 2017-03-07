app.controller('procurementDetailCtrl', ['$scope', function($scope){
	$scope.good = {
		"name":"三七",
		"size":"120头",
		"area":"四川成都",
		"date":"2017/03/06",
		"imgUrl":"images/addImg.png"
	};
	$scope.show =false;
	$scope.url  = "";
	$scope.showBig = function (url){
		$scope.show =true;
		$scope.url = url;
	};
	$scope.hideBig = function (){
		$scope.show = false;
	}
}])