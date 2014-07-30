'use strict';

/**
 * @ngdoc function
 * @name translapediaApp.controller:FoundCtrl
 * @description
 * # FoundCtrl
 * Controller of the translapediaApp
 */
angular.module('translapediaApp')
  .controller('FoundCtrl', function ($scope, $rootScope) {
		if ($rootScope.translation) {
			angular.extend($scope, $rootScope.translation);
		} else {
			$scope.fromLang = 'English';
			$scope.term = 'Soursop';
			$scope.fromTerm = 'Soursop';
			$scope.toLang = 'Portuguese';
			$scope.toTerm = 'Graviola';
			$scope.desc = 'Soursop is the fruit of Annona muricata, a broadleaf, flowering, evergreen tree native to Mexico, Cuba, Central America, the Caribbean, and northern South America, primarily ...';
			$scope.imageUrl = '//upload.wikimedia.org/wikipedia/commons/thumb/9/90/Annona_muricata_Blanco1.196.png/474px-Annona_muricata_Blanco1.196.png';
		}
  });
