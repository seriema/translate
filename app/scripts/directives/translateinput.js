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
			controller: function ($scope, $location, languageCodes) {
				$scope.term = $scope.term || '';
				$scope.toLangId = 'pt';
				$scope.fromLangId = 'en';

				$scope.languages = Object.keys(languageCodes).map(function(key) {
					return {
						id: key,
						text: languageCodes[key]
					};
				});

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
