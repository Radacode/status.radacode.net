import angular from 'angular';
import { check } from './check/check';

const components = angular.module('app.components', [
    check.name
]);

export { components };