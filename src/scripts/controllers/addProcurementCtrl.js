app.controller('addProcurementCtrl', ['$scope','Upload',function($scope,Upload){
	$scope.now = new Date();
	$scope.data = {  
            file: null,  
            defaultImage: 'images/addImg.png'  
        };  
  
  
        $scope.$watch('data.file', function(newValue, oldValue, scope) {  
            console.log('newValue==' + newValue);  
            console.log('oldValue==' + oldValue);  
             // if($scope.data.file){  
             //    $scope.upload($scope.data.file);  
             // }
        });  
  
  
        // 上传图片  
        $scope.upload = function(file) {  
            Upload.upload({  
                //服务端接收  
                url: 'upload/url',  
                //上传的同时带的文件和参数  
                data: { file: file, 'username': $scope.username }  
            }).then(function(resp) {  
                console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);  
            }, function(resp) {  
                console.log('Error status: ' + resp.status);  
            }, function(evt) {  
                var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);  
                console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);  
            });  
        };  
}])