angular.module('myApp', [])
	.controller('MyCtrl', function($scope) {
		$scope.genders = ['male', 'female'];
		$scope.mygender = { current: 'female' }
	});