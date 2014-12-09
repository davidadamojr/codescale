'use strict';

angular.module('codeScaleApp.overview', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/overview', {
    templateUrl: 'partials/overview/overview.html',
    controller: 'OverviewCtrl'
  });
}])

.controller('OverviewCtrl', [function() {

}])
.directive('gotoActivity', ['$location', function($location){
  return {
    restrict: 'A',
	link: function(scope, element, attrs){
	  element.on("click", function(){
	    $scope.$apply($location.url('/mainactivity'));
	  });
	}
  };
}]);