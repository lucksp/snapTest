angular.module('snapTest')
	.config(['$routeProvider', function($routeProvider){
			$routeProvider
			.when('/', {
				templateUrl : '/html/index.html',
				controller	: 'controlIndex'
			})
			.when('/open', {
				templateUrl : '/html/open.html',
				controller	: 'controlOpen'
			})
			.when('/offline', {
				templateUrl : '/html/offline.html',
				controller	: 'controlOffline'
			})
	}])