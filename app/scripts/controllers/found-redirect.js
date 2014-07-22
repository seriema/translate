'use strict';

/**
 * @ngdoc function
 * @name translapediaApp.controller:FoundRedirectCtrl
 * @description
 * # FoundRedirectCtrl
 * Controller of the translapediaApp
 */
angular.module('translapediaApp')
  .controller('FoundRedirectCtrl', function ($scope) {
		$scope.fromLang = 'English';
		$scope.term = 'Trekking';
		$scope.fromTerm = 'Trekking';
		$scope.toLang = 'Portuguese';
		$scope.toTerm = 'Trekkizinho';
		$scope.originalTerm = 'trek';
		$scope.desc = 'A trek is a long, adventurous journey undertaken on foot in areas where common means of transport are generally not available. Trekking should not be confused with mountaineering. In North America the equivalent is backpacking, while New Zealanders use the word tramping.';
		$scope.imageUrl = '//upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Gorbeia_park.jpg/480px-Gorbeia_park.jpg';
	});
