angular.module('myApp', [])
	.controller('MyCtrl', function($scope) {
		$scope.genders = ['male', 'female'];
		$scope.mygender = { current: 'female' }
		$scope.myview = 1
		$scope.submit = function() {
				
		}
		
	});