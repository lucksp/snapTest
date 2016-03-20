angular.module('snapTest')
    .controller('controlHome',['$scope', '$http', 'factorySnap', function($scope, $http, factorySnap){

    	factorySnap.get().then(function(responseData){
    		$scope.snapData = responseData.data

// GLOBAL VARIABLES
		var sum 		= 0
		var count 		= 0
		var waitTime 	= 0
		var duration 	= 0

// AVERAGES
		for(var i = 0; i < $scope.snapData.length; i++){
			if($scope.snapData[i].type === "chat"){
				sum += $scope.snapData[i].survey_score
				waitTime += $scope.snapData[i].chat_waittime
				duration += $scope.snapData[i].chat_duration
				count = i

				$scope.avgScore = sum / count
				$scope.avgTime = waitTime / count
				$scope.duration = duration / count
					// console.log($scope.avgScore, $scope.avgTime, $scope.duration)
    			}
    		}
		})

// POPULAR REFERRALS

 var dt = new Date(1419675791970);
 console.log(dt)


}]);