angular.module('snapTest')
    .controller('controlOpen',['$scope', '$http', 'factorySnap', function($scope, $http, factorySnap){

    	factorySnap.get().then(function(responseData){
    		$scope.snapData = responseData.data

    	})

		$scope.currentPage = 1;
		$scope.pageSize = 25;

		$scope.pageChangeHandler = function(num) {
		      // console.log('snapData per page changed to: ' + num);
		  }

		$scope.pageChangeHandler = function(num) {
		    console.log('going to page ' + num);
		}

}]);

angular.module('snapTest')
    .controller('paginationControl',['$scope', function($scope){

    	$scope.pageChangeHandler = function(num) {
    	    // console.log('going to page ' + num);
    	}

}])
