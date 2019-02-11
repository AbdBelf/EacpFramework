'use strict';

angular.module('myApp.phaseB', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/phaseB', {
    templateUrl: 'phaseB/phaseB.html',
    controller: 'PhaseBCtrl'
  });
}])

.controller('PhaseBCtrl', [function() {

}]);