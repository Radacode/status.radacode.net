'use strict';

angular.module('rdcStatus.check', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/check', {
    templateUrl: 'check-view/check.html',
    controller: 'CheckCtrl'
  });
}])

.controller('CheckCtrl', [function() {

}]);