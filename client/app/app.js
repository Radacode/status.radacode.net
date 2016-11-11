import { appComponent } from './app.component';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';

import { components } from './components/components';
import { services } from "./services/";

angular.module('app', [
    uiRouter,
    ngAnimate,
    components.name,
    services.name
]).config(($locationProvider) => {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
})
.component('app', appComponent);
