'use strict';

angular.module('codeScaleApp.refresher', ['ngRoute']).config(['$routeProvider',
function($routeProvider) {
	$routeProvider.when('/refresher', {
		templateUrl : 'partials/refresher/refresher.html',
		controller : 'RefresherCtrl'
	});
}]).controller('RefresherCtrl', ['$scope', '$location',
function($scope, $location) {
	
	$scope.currentSnippet = 0;
	$scope.snippets = [{
		snippetText : "This is snippet 1",
		output : "65"
	}, {
		snippetText : "This is snippet 2",
		output : "82"
	}, {
		snippetText : "This is snippet 3",
		output : "71"
	}];
	
	$scope.numberOfSnippets = $scope.snippets.length;
	$scope.showOutput = false;
	$scope.disableFinish = true;
	$scope.disableNext = false;
	$scope.disableShowOutput = false;
	
	$scope.getNext = function(){
		$scope.showOutput = false;
		
		if ($scope.currentSnippet < $scope.snippets.length  - 1){
			$scope.currentSnippet = $scope.currentSnippet + 1;
			$scope.disableFinish = true;
			$scope.disableNext = false;
		}
		
		if ($scope.currentSnippet == $scope.snippets.length - 1){
			$scope.disableFinish = false;
			$scope.disableNext = true;
		}
	};
	
	$scope.doShowOutput  = function(){
		$scope.disableShowOutput = true;
		$scope.showOutput = true;
	};
	
	$scope.refresherFinish = function(){
		$location.url('/mainactivity');
	};
}]);
