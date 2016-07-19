'use strict';

import 'angular';

console.log(angular);
// Declare app level module which depends on views, and components
var mainApp = angular.module('rdcStatus', [
    'ui.router'
]);

mainApp.config(['$locationProvider', '$stateProvider', '$urlRouterProvider', function ($locationProvider, $stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('check', {
            url: '/',
            templateUrl: "/check-view/check.html",
            controller: "CheckCtrl"
        });

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

    $urlRouterProvider.otherwise('/');
}]);
