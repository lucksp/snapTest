angular.module('snapTest')
    .controller('controlOpen',['$scope', '$http', 'factorySnap', function($scope, $http, factorySnap){


	// angular.extend($scope, {
		
 //            })

    	factorySnap.get().then(function(responseData){
    		$scope.snapData = responseData.data

    		$scope.chatData = []
    		for(var i = 0; i < $scope.snapData.length; i++){
    			if($scope.snapData[i].type === "chat"){
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


		var waitTime 	= 0
		var duration 	= 0
		var lat			= 0
		var lng 		= 0

		// var markers = [];
		$scope.modalDetails = function(snap) {
			$scope.selectedUser = snap

			waitTime += $scope.selectedUser.chat_waittime
			duration += $scope.selectedUser.chat_duration

			$scope.userWaitTime = Math.floor(waitTime/60) + ':' + waitTime%60
			$scope.userDuration = Math.floor(duration/60) + ':' + duration%60
		}		

}]);

angular.module('snapTest')
    .controller('paginationControl',['$scope', function($scope){

    	$scope.pageChangeHandler = function(num) {
    	    // console.log('going to page ' + num);
    	}

}])
