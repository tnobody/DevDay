'use strict';
var HomePackage =  require('./home'),
    ExercisePackage = require('./exercise'),
    AppCtx = require('./AngularContext');
/*
var Application = angular.module('FitDev', ['ngRoute']);
console.log('App init');
*/


AppCtx.ApplicationContext.config(function($routeProvider) {
    $routeProvider.
        when('/home', {
            templateUrl: 'html/home.html',
            controller: HomePackage.HomeController
        }).
        when('/excercise/list', {
            templateUrl: 'html/excercise/list.html',
            controller: ExercisePackage.ExerciseListController
        }).
        otherwise( {
            redirectTo: '/home'
        })
});