'use strict';

mainApp.controller('CheckCtrl', ['$scope', '$timeout', '$http', function($scope, $timeout, $http) {
  $scope.radacodeNetState = 'evaluating';
  $timeout(function() {
      $http.get('https://radacode.net')
          .success(function() {
              $scope.radacodeNetState = 'active';
          })
          .error(function() {
              $scope.radacodeNetState = 'unavailable';
          });
  }, 1000);
}]);