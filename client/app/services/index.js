import angular from 'angular';
import {statusCheck} from "./statusCheck/statusCheck.service.js";

export const services = angular
    .module("app.services",[])
    .service("statusCheck",statusCheck);