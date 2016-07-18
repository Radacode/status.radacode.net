'use strict';

// Declare app level module which depends on views, and components
angular.module('rdcStatus', [
  'ngRoute',
  'rdcStatus.check'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/check'});
}]);
