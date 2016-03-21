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
			.when('/complete', {
				templateUrl : '/html/complete.html',
				controller	: 'controlComplete'
			})
	}])