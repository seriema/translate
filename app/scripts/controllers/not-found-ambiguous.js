'use strict';

/**
 * @ngdoc function
 * @name translapediaApp.controller:NotFoundAmbiguousCtrl
 * @description
 * # NotFoundAmbiguousCtrl
 * Controller of the translapediaApp
 */
angular.module('translapediaApp')
  .controller('NotFoundAmbiguousCtrl', function ($scope, $rootScope) {
		if (!$rootScope.translation) {
			$scope.translation = {
				originalTerm: 'trek',

				fromLangId: 'en',
				fromLang: 'English',
				fromTerm: 'Backpacking',
				fromDesc: 'Backpacking is generally an extended journey or walk with a backpack.[1] However, for North American hikers it more frequently describes a multi-day hike that involves camping, ...',

				toLangId: 'pt',
				toLang: 'Portuguese'

//				imageUrl = '//upload.wikimedia.org/wikipedia/commons/thumb/9/90/Annona_muricata_Blanco1.196.png/474px-Annona_muricata_Blanco1.196.png';
			};
		}
  });
