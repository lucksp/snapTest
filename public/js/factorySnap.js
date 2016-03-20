angular.module('snapTest')
	.factory('factorySnap', ['$http', function($http){

		return {
				get 	: function(){
					return $http.get('api/lib')
			}
		}

}]);