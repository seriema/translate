'use strict';

/**
 * @ngdoc function
 * @name translapediaApp.controller:NotFoundCtrl
 * @description
 * # NotFoundCtrl
 * Controller of the translapediaApp
 */
angular.module('translapediaApp')
  .controller('NotFoundCtrl', function ($scope, $rootScope) {
		if (!$rootScope.translation) {
			$scope.translation = {
				fromLangId: 'en',
				originalTerm: 'prffteghh',
				toLangId: 'sv'
			};
		}
  });
