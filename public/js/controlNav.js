angular.module('snapTest')
    .controller('controlNav',['$scope', '$location', function($scope, $location){

	$scope.isCurrentPath = function (path) {
	      return $location.path() == path;
	    };

}])