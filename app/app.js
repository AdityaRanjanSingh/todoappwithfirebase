'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.router',
  'myApp.login',
  'myApp.notes'
]).
config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
 /* $urlRouterProvider.hashPrefix('!');*/

  $urlRouterProvider.otherwise('/login');
}]);
