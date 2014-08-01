'use strict';

/**
 * @ngdoc function
 * @name translapediaApp.controller:FoundRedirectCtrl
 * @description
 * # FoundRedirectCtrl
 * Controller of the translapediaApp
 */
angular.module('translapediaApp')
  .controller('FoundRedirectCtrl', function ($scope, $rootScope) {
		if (!$rootScope.translation) {
			$scope.translation = {
				originalTerm: 'trek',

				fromLangId: 'en',
				fromLang: 'English',
				fromTerm: 'Backpacking',
				fromDesc: 'Backpacking is generally an extended journey or walk with a backpack.[1] However, for North American hikers it more frequently describes a multi-day hike that involves camping, ...',
				fromArticleUrl: 'http://en.wikipedia.org/wiki/Backpacking_(wilderness)',

				toLangId: 'sv',
				toLang: 'Swedish',
				toTerm: 'vandring',
				toArticleUrl: 'http://sv.wikipedia.org/wiki/Vandring'

//				imageUrl = '//upload.wikimedia.org/wikipedia/commons/thumb/9/90/Annona_muricata_Blanco1.196.png/474px-Annona_muricata_Blanco1.196.png';
			};
		}
	});
