'use strict';

/**
 * @ngdoc overview
 * @name yapp
 * @description
 * # yapp
 *
 * Main module of the application.
 */
angular
  .module('yapp', [
    'ui.router',
		
    'ui.bootstrap'
  ])
  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when('/dashboard', '/dashboard/overview');
    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('base', {
        abstract: true,
        url: '',
        templateUrl: 'views/base.html'
      })
        .state('home', {
          url: '/home',
          parent: 'base',
          templateUrl: 'views/home.html',
          controller: 'HomeCtrl'
        })
        .state('admission', {
          url: '/admission',
          parent: 'base',
          templateUrl: 'views/admission.html',
          controller: 'AdmissionCtrl'
        })
				.state('academics', {
          url: '/academics',
          parent: 'base',
          templateUrl: 'views/academics.html',
          controller: 'AcademicsCtrl'
        });


  });
