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
		if (!$rootScope.translation) {
			$scope.translation = {
				originalTerm: 'Soursop',

				fromLangId: 'en',
				fromLang: 'English',
				fromTerm: 'Soursop',
				fromDesc: 'Soursop is the fruit of Annona muricata, a broadleaf, flowering, evergreen tree native to Mexico, Cuba, Central America, the Caribbean, and northern South America, primarily ...',
				fromArticleUrl: 'http://en.wikipedia.org/wiki/Soursop',

				toLangId: 'pt',
				toLang: 'Portuguese',
				toTerm: 'Graviola'
//				imageUrl = '//upload.wikimedia.org/wikipedia/commons/thumb/9/90/Annona_muricata_Blanco1.196.png/474px-Annona_muricata_Blanco1.196.png';
			};
		}
  });
