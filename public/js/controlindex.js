angular.module('snapTest')
    .controller('controlIndex',['$scope', '$http', 'factorySnap', function($scope, $http, factorySnap){
    	
	angular.extend($scope, {
	                centerMap: {
	                    lat: 28.808,
	                    lng: -22.146,
	                    zoom: 3
	                },
	                defaults: {
	                        scrollWheelZoom: false
	                }		                
	})

    	factorySnap.get().then(function(responseData){
    		$scope.snapData = responseData.data

// GLOBAL VARIABLES
		var sum 		= 0
		var waitTime 	= 0
		var duration 	= 0
		$scope.referralList = []

// CHAT AVERAGES
		for(var i = 0; i < $scope.snapData.length; i++){
			if($scope.snapData[i].type === "chat"){
				sum += $scope.snapData[i].survey_score
				waitTime += $scope.snapData[i].chat_waittime
				duration += $scope.snapData[i].chat_duration
				$scope.chatCount = i
				$scope.avgScore = Math.round(sum / $scope.chatCount)
				$scope.avgTime = Math.round(waitTime / $scope.chatCount)

				var stndDuration = Math.round(duration/$scope.chatCount)
				$scope.avgDuration = Math.floor(stndDuration/60) + ':' + stndDuration%60
			}
    		if($scope.snapData[i].type === "offline"){
   				$scope.offlineCount = i
    		}
 // TOP REFERRALS
    		if($scope.snapData[i].referrer_url.match('http')){
    			$scope.referralList.push($scope.snapData[i].referrer_url.match(/([^\/,\s]+\.[^\/,\s]+?)(?=\/|,|\s|$|\?|#)/g, ""))
    			// console.log($scope.referralList)
    			// $scope.topReferrals = function(referralList){
	    		// 	var counts = {}
	    		// 	var value
	    		// 	for(var j = 0; j < $scope.referralList.length; j++){
	    		// 		value = $scope.referralList[j]
	    		// 		count[value]++
	    		// 	}
	    		// 	console.log(counts)
    			// }
    		}
		}
// MAPPING
		$scope.markers = []
		for (var k = 0; k < $scope.snapData.length; k++){
		        $scope.markers.push({
		        	group	: 'snapData',
		            lat 	: $scope.snapData[k].latitude,
		            lng 	: $scope.snapData[k].longitude,
		            message	: 'created on: ' + new Date($scope.snapData[k].created_at)
		        })
		        console.log($scope.markers)
		}               

	})


 // var dt = new Date(1419675791970);
 // console.log(dt)


}]);