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

				    $scope.getCSSClass = function() {
				    	if($scope.avgScore >= 50){
				    		return 'scoreOver50'
				    	}
				    	else {
				    		return 'scoreUnder50'
				    	}
				  }     
			}
    		if($scope.snapData[i].type === "offline"){
   				$scope.offlineCount = i
    		}
 // TOP REFERRALS
    		if($scope.snapData[i].referrer_url.match('http')){
    			$scope.referralList.push($scope.snapData[i].referrer_url.match(/([^\/,\s]+\.[^\/,\s]+?)(?=\/|,|\s|$|\?|#)/g, ""))
    			var mostFrequentItemCount = function(collection) {
    			    collection.sort()
    			    var i=0
    			    var ans=[]
    			    var int_ans=[]
    			    while(i<collection.length)
    			    {
    			        if(collection[i]===collection[i+1])
    			        {
    			            int_ans.push(collection[i])
    			        }
    			        else
    			        {
    			            int_ans.push(collection[i])
    			            ans.push(int_ans)
    			            int_ans=[]
    			        }
    			        i++;
    			    }
    			    $scope.high_count=0
    			    $scope.high_ans
    			    i=0;
    			    while(i<ans.length)
    			    {
    			        if(ans[i].length>$scope.high_count)
    			        {
    			            $scope.high_count=ans[i].length
    			            $scope.high_ans=ans[i][0][0]
    			            // console.log(high_count)
    			        }
    			        i++;
    			    }
    			    return $scope.high_ans[0], ans
    			}
    			mostFrequentItemCount($scope.referralList)
    		}
		}
// MAPPING
		$scope.markers = []
		for (var k = 0; k < $scope.snapData.length; k++){
		        $scope.markers.push({
		        	group	: 'snapData',
		            lat 	: $scope.snapData[k].latitude,
		            lng 	: $scope.snapData[k].longitude,
		            message	: 'Created on: ' + new Date($scope.snapData[k].created_at) + '<br>Type: ' + $scope.snapData[k].type + '<br>Requested By: ' + $scope.snapData[k].requested_by + '<br>Chat Wait Time: ' + $scope.snapData[k].chat_waittime + ' seconds' + '<br>Chat Duration: ' + $scope.snapData[k].chat_duration + ' seconds'  + '<br>Chat Survey: ' + $scope.snapData[k].survey_score
		        })
		}               

	})

 // var dt = new Date(1419675791970);
 // console.log(dt)


}]);