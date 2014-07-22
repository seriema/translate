'use strict';

/**
 * @ngdoc function
 * @name translapediaApp.controller:NotFoundAmbiguousCtrl
 * @description
 * # NotFoundAmbiguousCtrl
 * Controller of the translapediaApp
 */
angular.module('translapediaApp')
  .controller('NotFoundAmbiguousCtrl', function ($scope) {
		$scope.toLang = 'Portuguese';
		$scope.term = 'trek';
		$scope.desc = 'A trek is a long, adventurous journey undertaken on foot in areas where common means of transport are generally not available. Trekking should not be confused with mountaineering. In North America the equivalent is backpacking, while New Zealanders use the word tramping.';
		$scope.imageUrl = '//upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Gorbeia_park.jpg/480px-Gorbeia_park.jpg';
  });
