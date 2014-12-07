'use strict';

angular.module('codeScaleApp.refresher', ['ngRoute']).config(['$routeProvider',
function($routeProvider) {
	$routeProvider.when('/refresher', {
		templateUrl : 'partials/refresher/refresher.html',
		controller : 'RefresherCtrl'
	});
}])

.controller('RefresherCtrl', ['$scope', '$location', 'snippetsService',
function($scope, $location, snippetsService) {
    $scope.showLoading = true;

	snippetsService.getSnippets('/api/v1/refreshers').then(function(response){
		$scope.snippets = response.data.snippets;
		$scope.numberOfSnippets = $scope.snippets.length;
		$scope.showLoading = false;
	});

	$scope.currentSnippet = 0;
	$scope.showOutput = false;
	$scope.disableFinish = true;
	$scope.disableNext = false;
	$scope.disableShowOutput = false;
}])

.directive('refresherFinish', ['$location', function($location){
	return {
		restrict: 'A',
		link: function(scope, element, attrs){
			element.on("click", function(){
				scope.$apply($location.url('/mainactivity'));
			});
		}
	};
}])

.directive('refresherNext', function(){
	return {
		restrict: 'A',
		link: function(scope, element, attrs){
			element.on("click", function(){
				scope.showOutput = false;
		
				if (scope.currentSnippet < scope.snippets.length  - 1){
					scope.currentSnippet = scope.currentSnippet + 1;
					scope.disableFinish = true;
					scope.disableNext = false;
				}
				
				if (scope.currentSnippet == scope.snippets.length - 1){
					scope.disableFinish = false;
					scope.disableNext = true;
				}
				
				scope.disableShowOutput = false;
				scope.$apply();
			});
		}
	}
})

.directive('refresherOutput', function(){
	return {
		restrict: 'A',
		link: function(scope, element, attrs){
			element.on("click", function(){
				scope.showOutput = true;
				scope.disableShowOutput = true;
				scope.$apply();
			});
		}
	};
});
