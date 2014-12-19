'use strict';

/* jasmine specs for directives go here */

describe('directives', function() {
  var $compile, $rootScope, $cookieStore;
  
  //Store references to $rootScope and $compile
  //so they are available to all tests in this describe block
  beforeEach(inject(function(_$compile_, _$rootScope_, _$cookieStore_){
    //The injector unwraps the underscores (_) from around the parameter names when matching
	$compile = _$compile_;
	$rootScope = _$rootScope_;
	$cookieStore = _$cookieStore_;
  }));
  
  describe('directives in welcome module', function(){
	
    //Load the welcome module
    beforeEach(module('codeScaleApp.welcome'));
	
    it('goes to the overview page when clicked', function(){
      //compile a piece of HTML containing the directive
	  var element = $compile("<button access-code class='btn btn-default'>Submit</button>")($rootScope);
	  var access_code;
	
	  $rootScope.$digest();
	  $('button').trigger("click");
	  expect('click').toHaveBeenTriggeredOn('button');
	  access_code = $cookieStore.get('codeScale.code');
	  
	  expect(access_code).toBe(true);
	  expect($rootScope.feedbackInfo).toBe("authenticating...");
	  expect($rootScope.showFeedback).toBe(true);
	  
	  $cookieStore.remove('codeScale.code');
	});
  });

});
