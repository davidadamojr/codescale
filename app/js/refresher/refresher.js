'use strict';

angular.module('codeScaleApp.refresher', ['ngRoute']).config(['$routeProvider',
function($routeProvider) {
	$routeProvider.when('/refresher', {
		templateUrl : 'partials/refresher/refresher.html',
		controller : 'RefresherCtrl'
	});
}]).controller('RefresherCtrl', ['$scope',
function($scope) {
	
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
}]);
