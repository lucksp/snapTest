angular.module('snapTest')
    .controller('controlOpen',['$scope', '$http', '$timeout', 'leafletData', '$window', 'factorySnap', function($scope, $http, $timeout, leafletData, $window, factorySnap){

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

		$scope.markers = [];
		$scope.showMap = false;
		$scope.modalDetails = function(snap) {
			$scope.showMap = !$scope.showMap
			$scope.selectedUser = snap
			waitTime += $scope.selectedUser.chat_waittime
			duration += $scope.selectedUser.chat_duration

			angular.extend($scope, {
					center: {
						lat: $scope.selectedUser.latitude,
						lng: $scope.selectedUser.longitude,
						zoom: 8
					}
			})
            $scope.$watch("showMap", function(value) {
                if (value === true) {
                    leafletData.getMap().then(function(map) {
                      $timeout(function() {
                        map.invalidateSize()
                      }, 300)
                    })
                }
            });
			
			$scope.markers.push({
								lat: $scope.selectedUser.latitude,
								lng: $scope.selectedUser.longitude,
								focus: true
								})

			console.log('selectedUser: ', $scope.selectedUser.latitude, $scope.selectedUser.longitude)

			$scope.userWaitTime = Math.floor(waitTime/60) + ':' + waitTime%60
			$scope.userDuration = Math.floor(duration/60) + ':' + duration%60
		}

		$scope.resetShowMap = function(){
			$scope.showMap = !$scope.showMap
		}
}]);

angular.module('snapTest')
    .controller('paginationControl',['$scope', function($scope){

    	$scope.pageChangeHandler = function(num) {
    	    // console.log('going to page ' + num);
    	}

}])
