'use strict';

/**
 * @ngdoc overview
 * @name translapediaApp
 * @description
 * # translapediaApp
 *
 * Main module of the application.
 */
angular
  .module('translapediaApp', [
    'ngAnimate',
    'ngRoute',
    'ngSanitize'
  ])

	.constant('languageCodes', {
		en: 'English',
		pt: 'Portuguese',
		sv: 'Swedish'
	})

  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/translate', {
        templateUrl: 'views/translate.html',
        controller: 'TranslateCtrl'
      })
      .when('/found', {
        templateUrl: 'views/found.html',
        controller: 'FoundCtrl'
      })
      .when('/found-redirect', {
        templateUrl: 'views/found-redirect.html',
        controller: 'FoundRedirectCtrl'
      })
      .when('/found-ambiguous', {
        templateUrl: 'views/found-ambiguous.html',
        controller: 'FoundAmbiguousCtrl'
      })
      .when('/not-found', {
        templateUrl: 'views/not-found.html',
        controller: 'NotFoundCtrl'
      })
      .when('/not-found-translation', {
        templateUrl: 'views/not-found-translation.html',
        controller: 'NotFoundTranslationCtrl'
      })
      .when('/not-found-ambiguous', {
        templateUrl: 'views/not-found-ambiguous.html',
        controller: 'NotFoundAmbiguousCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

		$locationProvider.html5Mode(true);
  });
