'use strict';

/**
 * @ngdoc function
 * @name translapediaApp.controller:FoundAmbiguousCtrl
 * @description
 * # FoundAmbiguousCtrl
 * Controller of the translapediaApp
 */
angular.module('translapediaApp')
  .controller('FoundAmbiguousCtrl', function ($scope, $rootScope) {
		if (!$rootScope.translation) {
			$scope.translation = {
				originalTerm: 'trek'
			};
		}
	});
