'use strict';

/**
 * @ngdoc directive
 * @name translapediaApp.directive:translateInput
 * @description
 * # translateInput
 */
angular.module('translapediaApp')
  .directive('translateInput', function () {
    return {
			restrict: 'E',
      templateUrl: 'views/directives/translate-input.html',
			controller: function ($scope, $location) {
				$scope.term = $scope.term || '';
				$scope.toLangId = 'pt-BR';
				$scope.fromLangId = 'en-US';

				$scope.translate = function () {
					$location.path('/translate').search({
						term: $scope.term,
						from: $scope.fromLangId,
						to: $scope.toLangId
					});
				};
			}
    };
  });
