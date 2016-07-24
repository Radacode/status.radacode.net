import { appComponent } from './app.component';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';

import { components } from './components/components';

angular.module('app', [
    uiRouter,
    ngAnimate,
    components.name
]).config(($locationProvider) => {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
})
.component('app', appComponent);
