'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
  'ngRoute',
  'myApp.phaseA',
  'myApp.phaseB',
  'myApp.phaseC1',
  'myApp.phaseC2',
  'myApp.phaseD',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/phaseA'});
}]);
