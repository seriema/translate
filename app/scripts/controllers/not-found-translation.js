'use strict';

/**
 * @ngdoc function
 * @name translapediaApp.controller:NotFoundTermCtrl
 * @description
 * # NotFoundTermCtrl
 * Controller of the translapediaApp
 */
angular.module('translapediaApp')
  .controller('NotFoundTranslationCtrl', function ($scope, $rootScope) {
		if (!$rootScope.translation) {
			$scope.translation = {
				originalTerm: 'soursop',

				fromLangId: 'en',
				fromLang: 'English',
				fromTerm: 'Soursop',
				fromDesc: 'Soursop is the fruit of Annona muricata, a broadleaf, flowering, evergreen tree native to Mexico, Cuba, Central America, the Caribbean, and northern South America, primarily ...',

				toLangId: 'sv',
				toLang: 'Swedish'
//				imageUrl = '//upload.wikimedia.org/wikipedia/commons/thumb/9/90/Annona_muricata_Blanco1.196.png/474px-Annona_muricata_Blanco1.196.png';
			};
		}

	});
