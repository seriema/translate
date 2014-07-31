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
				fromLangId: 'en',
				originalTerm: 'trek',
				fromTerm: 'Backpacking',
				toLangId: 'pt',
				fromDesc: 'Backpacking is generally an extended journey or walk with a backpack.[1] However, for North American hikers it more frequently describes a multi-day hike that involves camping, ...'
//				imageUrl = '//upload.wikimedia.org/wikipedia/commons/thumb/9/90/Annona_muricata_Blanco1.196.png/474px-Annona_muricata_Blanco1.196.png';
			};
		}
  });
