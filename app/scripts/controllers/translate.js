'use strict';

/**
 * @ngdoc function
 * @name translapediaApp.controller:TranslateCtrl
 * @description
 * # TranslateCtrl
 * Controller of the translapediaApp
 */
angular.module('translapediaApp')
  .controller('TranslateCtrl', function ($scope) {
    $scope.fromLang = 'English';
		$scope.fromTerm = 'Soursop';
		$scope.toLang = 'Portuguese';
		$scope.toTerm = 'Graviola';
		$scope.desc = 'Soursop is the fruit of Annona muricata, a broadleaf, flowering, evergreen tree native to Mexico, Cuba, Central America, the Caribbean, and northern South America, primarily ...';
		$scope.imageUrl = '//upload.wikimedia.org/wikipedia/commons/thumb/9/90/Annona_muricata_Blanco1.196.png/474px-Annona_muricata_Blanco1.196.png';
  });
