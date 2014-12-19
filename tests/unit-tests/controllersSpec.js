'use strict';

/* jasmine specs for controllers go here */
describe('welcome controller', function(){
  describe('WelcomeCtrl', function(){
    var $scope;
	
	beforeEach(module('codeScaleApp.welcome'));
	
	beforeEach(inject(function($rootScope, $controller){
	  $scope = $rootScope.$new();
	  $controller('WelcomeCtrl', {$scope: $scope});
	}));
	
	it('should set the default value of showFeedback', function(){
	  expect($scope.showFeedback).toBe(false);
	});
  });
});

