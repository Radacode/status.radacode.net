import angular from 'angular';
import { checkComponent } from './check.component';

export const check = angular.module('check',[])
    .config(($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise('/');
        $stateProvider.state('check', {
            url: '/',
            template: '<check></check>'
        });
    })
    .component('check', checkComponent);