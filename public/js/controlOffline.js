angular.module('snapTest')
    .controller('controlOffline',['$scope', '$http', 'factorySnap', function($scope, $http, factorySnap){


    	factorySnap.get().then(function(responseData){
    		$scope.snapData = responseData.data

    		$scope.chatData = []
    		for(var i = 0; i < $scope.snapData.length; i++){
    			if($scope.snapData[i].type === "offline"){
    				$scope.chatData.push($scope.snapData[i])
    			}
    		}
    	})

		$scope.currentPage 	= 1;
		$scope.pageSize 	= 25;

		$scope.pageChangeHandler = function(num) {
		      // console.log('snapData per page changed to: ' + num);
		  }

		$scope.pageChangeHandler = function(num) {
		    // console.log('going to page ' + num);
		}

		$scope.sortType     = 'created'
		$scope.sortReverse  = false

		var lat			= 0
		var lng 		= 0

		// var markers = [];
		$scope.modalDetails = function(snap) {
			$scope.selectedUser = snap
		}		

}]);

angular.module('snapTest')
    .controller('paginationControl',['$scope', function($scope){

    	$scope.pageChangeHandler = function(num) {
    	    // console.log('going to page ' + num);
    	}

}])
